# MERN Invoicing System

A comprehensive web application for invoicing using the MERN stack (MongoDB, Express.js, React, Node.js) with GraphQL API and modern styling.

![Invoicing System Dashboard](https://github.com/user-attachments/assets/0b927afe-4518-4aa2-9840-79e9177674cf)

## Features

- **Staff CRUD**: Create, read, update, and delete staff records
- **Role CRUD with Permission Grid**: Manage roles and permission matrix for granular access control
- **Customer CRUD**: Manage customer records
- **Login Page for Staff**: Secure authentication for staff members
- **Invoice CRUD**: Full lifecycle management of invoices (create, view, update, delete)
- **Dashboard**: Overview of system metrics and recent activity

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Apollo Server** - GraphQL API server
- **MongoDB** - Database with Mongoose ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

### Frontend
- **React** - UI library with TypeScript
- **Apollo Client** - GraphQL client
- **React Router** - Navigation and routing
- **Custom CSS** - Responsive styling (Tailwind-inspired)

## Project Structure

```
bos/
├── backend/
│   ├── models/          # MongoDB models
│   ├── schema.js        # GraphQL schema definitions
│   ├── resolvers.js     # GraphQL resolvers
│   ├── index.js         # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.tsx      # Main application component
│   │   └── index.css    # Styling
│   └── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/invoicing_system
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

The GraphQL server will be available at `http://localhost:4000/`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The React application will be available at `http://localhost:3000`

## Features Roadmap

### ✅ Completed
- [x] Project structure setup
- [x] Backend GraphQL API with Apollo Server
- [x] MongoDB models and schema
- [x] React frontend with navigation
- [x] Dashboard with metrics display
- [x] Staff, Customer, and Invoice management pages
- [x] Authentication system foundation

### 🚧 In Progress
- [ ] MongoDB connection and data persistence
- [ ] User authentication implementation
- [ ] CRUD operations for all modules
- [ ] Permission system implementation

### 📋 Planned
- [ ] Invoice PDF generation
- [ ] Email notifications
- [ ] Advanced reporting
- [ ] Mobile responsive design
- [ ] Real-time updates
- [ ] Audit logging
- [ ] Data export features

## Development

### Running Tests
```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test
```

### Building for Production
```bash
# Build frontend
cd frontend && npm run build

# Start production server
cd backend && npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please open an issue in the GitHub repository.
