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

export async function postQuote(id,data) {
    const res = await axios.post(API_URL + '/api/v1/pricequotes/' + id, {
        "pricequote": {
            "name": data.name,
            "email": data.email,
            "idnumber": {
                "value": data.idnumber,
                "type": data.type.name
            }
        }
    }).then(console.log("success"));
    return res.data;
} 
