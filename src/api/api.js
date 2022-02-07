import { ApiUrl } from '../config/default';
import axios from 'axios';

const API_URL = ApiUrl;

export async function getProducts() {
    var products = [];
    const res = await axios.get(API_URL + '/api/v1/products/all');
    for (const product of res.data.data) {
        var { data } = await getProduct(product._id);
        data.id = product._id;
        products.push(data)
    }
    return products;
}

export async function getProduct(id) {
    const res = await axios.get(API_URL + '/api/v1/products/' + id);
    return res.data;
}
