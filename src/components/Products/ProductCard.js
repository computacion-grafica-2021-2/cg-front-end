import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import ProductDialog from './ProductDialog';

const ProductCard = (props) => {
    const [displayProduct, setDisplayProduct] = useState(false);
    const dialogFuncMap = {'displayProduct': setDisplayProduct}
    
    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const renderFooter = (name) => {
        let quoteUrl = '/quote/' + product._id;
        return (
            <div>
                <Button label="Back" icon="pi pi-arrow-left" onClick={() => onHide(name)} className="p-button-text" />
                <a href={quoteUrl}><Button label="Send a Quote" icon="pi pi-info-circle"  autoFocus /></a>
            </div>
        );
    }
    
    var product = props.product;
    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 rounded-lg" onClick={() => onClick('displayProduct')}>
                <a href="#">
                    <img className="rounded-top-lg w-100" src={product.photoUrl || 'invalid url'} alt="Drone image" />
                </a>
                <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                        <li>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                        </li>
                        <li className="text-muted text-right">{product.price || 'Drone price'}</li>
                    </ul>
                    <a href="#" className="h2 text-decoration-none text-dark">{product.name || 'Drone name'}</a>
                    <p className="card-text">
                        {product.description || 'Drone description'}
                    </p>
                    <p className="text-muted">Stock ({product.stock || 0})</p>
                </div>
            </div>
            <Dialog
                visible={displayProduct}
                style={{ width: '50vw' }}
                footer={renderFooter('displayProduct')}
                onHide={() => onHide('displayProduct')}
            >
                <ProductDialog product={product} />
            </Dialog>
        </div>
    )
}

export default ProductCard;
