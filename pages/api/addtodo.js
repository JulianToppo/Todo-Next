import { MongoClient } from 'mongodb';

const addTodo = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const data = req.body;
            const client = await MongoClient.connect("mongodb+srv://juliantoppo95:juliantoppo95@cluster0.fpxf1yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
            const db = await client.db();
            const collection = db.collection('todo');
            const result = await collection.insertOne(data);
            console.log("Inserted todo:", result);
            client.close();
            
            console.log("function addtodo called")
            res.status(201).json({ message: 'Todo inserted', insertedId: result.insertedId });
        } catch (error) {
            console.error("Error occurred:", error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default addTodo;
