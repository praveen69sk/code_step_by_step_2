import express from "express";
import ProductsModel from "../com.praveensk.mogoose.crud/product.js";
import "../com.praveensk.mogoose.crud/mongoose-db.js";

const app = express();
app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  let data = await ProductsModel.find(
    {
        "$or":[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}},
            {"category":{$regex:req.params.key}}
        ]
    }
  );
  resp.send(data);
});

app.listen(4500);
