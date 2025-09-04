const { gql } = require('graphql-tag');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    role: Role!
    createdAt: String!
    updatedAt: String!
  }

  type Role {
    id: ID!
    name: String!
    permissions: [Permission!]!
    createdAt: String!
    updatedAt: String!
  }

  type Permission {
    id: ID!
    name: String!
    resource: String!
    action: String!
  }

  type Customer {
    id: ID!
    name: String!
    email: String!
    phone: String
    address: String
    createdAt: String!
    updatedAt: String!
  }

  type Invoice {
    id: ID!
    invoiceNumber: String!
    customer: Customer!
    items: [InvoiceItem!]!
    subtotal: Float!
    tax: Float!
    total: Float!
    status: InvoiceStatus!
    dueDate: String!
    createdBy: User!
    createdAt: String!
    updatedAt: String!
  }

  type InvoiceItem {
    id: ID!
    description: String!
    quantity: Int!
    rate: Float!
    amount: Float!
  }

  enum InvoiceStatus {
    DRAFT
    SENT
    PAID
    OVERDUE
    CANCELLED
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  # Input types
  input LoginInput {
    username: String!
    password: String!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
    roleId: ID!
  }

  input CustomerInput {
    name: String!
    email: String!
    phone: String
    address: String
  }

  input InvoiceItemInput {
    description: String!
    quantity: Int!
    rate: Float!
  }

  input InvoiceInput {
    customerId: ID!
    items: [InvoiceItemInput!]!
    tax: Float!
    dueDate: String!
  }

  input RoleInput {
    name: String!
    permissionIds: [ID!]!
  }

  type Query {
    # Auth
    me: User

    # Users/Staff
    users: [User!]!
    user(id: ID!): User

    # Roles
    roles: [Role!]!
    role(id: ID!): Role
    permissions: [Permission!]!

    # Customers
    customers: [Customer!]!
    customer(id: ID!): Customer

    # Invoices
    invoices: [Invoice!]!
    invoice(id: ID!): Invoice
  }

  type Mutation {
    # Auth
    login(input: LoginInput!): AuthPayload!
    register(input: RegisterInput!): AuthPayload!

    # Users/Staff
    updateUser(id: ID!, input: RegisterInput!): User!
    deleteUser(id: ID!): Boolean!

    # Roles
    createRole(input: RoleInput!): Role!
    updateRole(id: ID!, input: RoleInput!): Role!
    deleteRole(id: ID!): Boolean!

    # Customers
    createCustomer(input: CustomerInput!): Customer!
    updateCustomer(id: ID!, input: CustomerInput!): Customer!
    deleteCustomer(id: ID!): Boolean!

    # Invoices
    createInvoice(input: InvoiceInput!): Invoice!
    updateInvoice(id: ID!, input: InvoiceInput!): Invoice!
    deleteInvoice(id: ID!): Boolean!
    updateInvoiceStatus(id: ID!, status: InvoiceStatus!): Invoice!
  }
`;

module.exports = typeDefs;