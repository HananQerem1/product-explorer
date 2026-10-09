import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../product/Product";
import Loader from "../Loader/Loader";

function Products(){
    const [products,setProducts] = useState([]);
    const [isLoading, setIsLoader] = useState(true);
    const [error, setError] = useState('');
    
   
    const getProduct = async ()=>{
        try{
            const response = await axios.get(`https://dummyjson.com/products`);
            setProducts(response.data.products);
        }catch(e){
            setError('error to load data!');
        }finally{
            setIsLoader(false);
        }
    }

    useEffect( ()=>{
        getProduct();
    }, [])

    if(isLoading)
        return <Loader />
    
    if(error)
        return <div>{error}</div>
    
    return <>
        <h1>Products</h1>
        {products.map((product) => (
            <Product key={product.id} product={product}/>
       ))}
    </>
}
export default Products;