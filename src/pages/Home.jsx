import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import herovid from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/featured-tours/FeaturedTourList'
import experienceImg from '../assets/images/experience.png'
import MasonryImageGallery from '../components/image-gallery/MasonryImageGallery'
import Testimonials from '../components/testimonials/Testimonials'

import SearchBar from '../shared/SearchBar'
import Newsletter from '../shared/Newsletter'
const Home = () => {
  return <>
  <Container>
    <Row>
      <Col lg='6'>
      <div className="hero__content">
        <div className="hero__subtitle d-flex align-items-center">
          <Subtitle subtitle={'Know before you go'}/>
          <img src={worldImg} alt="" />
          </div>
          <h1>Explore the World with Us <span className='highlight'>Unforgettable Journeys Await! </span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ex ipsam nisi, itaque debitis provident a deserunt eum quis saepe expedita reiciendis voluptatem earum nostrum ratione fugit animi, unde neque.</p>
        </div>
      
      </Col>
<Col lg='2'>
  <div className="hero__img-box">
    <img src={heroImg} alt="" />
  </div>
</Col>
<Col lg='2'>
  <div className="hero__img-box hero__video-box mt-4">
    <video src={herovid} alt="" controls/>
  </div>
</Col>
<Col lg='2'>
  <div className="hero__img-box mt-5 ">
    <img src={heroImg02} alt="" />
  </div>
</Col> 
<SearchBar/>
    </Row>
  </Container>

  <section>
    <Container>
      <Row>
        <Col lg='3'>
        <h5 className="services__subtitle">What we serve</h5>
        <h2 className='services__title'>We offer the best of the best</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>

  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">
            Best Tour Options
          </h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
  </section>


  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience__content">
            <Subtitle subtitle={'Experience'}/>
            <h2>
              Be Served <br/>with our experienced workers
            </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quae provident ipsum soluta vero totam voluptas sequi <br/>vitae asperiores iusto omnis perspiciatis at voluptatem aliquam mollitia ipsa magnam, porro consequatur?</p>
          </div>
          <div className="counter__wrapper d-flex align-items-center gap-5">
          <div className="counter__box">
            <span>12k+</span>
            <h6>Successfull Trip</h6>
          </div>
          <div className="counter__box">
            <span>5k+</span>
            <h6>Regular clients</h6>
          </div>
          <div className="counter__box">
            <span>10k+</span>
            <h6>Years experience</h6>
          </div>
          </div>
        </Col>
        <Col lg='6'>
          <div className="experience__img">
            <img src={experienceImg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>


  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Gallery'}/>
          <h2 className='gallery__title'>Explore customer gallery</h2>
        </Col>
        <Col lg='12'>
        <MasonryImageGallery/>
        </Col>
      </Row>
    </Container>
  </section>

  <section>
    <Container>
      <Row>
        <Col lg='12'>
        <Subtitle subtitle={'Admirations'}></Subtitle>
        <h2 className="testimonials__title">What our admirers say about us</h2>
        </Col>
        <Col lg='12'>
          <Testimonials/>
        </Col>
      </Row>
    </Container>
  </section>
  <Newsletter/>
  </>
}

export default Home
