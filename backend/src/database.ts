import mongoose from 'mongoose';

export const connectDB = async ({ URI }: { URI: string }) => {
  try {
    await mongoose.connect(URI);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
