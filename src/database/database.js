const API_URL = 'https://cg-backend-api.herokuapp.com';

async function getProducts() {
    const res = await axios.get(API_URL + '/api/v1/products/all');
    return res.data;
}

async function getProduct(id) {
    const res = await axios.get(API_URL + '/api/v1/products/' + id);
    return res.data;
}

let products = [];

getProducts().then(res => {
    for (let product of res.data) {
        getProduct(product._id).then(res => {
            products.push(res.data);
            console.log(res.data.price);
        }).catch(err => console.log(err))
    }
}).catch(err => { console.log(err) });

console.log(products);