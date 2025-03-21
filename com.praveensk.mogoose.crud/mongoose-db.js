import mongoose from "mongoose"

await mongoose.connect('mongodb://localhost:27017/e-comm');
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const saveInDB = async () =>{
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel({
        name: 'Praveen',
        price: 300000
    });
    let result = await data.save();
    console.warn(result);
}

const updateInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne({name:'Praveen'},{
        $set:{price:450000}
    });
}

const deleteInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({name: 'Praveen'});
    console.log(data)
}

const findInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find();
    console.log(data)
}

// saveInDB();

// updateInDB();

// deleteInDB();

// findInDB();