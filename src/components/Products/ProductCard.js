const ProductCard = (props) => {
    var product = props.data;
    return (
        <div class="col-12 col-md-4 mb-4">
            <div class="card h-100 rounded-lg">
                <a href="#">
                    <img class="rounded-top-lg w-100" src={product.photoUrl || 'invalid url'} alt="Drone image" />
                </a>
                <div class="card-body">
                    <ul class="list-unstyled d-flex justify-content-between">
                        <li>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-muted fa fa-star"></i>
                            <i class="text-muted fa fa-star"></i>
                        </li>
                        <li class="text-muted text-right">{product.price || 'Drone price'}</li>
                    </ul>
                    <a href="#" class="h2 text-decoration-none text-dark">{product.name || 'Drone name'}</a>
                    <p class="card-text">
                        {product.description || 'Drone description'}
                    </p>
                    <p class="text-muted">Stock ({product.stock || 0})</p>
                </div>
            </div>
        </div>
    )

}

export default ProductCard;