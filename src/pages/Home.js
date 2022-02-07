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




                <div id="template-mo-jassa-hero-carousel" class="carousel slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="1"></li>
                        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="container">
                                <div class="row p-5">
                                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                        <img class="img-fluid" src={competitiom_drone} alt="" />
                                    </div>
                                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                                        <div class="text-align-left align-self-center">
                                            <h1 class="h1 text-success"><b>DronesUN</b> eCommerce</h1>
                                            <h3 class="h2">Lorem Ipsum Lorem Ipsum</h3>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="container">
                                <div class="row p-5">
                                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                        <img class="img-fluid" src={fumigation_drone} alt="" />
                                    </div>
                                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                                        <div class="text-align-left">
                                            <h1 class="h1">Lorem Ipsum</h1>
                                            <h3 class="h2">Lorem Ipsum Lorem Ipsum</h3>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="container">
                                <div class="row p-5">
                                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                        <img class="img-fluid" src={recreational_drone} alt="" />
                                    </div>
                                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                                        <div class="text-align-left">
                                            <h1 class="h1">Lorem Ipsum</h1>
                                            <h3 class="h2">Lorem Ipsum Lorem Ipsum </h3>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="prev">
                        <i class="fas fa-chevron-left"></i>
                    </a>
                    <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="next">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>

                <section class="container py-5">
                    <div class="row text-center pt-3">
                        <div class="col-lg-6 m-auto">
                            <h1 class="h1">Drone categories</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img src={competitiom_drone} class="rounded-circle img-fluid border" /></a>
                            <h5 class="text-center mt-3 mb-3">Competition</h5>
                            <p class="text-center"><a class="btn btn-success" href='/shop'>Go Shop</a></p>
                        </div>
                        <div class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img src={fumigation_drone} class="rounded-circle img-fluid border" /></a>
                            <h2 class="h5 text-center mt-3 mb-3">Fumigation</h2>
                            <p class="text-center"><a class="btn btn-success" href='/shop'>Go Shop</a></p>
                        </div>
                        <div class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img src={recreational_drone} class="rounded-circle img-fluid border" /></a>
                            <h2 class="h5 text-center mt-3 mb-3">Recreational</h2>
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
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
