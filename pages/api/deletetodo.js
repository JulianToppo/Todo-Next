import { MongoClient, ObjectId } from "mongodb";

const deletetodo = async (req, res) => {
  console.log(req)
  const id = req.query.id;
  console.log("iddddddd",id);
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://juliantoppo95:juliantoppo95@cluster0.fpxf1yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();
    const collection = db.collection("todo");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    client.close();

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Todo Deleted" });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default deletetodo;
