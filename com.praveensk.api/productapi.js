import express from "express";
import { getProduct, getAllProducts, createProduct, modifyProduct, removeProduct } from "../com.praveensk.service/productservice.js";

const app = express();

app.use(express.json())

const productsApi = () => {
  app.get("/", async (req, resp) => {
    let data = await getAllProducts();
    // resp.writeHead(200, { "content-type": "text/application.json" });
    resp.send(data);
    // resp.end();
  });

  app.post('/', async (req, resp)=>{
    let data = await createProduct(req.body);
    resp.send(data);
  });

  app.put('/:name', async (req, resp)=>{
    let data = await modifyProduct(req.params, req.body)
    resp.send(data);
  });

  app.delete('/:id', async (req, resp)=>{
    let data = await removeProduct(req.params.id);
    resp.send(data);
  });
};

app.listen(4500);

export default productsApi;