import React from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';

const ProductDialog = (props) => {
    var product = props.product;

    return(
        <div>
            <Splitter style={{height: '180%', border: 'none'}} className="mb-1">
                <SplitterPanel className="flex align-items-center justify-content-center">
                    <img
                        class="rounded-lg"
                        src={product.photoUrl} 
                        alt="Image"
                        width="100%"
                        preview
                    />
                </SplitterPanel>
                <SplitterPanel className="flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                        <li>
                            <h3>Dron de {product.name}</h3>
                        </li>
                        <li>
                            <p>{product.description}</p>
                        </li>
                        <li>
                            <p><b>Category:</b> {product.category}</p>
                        </li>
                        <li>
                            <p><b>Price:</b> $ {product.price}</p>
                        </li>
                        <li>
                            <p><b>Stock:</b> {product.stock}</p>
                        </li>
                    </ul>
                </SplitterPanel>
            </Splitter>
        </div>
    );
}

export default ProductDialog;
