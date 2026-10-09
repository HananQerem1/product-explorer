function Product ({product}){
    const stockString = product.stock > 1 ? "items in stock" : "item in stock";
    return <>
        <div className="productCard flex flex-col bg-bg-secondary rounded-2xl">
            <div className="details row-start gap-3 primary-border px-5">
                <img src={product.thumbnail} className="size-30 xs:size-50 sm:size-70 md:size-50 lg:size-60" />
                <div className="summary column-start">
                    <h2>{product.brand}</h2>
                    <h3>{product.title}</h3>
                    <span className="row-start gap-1">
                        <img src="./star.svg" className="size-5"/>
                        {product.rating}/5</span>
                    <span>${product.price}</span>
                    <span>%{product.discountPercentage}</span>
                    <span>{product.stock} {stockString}</span>
                </div>
            </div>
            <div className="description primary-border column-start gap-2 px-5 grow">
                <h2>description</h2>
                <p>{product.description}</p>
            </div>
            <div className="information primary-border column-start gap-2 px-5">
                <h2>product information</h2>
                <dl>
                    <li className="row-start gap-2">
                        <dt className="row-start gap-1">
                            <img src="./check.svg" className="size-5" />
                            SKU:</dt>
                        <dd>{product.sku}</dd>
                    </li>
                    <li className="row-start gap-2">
                        <dt className="row-start gap-1">
                            <img src="./check.svg" className="size-5" />
                            Brand:</dt>
                        <dd>{product.brand}</dd>
                    </li>
                    <li className="row-start gap-2">
                        <dt className="row-start gap-1">
                            <img src="./check.svg" className="size-5" />
                            Category:</dt>
                        <dd>{product.category}</dd>
                    </li>
                    <li className="row-start gap-2">
                        <dt className="row-start gap-1">
                            <img src="./check.svg" className="size-5" />
                            Stock:</dt>
                        <dd>{product.stock}</dd>
                    </li>
                    <li className="row-start gap-2">
                        <dt className="row-start gap-1">
                            <img src="./check.svg" className="size-5" />
                            Minimum Order Quantity:</dt>
                        <dd>{product.minimumOrderQuantity}</dd>
                    </li>
                    <li className="row-start gap-2">
                        <dt className="row-start gap-1">
                            <img src="./check.svg" className="size-5" />
                            Weight:</dt>
                        <dd>{product.weight}</dd>
                    </li>
                </dl>
            </div>
            <div className="shipping primary-border column-start gap-2 px-5">
                <h2>shipping and returns</h2>
                <div className="column-start gap-1">
                    <p className="row-start gap-1"> 
                        <img src="./check.svg" className="size-5" />
                        {product.shippingInformation}</p>
                    <p className="row-start gap-1">
                        <img src="./check.svg" className="size-5" />
                        {product.returnPolicy}</p>
                    <p className="row-start gap-1">
                        <img src="./check.svg" className="size-5" />
                        {product.warrantyInformation}</p>
                </div>
            </div>
            <div className="reviews column-start gap-2 p-5">
                <h2>reviews</h2>
                <div className="column-start gap-3 w-full">
                    { product.reviews.length > 0 ? (
                        product.reviews.map((review,index) => (
                            <div className="column-start gap-1 bg-primary/80 text-bg w-full rounded-2xl p-4" key={index}>
                                <h4 className="row-start gap-1">
                                    <img src="./user.svg" className="size-5"/>
                                    {review.reviewerName}</h4>
                                <span className="row-start gap-1">
                                    <img src="./star.svg" className="size-5"/>
                                    {review.rating}</span>
                                <p>{review.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p>No reviews available.</p>
                    )
                    }
                </div>
            </div>
        </div>
    </>
}
export default Product;