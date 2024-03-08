import { MongoClient } from 'mongodb';

const gettodo = async (req, res) => {
    try {
        console.log("insdie")
        const client = await MongoClient.connect("mongodb+srv://juliantoppo95:juliantoppo95@cluster0.fpxf1yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        const db = client.db();
        const collection = db.collection('todo');
        const todo = await collection.find().toArray();
        console.log("todo",todo)
        client.close();
        
        res.status(200).json({ message: todo, status: true });
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ message: "Internal server error", status: false });
    }
};

export default gettodo;
