import React from 'react'
import './services.css'
import { BsCheck2 } from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">

        {/* MERN Stack Development */}
        <article className='service'>
          <div className="service_head">
            <h3>MERN Stack Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>Full-stack web applications using MongoDB, Express, React, and Node.js</p>
            </li>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>RESTful API development and backend architecture design</p>
            </li>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>User authentication & authorization using JWT, Passport.js</p>
            </li>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>State management using Redux, Context API, and Zustand</p>
            </li>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>Responsive UI development with React, Tailwind CSS, and Material UI</p>
            </li>
          </ul>
        </article>
        {/* end of MERN Stack */}

        {/* Frontend & Backend Solutions */}
        <article className='service'>
          <div className="service_head">
            <h3>Web Application Solutions</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>Modern single-page applications (SPA) using React & Vite</p>
            </li>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>Database design and optimization with MongoDB & Mongoose</p>
            </li>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>API integration and third-party service integration</p>
            </li>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>Secure deployment on platforms like Render & cloud hosting</p>
            </li>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>Performance optimization and bug fixing</p>
            </li>
          </ul>
        </article>
        {/* end of Web Solutions */}

        {/* Data Analysis */}
        <article className='service'>
          <div className="service_head">
            <h3>Data Analysis</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>Data cleaning, processing, and analysis using Python</p>
            </li>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>Exploratory Data Analysis (EDA) to extract insights</p>
            </li>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>Data visualization using charts, dashboards, and reports</p>
            </li>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>Working with Excel, SQL, and analytical datasets</p>
            </li>
            <li>
              <BsCheck2 className='service_list-icon'/>
              <p>Business insights and decision-driven data reporting</p>
            </li>
          </ul>
        </article>
        {/* end of Data Analysis */}

      </div>
    </section>
  )
}

export default Services
