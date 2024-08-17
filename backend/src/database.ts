import mongoose from 'mongoose';
import config from './config/default';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
