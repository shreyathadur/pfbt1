import client from './client';

export const getDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    return client.db('pfbt'); // Replace 'pfbt' with your database name if different
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export const closeConnection = async () => {
  try {
    await client.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
  }
};
