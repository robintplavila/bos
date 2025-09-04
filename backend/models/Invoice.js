const mongoose = require('mongoose');

const invoiceItemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  rate: {
    type: Number,
    required: true,
    min: 0
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  }
});

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: true,
    unique: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  items: [invoiceItemSchema],
  subtotal: {
    type: Number,
    required: true,
    min: 0
  },
  tax: {
    type: Number,
    required: true,
    min: 0
  },
  total: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['DRAFT', 'SENT', 'PAID', 'OVERDUE', 'CANCELLED'],
    default: 'DRAFT'
  },
  dueDate: {
    type: Date,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Generate invoice number
invoiceSchema.pre('save', async function(next) {
  if (!this.invoiceNumber) {
    const count = await mongoose.model('Invoice').countDocuments();
    this.invoiceNumber = `INV-${String(count + 1).padStart(4, '0')}`;
  }
  next();
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;