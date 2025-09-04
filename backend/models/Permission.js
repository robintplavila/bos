const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  resource: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true,
    enum: ['create', 'read', 'update', 'delete', 'manage']
  }
});

const Permission = mongoose.model('Permission', permissionSchema);

module.exports = Permission;