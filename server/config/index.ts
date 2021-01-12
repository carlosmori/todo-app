import dotenv from 'dotenv';

// * Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    /**
     * Your favorite port
     */
    port: process.env.PORT && parseInt(process.env.PORT, 10),
  
    /**
     * That long string from mlab
     */
    databaseURL: process.env.MONGODB_URI,
  };