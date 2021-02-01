import './HomePage.scss';
import { Link } from 'react-router-dom';
import heroImgMobile from '../../../assets/images/homepage-hero-m.jpg';
import heroImgTablet from '../../../assets/images/homepage-hero-t.jpg';
import heroImgDesktop from '../../../assets/images/homepage-hero-d.jpg';
import laptopImage from '../../../assets/images/about-img.jpg';
import Contact from '../../Contact/Contact';

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <picture alt="hero" className="hero__img">
          <source srcSet={heroImgMobile} />
          <source srcSet={heroImgTablet} media="(min-width: 768px)" />
          <source srcSet={heroImgDesktop} media="(min-width: 990px)" />
          <img src="images/home/homepage-hero-m.jpg" alt="hero" />
        </picture>
        <h2 className="hero__title">
          Hey, I’m Momchil Mitev and I love building beautiful websites
        </h2>
        <a href="#about" className="hero__btn">
          about me
        </a>
      </section>
      <section className="about">
        <img className="about__img" src={laptopImage} alt="laptop" />
        <article id="about" className="about__content">
          <h2 className="about__title">About Me</h2>
          <p className="about__text">
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in Munich, Germany, but I’m happy working
            remotely. When I’m not coding, you’ll find me outdoors. I love being
            out in nature going for a walk with my family. I’d love you to check
            out my work.
          </p>
          <Link to="/portfolio" className="btn">
            go to portfolio
          </Link>
        </article>
      </section>
      <Contact />
    </>
  );
};

export default HomePage;
