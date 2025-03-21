import express from "express";
import ProductsModel from "./product.js";
import './mongoose-db.js';

const app = express();
app.use(express.json());

app.post('/create', async (req, resp)=>{
    let data = new ProductsModel(req.body);
    let result = await data.save();
    resp.send(result);
});

app.get('/list', async (req, resp)=>{
   let data = await ProductsModel.find();
   resp.send(data);
});

app.delete('/:_id', async (req, resp)=>{
    let data = await ProductsModel.deleteOne(req.params);
    resp.send(data);
 });

 app.put('/:_id', async (req, resp)=>{
    let result = await ProductsModel.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    resp.send(result);
});

app.listen(4500);