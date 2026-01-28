import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// GET all records
router.get("/", async (req, res) => {
  try {
    const collection = db.collection("records");
    const results = await collection.find({}).toArray();
    res.status(200).json(results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching records");
  }
});

// GET record by ID
router.get("/:id", async (req, res) => {
  try {
    const collection = db.collection("records");
    const query = { _id: new ObjectId(req.params.id) };
    const result = await collection.findOne(query);

    if (!result) return res.status(404).send("Record not found");
    res.status(200).json(result);
  } catch {
    res.status(400).send("Invalid record ID");
  }
});

// CREATE record
router.post("/", async (req, res) => {
  try {
    const collection = db.collection("records");
    const result = await collection.insertOne({
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    });

    res.status(201).json(result);
  } catch (err) {
    console.error("Error adding record:", err);
    res.status(500).send("Error adding record");
  }
});

// UPDATE record
router.patch("/:id", async (req, res) => {
  try {
    const collection = db.collection("records");
    const result = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body },
    );

    if (result.matchedCount === 0)
      return res.status(404).send("Record not found");

    res.status(200).json(result);
  } catch {
    res.status(400).send("Invalid record ID");
  }
});

// DELETE record
router.delete("/:id", async (req, res) => {
  try {
    const collection = db.collection("records");
    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    if (result.deletedCount === 0)
      return res.status(404).send("Record not found");

    res.status(200).json(result);
  } catch {
    res.status(400).send("Invalid record ID");
  }
});

export default router;
