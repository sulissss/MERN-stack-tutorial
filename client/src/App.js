import React from "react";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import axios from "axios";
import "./App.css";

const App = () => {
    const [products, setProducts] = useState([]);

    const products1 = [
        {
            quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela",
            age: "27"
        }
    ];

    const getProducts = async () => {
        const prod = await axios.get('http://localhost:8080/products');
        console.log(prod.data);
        setProducts(prod.data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {
                products.map((entry, index) => {
                    return (
                        <div key={index} className="quote-container">
                            <Button quote={entry.quote} author={entry.author} age={entry.age}></Button>
                        </div>
                    );
                })
            }
        </>
    );
};

export default App;