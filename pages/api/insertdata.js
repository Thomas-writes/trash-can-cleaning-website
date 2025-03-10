import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { fname, lname, review } = req.body;
      
      console.log(req.body);
      // Connect to the MongoDB database
      await client.connect();
      const db = client.db('all-reviews');
      const collection = db.collection("name-review");

      // Insert data
      const result = await collection.insertOne({
        fname,
        lname,
        review,
      });

      res.status(200).json({ message: 'Data inserted successfully!', result });

    } catch (error) {
      res.status(500).json({ message: 'Something went wrong!', error: error.message });
    }
  }
  else if (req.method === 'GET') {
    try {
      // Connect to MongoDB
      await client.connect();
  
      // Select the database and collection
      const db = client.db('all-reviews');
      const collection = db.collection('name-review');
  
      // Fetch all reviews
      const reviews = await collection.find().toArray();
      
      return res.status(200).json({ reviews }); 
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong!', error: error.message });
    }
  }
}