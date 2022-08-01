import { useEffect, useState } from "react";
import { useParams } from "react-router";


const SingleProduct = () => {
    const [singleproduct, setSingleProduct] = useState({})

    useEffect(() => {
        fetchSingleProduct();
    }, []);

    const params = useParams();
    const id = params.id;

    const fetchSingleProduct = async () => {

        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        let response = await fetch(
            `https://api.spoonacular.com/food/products/${id}?apiKey=f63cf5b7f4494e8d8820acbd1d0700f3`,
            options
        );
        let responseData = await response.json();
        console.log("This is Single Product get console", responseData);
        setSingleProduct(responseData);
    };

    return (
        <>
            <h3>Product Details</h3>
            <img src={singleproduct.image} alt="product image" />
            <h6>{singleproduct.title}</h6>
            <p>{singleproduct.description}</p>
            <h6> Price: {singleproduct.price}$</h6>
        </>
    )
}

export default SingleProduct