import { ApiUrl } from '../config/default';
import axios from 'axios';

const API_URL = ApiUrl;

export async function getProducts() {
    const {data} = await axios.get(API_URL + '/api/v1/products/all');
    return data.data;
}

export async function getProduct(id) {
    const res = await axios.get(API_URL + '/api/v1/products/' + id);
    return res.data;
}
