import { MongoClient, ObjectId } from 'mongodb';

const updatetodo = async (req, res) => {
    if (req.method === 'PUT') {
        try {
            const id = req.query.id;
            const client = await MongoClient.connect("mongodb+srv://juliantoppo95:juliantoppo95@cluster0.fpxf1yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
            const db = await client.db();
            const collection = db.collection('todo');
            const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { completed: true } });
            client.close();

            if (result.modifiedCount === 1) {
                res.status(200).json({ message: 'Todo updated' });
            } else {
                res.status(404).json({ message: 'Todo not found' });
            }
        } catch (error) {
            console.error("Error occurred:", error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default updatetodo;
