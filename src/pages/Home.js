import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import { DishContext } from "../context/dishes";

const Home = () => {
    const { featured } = useContext(DishContext);
    if (!featured.length) {
        return <h3>No Featured Dishes</h3>
    }
    return (
        <>
            <Hero />
            <section className="featured">
                <header className="featured-head">
                    <h3>Featured Collection</h3>
                </header>
                <div className="dishes featured-list">
                    {featured.map(({ id, image, title }) => (
                        <article key={id} className="dish featured-dish">
                            <div className="dish-image">
                                <img src={image} alt={title} />
                            </div>
                            <Link to={`dishes/${id}`} className="btn dish-link">details</Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;