require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/smart_transit';

const seedUsers = async () => {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);

    const users = [
      { username: 'admin', password: '123', role: 'admin' },
      { username: 'user', password: '123', role: 'user' }
    ];

    for (const entry of users) {
      await User.findOneAndUpdate(
        { username: entry.username },
        entry,
        { upsert: true, new: true }
      );
    }

    console.log('✅ Seeded default users: admin/123, user/123');
  } catch (err) {
    console.error('❌ User seeding failed:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seedUsers();
