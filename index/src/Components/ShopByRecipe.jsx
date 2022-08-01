import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SingleProduct from "./SingleProduct";


const ShopByRecipe = () => {

    const [products, setProducts] = useState([])
    const [input, setInput] = useState([])

    const navigate = useNavigate()

    function handleChange(e) {
        setInput(e.target.value)
    }

    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const fetchProducts = async () => {
        let response = await fetch(
            `https://api.spoonacular.com/food/products/search?query=${input}&apiKey=efa6acc08dd640f298c7d189883b3fbb`,
            options
        );
        let responseData = await response.json();
        console.log("This is products search console", responseData);
        setProducts(responseData.products)
        console.log(products)
    }


    return (
        <div style={{ backgroundColor: "#D8F0E6" }}>
            <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem", paddingBottom: "2rem", paddingTop: "2rem" }}>
                <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem", paddingBottom: "2rem" }}>
                    <Row>

                        <Col xs={12}>
                            <h1 style={{ color: "black" }}>Shop for Ingredients here!</h1>
                            <Form style={{ marginTop: "2rem", textAlign: "center" }}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Form.Label style={{ fontWeight: "bold", fontSize: "1.3rem", marginRight: "1rem" }}>Enter the Ingredients</Form.Label>
                                    <Form.Control type="text" placeholder="" onChange={handleChange}
                                        style={{ width: "13rem" }} />
                                </div>
                                <Button style={{ backgroundColor: "#35B066", border: "none", marginTop: "1rem" }} onClick={fetchProducts}>Get Products</Button>
                            </Form>

                            <Container>
                                <Row>
                                    {products.map((product) => (
                                        <>
                                            <Col xs={12} md={4}>
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img variant="top" src={product.image} />
                                                    <Card.Body>
                                                        <Card.Title>{product.title}</Card.Title>
                                                        <Button onClick={() => navigate(`/SingleProduct/${product.id}`)} style={{ backgroundColor: "#35B066", border: "none" }}>Get Details</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </>
                                    ))}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default ShopByRecipe