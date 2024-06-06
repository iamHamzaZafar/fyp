import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Role from '../models/role.model.js';

dotenv.config();

const rolesData = [
  {
    name: 'student',
    permissions: ['view_project', 'create_task', 'view_task', 'send_message', 'view_message'],
  },
  {
    name: 'supervisor',
    permissions: ['view_project', 'edit_project', 'view_task', 'edit_task', 'send_message', 'view_message'],
  },
  {
    name: 'admin',
    permissions: ['create_user', 'edit_user', 'delete_user', 'view_user'],
  },
];

const seedRoles = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Role.deleteMany({});
    await Role.insertMany(rolesData);
    console.log('Roles seeded successfully');
  } catch (err) {
    console.error('Error seeding roles:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedRoles();
