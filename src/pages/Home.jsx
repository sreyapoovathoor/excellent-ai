import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import Results from '../components/Results';
import Videos from '../components/Videos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <section id="home">
                <Hero />
            </section>
            <About />
            <section id="courses">
                <Courses />
            </section>
            <section id="results">
                <Results />
            </section>
            <Videos />
            <section id="testimonials">
                <Testimonials />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </>
    );
};

export default Home;
