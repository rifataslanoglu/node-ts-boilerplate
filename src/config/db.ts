import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
   
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    
    // eslint-disable-next-line no-console
    console.log(`✅ Successfully connected to MongoDB: ${conn.connection.host}`);
    
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error(`❌ MongoDB connection error: ${error.message}`);
    } else {
      // eslint-disable-next-line no-console
      console.error(`❌ An unexpected error occurred: ${error}`);
    }
  
    process.exit(1); 
  }
};

export default connectDB;