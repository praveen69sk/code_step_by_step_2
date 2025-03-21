import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const ProductsModel = mongoose.model('products', ProductSchema);

export default ProductsModel;