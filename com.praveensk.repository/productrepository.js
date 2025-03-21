import { ObjectId } from "mongodb";
import dbConnect from "./mongodb.js";

const findByProductName = () => {};

const findAllProducts = async () => {
  let collection = await dbConnect();
  let result = await collection.find({}).toArray();
  return result;
};

const saveProduct = async (data) => {
  let collection = await dbConnect();
  let result = await collection.insertOne(data);
  return result;
};

const updateProduct = async (oldData, newData) => {
  let collection = await dbConnect();
  let result = await collection.updateOne(oldData, {
    $set: newData,
  });
  return result;
};

const deleteProduct = async (id) => {
  let collection = await dbConnect();
  let result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result;
};

export { findByProductName, findAllProducts, saveProduct, updateProduct, deleteProduct };
