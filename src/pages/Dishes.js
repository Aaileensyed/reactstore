import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { DishContext } from '../context/dishes';


const Dishes = () => {
    const { dishes } = useContext(DishContext);

    if (!dishes.length) {
        return <h3>No Dishes Available</h3>
    }

    return (
        <section className="dishes">
            {dishes.map(({ image: image, id, title }) => (
                <article key={id} className="dish">
                    <div className="dish-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`dishes/${id}`} className="btn dish-link">details</Link>
                </article>
            ))}
        </section>
    )
}

export default Dishes
