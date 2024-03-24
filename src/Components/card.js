import React from 'react'
import '../Styles/challenge.css'; 
function card(props) {
  return (
    <div>
        
    <div className='container'>
      <div className="card">
        <img src={props.image} alt="Placeholder" />
        <div className="card-content">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-description">{props.desc}</p>
          <a href={props.link} target='blank' className="read-more-btn">Read More</a> 
        </div>
      </div>
    </div>
    </div>
  )
}

export default card
