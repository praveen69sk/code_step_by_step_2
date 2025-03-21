import { findByProductName, findAllProducts, saveProduct, updateProduct } from "../com.praveensk.repository/ProductRepository.js";

const getProduct = () => {
    findByProductName();
}

const getAllProducts = async () => {
    return await findAllProducts();
}

const createProduct = async (data) => {
    return await saveProduct(data);
}

const modifyProduct = async (oldData, newData) => {
    return await updateProduct(oldData, newData);
}

export {getProduct, getAllProducts, createProduct, modifyProduct}