import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
 

const serviceData =[
   {
    imgUrl:weatherImg,
    title:"Find Weather",
    desc:"lorem ipsum dolor sit amet, consectetur adipiscing elit"
   },
   {
    imgUrl:guideImg,
    title:"Awesome guide",
    desc:"lorem ipsum dolor sit amet, consectetur adipiscing elit"
   },
   {
    imgUrl:customizationImg,
    title:"Own Customization",
    desc:"lorem ipsum dolor sit amet, consectetur adipiscing elit"
   }
]
const ServiceList = () => {
  return <>
  {
    serviceData.map((item,index)=>(
    <Col lg='3' md='6' sm='12' key={index} className='mb-4'>
        <ServiceCard item={item}/>
    </Col>
    ))
  }
  </>
}

export default ServiceList
