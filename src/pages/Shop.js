import React from 'react';

import './Shop.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//Components
import MainFooter from '../components/Footers/MainFooter';
import MainNav from '../components/Navbars/MainNav';
import ProductCard from '../components/Products/ProductCard';

//Api
import { getProducts } from '../api/api';

export default class Shop extends React.Component {

    state = {
        productCards: [],
        loadingProducts: <div class="text-center mt-5"><h1 class="h1">Loading products...</h1></div>
    };

    async componentDidMount() {
        var _productCards = [];
        var products = await getProducts();
        for (const product of products) {
            _productCards.push(<ProductCard product={product} key={product._id}/>)
        }
        this.setState({
            productCards: _productCards
        });
    }


    render() {
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
                        <div class="row text-center py-3">
                            <div class="col-lg-6 m-auto">
                                <h1 class="h1">All products</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            {this.state.productCards.length > 0 ? this.state.productCards : this.state.loadingProducts}
                        </div>
                    </div>
                </section>
                <MainFooter />
            </div>
        );
    }
}
