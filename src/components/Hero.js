import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Food Hub</h2>
            <h3>When you're hungry, <br />Food Hub is here for you</h3>
            <Link className="btn" to="/dishes">View All Dishes</Link>
        </section>
    )
}

export default Hero
