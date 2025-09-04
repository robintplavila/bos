const jwt = require('jsonwebtoken');
const { User, Role, Permission, Customer, Invoice } = require('./models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // TODO: Implement authentication middleware
      return null;
    },
    
    users: async () => {
      return await User.find().populate('role');
    },
    
    user: async (parent, { id }) => {
      return await User.findById(id).populate('role');
    },
    
    roles: async () => {
      return await Role.find().populate('permissions');
    },
    
    role: async (parent, { id }) => {
      return await Role.findById(id).populate('permissions');
    },
    
    permissions: async () => {
      return await Permission.find();
    },
    
    customers: async () => {
      return await Customer.find();
    },
    
    customer: async (parent, { id }) => {
      return await Customer.findById(id);
    },
    
    invoices: async () => {
      return await Invoice.find()
        .populate('customer')
        .populate('createdBy');
    },
    
    invoice: async (parent, { id }) => {
      return await Invoice.findById(id)
        .populate('customer')
        .populate('createdBy');
    }
  },

  Mutation: {
    login: async (parent, { input }) => {
      const user = await User.findOne({ username: input.username }).populate('role');
      
      if (!user || !(await user.comparePassword(input.password))) {
        throw new Error('Invalid credentials');
      }
      
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );
      
      return { token, user };
    },
    
    register: async (parent, { input }) => {
      const existingUser = await User.findOne({
        $or: [{ username: input.username }, { email: input.email }]
      });
      
      if (existingUser) {
        throw new Error('User already exists');
      }
      
      const user = new User(input);
      await user.save();
      
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );
      
      return { token, user: await User.findById(user.id).populate('role') };
    },
    
    updateUser: async (parent, { id, input }) => {
      return await User.findByIdAndUpdate(id, input, { new: true }).populate('role');
    },
    
    deleteUser: async (parent, { id }) => {
      await User.findByIdAndDelete(id);
      return true;
    },
    
    createRole: async (parent, { input }) => {
      const role = new Role(input);
      await role.save();
      return await Role.findById(role.id).populate('permissions');
    },
    
    updateRole: async (parent, { id, input }) => {
      return await Role.findByIdAndUpdate(id, input, { new: true }).populate('permissions');
    },
    
    deleteRole: async (parent, { id }) => {
      await Role.findByIdAndDelete(id);
      return true;
    },
    
    createCustomer: async (parent, { input }) => {
      const customer = new Customer(input);
      await customer.save();
      return customer;
    },
    
    updateCustomer: async (parent, { id, input }) => {
      return await Customer.findByIdAndUpdate(id, input, { new: true });
    },
    
    deleteCustomer: async (parent, { id }) => {
      await Customer.findByIdAndDelete(id);
      return true;
    },
    
    createInvoice: async (parent, { input }, context) => {
      // Calculate amounts
      let subtotal = 0;
      const items = input.items.map(item => {
        const amount = item.quantity * item.rate;
        subtotal += amount;
        return { ...item, amount };
      });
      
      const total = subtotal + input.tax;
      
      const invoice = new Invoice({
        ...input,
        items,
        subtotal,
        total,
        createdBy: context.userId // TODO: Get from auth context
      });
      
      await invoice.save();
      return await Invoice.findById(invoice.id)
        .populate('customer')
        .populate('createdBy');
    },
    
    updateInvoice: async (parent, { id, input }) => {
      // Recalculate amounts
      let subtotal = 0;
      const items = input.items.map(item => {
        const amount = item.quantity * item.rate;
        subtotal += amount;
        return { ...item, amount };
      });
      
      const total = subtotal + input.tax;
      
      return await Invoice.findByIdAndUpdate(
        id,
        { ...input, items, subtotal, total },
        { new: true }
      ).populate('customer').populate('createdBy');
    },
    
    deleteInvoice: async (parent, { id }) => {
      await Invoice.findByIdAndDelete(id);
      return true;
    },
    
    updateInvoiceStatus: async (parent, { id, status }) => {
      return await Invoice.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      ).populate('customer').populate('createdBy');
    }
  }
};

module.exports = resolvers;