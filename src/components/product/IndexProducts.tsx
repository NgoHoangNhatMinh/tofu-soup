import axios from "axios";
import { useEffect, useState } from "react";
import "./IndexProducts.css"
import { Product } from "../../utilities/interfaces";

function IndexProducts() {
    const API_URL = import.meta.env.VITE_API_URL;
    const [products, setProducts] = useState<Product[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/products`)
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return <>
        <div className="ProductListContainer">
            {products && products.map((product) => {
                return <div className="Product">
                    <img src={product.image} alt="" />
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            })}
        </div>
    </>
}

export default IndexProducts;