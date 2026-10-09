function Product ({product}){
    return <>
        <div className="productCard">
            <div className="details">
                <img />
                <div className="summary column-center">
                    <h2>{product.brand}</h2>
                    <h3>{product.title}</h3>
                    <span>{product.rating}</span>
                    <span>{product.price}</span>
                    <span>{product.discountPercentage}</span>
                    <span>{product.stock}</span>
                </div>
            </div>
            <div className="description">
                <p>{product.description}</p>
            </div>
            <div className="information">

            </div>
        </div>
    </>
}
export default Product;