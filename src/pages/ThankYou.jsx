import React from 'react'
import { Container,Row,Col ,Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thank-you.css'
const ThankYou = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='d-flex align-items-center justify-content-center'>
            <div className="verify__icon">
            <i class="ri-checkbox-circle-line"></i>
            </div>
            </Col>
            <Col lg='12' className=' title d-flex align-items-center justify-content-center fw-semibold'>
                <h1>Thank You</h1>
            </Col>
            <Col lg='12' className='d-flex align-items-center justify-content-center'>
               <h3> Your tour is booked</h3>
            </Col>
            
                    <Col lg='12' className='d-flex align-items-center justify-content-center'>
                    <Button className='btn primary__btn w-25 mt-4 d-flex align-items-center justify-content-center'> <Link to='/home'>Back to home</Link> </Button>
                    </Col>
               
           
        </Row>
    </Container>
  </section>
}

export default ThankYou
