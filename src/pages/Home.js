import React from 'react';

import './Home.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//Assets
import recreational_drone from '../assets/images/recreational-drone.jpg';
import fumigation_drone from '../assets/images/fumigation-drone.jpg';
import competitiom_drone from '../assets/images/competition-drone.jpg';

//Components
import MainFooter from '../components/Footers/MainFooter';
import MainNav from '../components/Navbars/MainNav';
import ProductCard from '../components/Products/ProductCard';
import HomeHeader from '../components/Headers/HomeHeaders';

//Api
import { getProducts } from '../api/api';

export default class Home extends React.Component {

    state = {
        featuredProducts: [],
        loadingFeaturedProducts: <div class="text-center mt-5"><h1 class="h1">Loading products...</h1></div>
    }

    async componentDidMount(){
        const products = await getProducts();
        var _featuredProducts = [];
        for(var i = 0; i < 3; i++){
            let index = parseInt(products.length * Math.random());
            _featuredProducts.push(<ProductCard product={products[index]} key={products[index].id}/>);
            products.splice(index, 1);
        }
        this.setState({
            featuredProducts: _featuredProducts
        })
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
                
                <HomeHeader />

                <section class="container py-5">
                    <div class="row text-center pt-3">
                        <div class="col-lg-6 m-auto">
                            <h1 class="h1">Drone categories</h1>
                            <p>
                                <strong>DronesUN </strong>offers many kinds of drone models to any kind of necessity, which are available
                                within the very specific components you always wanted.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-4 p-5 mt-3">
                            <img src={competitiom_drone} class="rounded-circle img-fluid border" />
                            <h5 class="text-center mt-3 mb-3">Competition Drones</h5>
                            <p class="text-center"><a class="btn btn-success" href='/shop'>Go Shop</a></p>
                        </div>
                        <div class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img src={fumigation_drone} class="rounded-circle img-fluid border" /></a>
                            <h2 class="h5 text-center mt-3 mb-3">Cargo Drones</h2>
                            <p class="text-center"><a class="btn btn-success" href='/shop'>Go Shop</a></p>
                        </div>
                        <div class="col-12 col-md-4 p-5 mt-3">
                            <img src={recreational_drone} class="rounded-circle img-fluid border" />
                            <h2 class="h5 text-center mt-3 mb-3">Low Cost Drones</h2>
                            <p class="text-center"><a class="btn btn-success" href='/shop'>Go Shop</a></p>
                        </div>
                    </div>
                </section>

                <section class="bg-light">
                    <div class="container py-5">
                        <div class="row text-center py-3">
                            <div class="col-lg-6 m-auto">
                                <h1 class="h1">Featured Product</h1>
                                <p>
                                    Check out the latest Drone models!
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            {this.state.featuredProducts.length > 0 ? this.state.featuredProducts : this.state.loadingFeaturedProducts}
                        </div>
                    </div>
                </section>
                <MainFooter />
            </div>
        );
    }
}
