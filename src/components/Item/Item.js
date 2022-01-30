import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
const Item = ({ item }) => {
    return (
        <div className="course">
            <div className="course__img--container">
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="course__img"
                />
            </div>
            <Link to={'/item/' + item._id}>
                {item.title}
            </Link>
            <span className="course__price">{item.price}$</span>
            
        </div>
    );
};

export default Item;