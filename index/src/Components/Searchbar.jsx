import { useState, useEffect } from "react";
import { InputGroup, Form, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../css/Searchbar.css";

const Searchbar = ({ id }) => {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        handleFilter(query);
    }, [query]);


    const handleFilter = (query) => {
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(query.toLowerCase());
        });

        if (query.length > 0) {
            setFilteredData(newFilter);
        } else {
            setFilteredData([]);
        }
    };

    const onInputClick = (wasItClicked) => {
        setClicked(wasItClicked);
    };

    const navigate = useNavigate();
    const goToSingleRecipe = () => {
        navigate('/SingleRecipe/' + id);
    };


    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };


    const fetchData = async () => {
        let response = await fetch(
            "https://api.spoonacular.com/recipes/complexSearch?number=5219&apiKey=192717ff7b47486faf8af662e370d037", options
        );
        let responseData = await response.json();
        console.log("This is search console", responseData);
        setData(responseData.results);
    }


    return (
        <div>
            <div>
                <InputGroup
                    style={{
                        marginTop: "6px",
                    }}
                    onClick={() => onInputClick(false)}
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                >
                    <Form.Control placeholder="Search Recipes" />
                </InputGroup>
            </div>

            {filteredData.length !== 0 && (
                <div
                    style={{
                        position: "fixed",
                        zIndex: "3",
                    }}
                >
                    {filteredData.slice(0, 5).map((data) => {
                        return (
                            <ListGroup className="search-list">
                                <div>
                                    <Link
                                        className="search-link"
                                        onClick={() => {
                                            setQuery("");
                                            setFilteredData([]);
                                        }}
                                        to={'/SingleRecipe/' + data.id}
                                    >
                                        <ListGroup.Item
                                            style={{
                                                textAlign: "left",
                                            }}
                                            onClick={() => {
                                                onInputClick(true);
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: "25px",
                                                    height: "25px",
                                                    borderRadius: "50%",
                                                }}
                                                src={data.image}
                                                alt=""
                                            />
                                            <span
                                                className="ml-2"
                                                style={{ color: "black", fontSize: "14px" }}
                                                onClick={goToSingleRecipe}
                                            >
                                                <strong className="search-title">{data.title}</strong>
                                            </span>
                                        </ListGroup.Item>
                                    </Link>
                                </div>
                            </ListGroup>
                        );
                    })}
                </div>
            )}
        </div>
    );
}


export default Searchbar;