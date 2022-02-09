import React, { useEffect, useState } from 'react';

import './Detail.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//Components
import MainFooter from '../components/Footers/MainFooter';
import MainNav from '../components/Navbars/MainNav';
import { Button } from 'primereact/button';

//Api
import { getProduct } from '../api/api';
import { useParams } from 'react-router-dom';

export default function Detail() {

    const params = useParams();
    const [product, setProduct] = useState();
    const [specs, setSpecs] = useState([]);

    useEffect(() => {
        var _specs = [];
        getProduct(params.id).then((res) => {
            setProduct(res.data);
            for (const spec of res.data.specs) {
                _specs.push(<div class="border-top border-bottom" key={spec.value}><b>{spec.name}: </b>{spec.value}</div>);
            }
            setSpecs(_specs);
        });
    }, [params.id]);

    return (
        <div className="app">
            <MainNav />
            <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="w-100 pt-1 mb-5 text-right">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="" method="get" class="modal-content modal-body border-0 p-0">
                        <div class="input-group mb-2">
                            <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                            <button type="submit" class="input-group-text bg-success text-light">
                                <i class="fa fa-fw fa-search text-white"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <section class="bg-light">
                <div class="container py-5">
                    <div class="row py-3">
                        <div class="col-lg-5 mx-5 of-scroll text-center">
                            <h1 class="mb-5">Details and specs</h1>
                            <p>
                                {product ? product.description : 'Loading...'}
                            </p>
                            <p><b>Category: </b>{product ? product.category : 'Loading...'}</p>
                            {specs}
                            <div class="row my-5">
                                <div class="col-6">
                                    <h4><b>Stock: </b>{product ? product.stock : 'Loading...'}</h4>
                                </div>
                                <div class="col-6 text-success">
                                    <h4><b>Price: </b>${product ? product.price : 'Loading...'}</h4>
                                </div>
                            </div>
                            <a href="/shop"><Button label="Back" icon="pi pi-arrow-left" className="p-button-text mr-5" /></a>
                            <a href={'/quote/'+params.id}><Button label="Send a Quote" icon="pi pi-info-circle" autoFocus /></a>
                        </div>
                        <div class="col-lg-4 my-5 text-center">
                            <h1 class="text-success">{product ? product.name : 'Loading...'}</h1>
                            <img className="rounded-lg detail-img my-5" src={product ? product.photoUrl : 'invalid url'} alt="Drone image" />
                        </div>
                    </div>
                </div>
            </section>
            <MainFooter />
        </div>
    );
}
