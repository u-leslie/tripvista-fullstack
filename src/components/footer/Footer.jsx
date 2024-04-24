import React from 'react'
import './footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const quick__links=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },

]
function Footer() {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'>
        <div className="logo">
          <img src={logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut, culpa asperiores eum eaque natus placeat minus repellat exercitationem. Velit molestiae facere numquam commodi maiores amet fuga dignissimos laborum est?</p>
        </div>
        <div className="social__links d-flex align-items-center gap-4">
          <span>
            <Link to="#">
              <i class="ri-youtube-line"></i>
            </Link>
            </span>
            <span>
            <Link to="#">
              <i class="ri-github-fill"></i>
            </Link>
            </span>
            <span>
            <Link to="#">
              <i class="ri-facebook-circle-line"></i>
            </Link>
            </span>
            <span>
            <Link to="#">
              <i class="ri-instagram-line"></i>
            </Link>
            </span>
            <span>
            <Link to="#">
              <i class="ri-twitter-line"></i>
            </Link>
          </span>
        </div>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'>Discover</h5>
          <ListGroup className='footer__quick-links'>
          {
            quick__links.map((item,index)=>(
              <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            ))
          }
          </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className='footer__link-title'>Quick Links</h5>
          <ListGroup className='footer__quick-links'>
          {
            quick__links.map((item,index)=>(
              <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            ))
          }
          </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className='footer__link-title'>Reach Us</h5>
          <ListGroup className='footer__quick-links'>
          
            
              <ListGroupItem className='mb-0 d-flex align-items-center gap-3'>
                <h6>
                  <span>
                    <i class='ri-map-pin-line'></i>
                    Address:
                  </span>
                </h6>
                <p className='mb-0'> Kigali, Rwanda</p>
                </ListGroupItem>
                <ListGroupItem className='mb-0 d-flex align-items-center gap-3'>
                <h6>
                  <span>
                    <i class='ri-mail-line'></i>
                    Email:
                  </span>
                </h6>
                <p className='mb-0'>wanderlust@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className='mb-0 d-flex align-items-center gap-3'>
                <h6>
                  <span>
                    <i class='ri-phone-fill'></i>
                    Phone:
                  </span>
                </h6>
                <p className='mb-0'> +250 789 898 456</p>
                </ListGroupItem>
           
          </ListGroup>
        </Col>
        <Col lg='12' className='text-center pt-5'>
          <p className='copyright'> Copyright 2023,All rights reserved </p>
         </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
