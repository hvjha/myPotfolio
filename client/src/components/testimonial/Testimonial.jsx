import React from 'react'
import './testimonial.css'
import AVTAR from '../../assets/avatar1.jpg'
import AVTAR1 from '../../assets/avatar2.jpg'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTAR,
    name: 'Yasmeen',
    review:
      'Harsh delivered an excellent MERN stack solution. Clean code, secure backend, and great UI.'
  },
  {
    avatar: AVTAR1,
    name: 'Durgesh',
    review:
      'Very professional and skilled developer. Helped us with backend APIs and data handling.'
  },
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonial
