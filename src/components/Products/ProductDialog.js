import React, {useState, useEffect} from 'react';
import { Image } from 'primereact/image';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { getProduct } from '../../api/api';

const ProductDialog = ({id}) => {
    const [product, setProduct] = useState([]);

    async function loadProductInfo() {
        var productInfo = await getProduct(id);
        console.log(productInfo);
        setProduct(productInfo.data);
    }

    /*const specsInfo = product.specs.map((info,i) => {
        return(
            <li><p>{product.specs[i].name}: {product.specs[i].value}</p></li>
        ); 
    });*/

    useEffect(() => {
        loadProductInfo();
    });
    return(
        <div>
            <Splitter style={{height: '300px'}} className="mb-5">
                <SplitterPanel className="flex align-items-center justify-content-center">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Autumn_Drone_%28cropped%29.jpg/1280px-Autumn_Drone_%28cropped%29.jpg" 
                        alt="Image"
                        width="400rm"
                        preview
                    />
                </SplitterPanel>
                <SplitterPanel className="flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                        <li>
                            <h6>Dron de {product.name}</h6>
                        </li>
                        <li>
                            <p className="text-light">{product.description}</p>
                        </li>
                        <li>
                            <p>Category: {product.category}</p>
                        </li>
                        <li>
                            <p>Price: $ {product.price}</p>
                        </li>
                        <li>
                            <p>Stock: {product.stock}</p>
                        </li>
                    </ul>
                </SplitterPanel>
            </Splitter>
        </div>
    );
}

export default ProductDialog;
