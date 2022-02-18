import React from 'react'
import './Articlescard.css'

const Articlescard = ({title,description,imglink}) => {
  return (
      
    <div className='articlescard-main'>
        <div className="articlescard-image">
            <img src={imglink} alt="this is image" />
        </div>
        <div className="articlescard-content">
            <div className="articlescard-title">
                {title}
            </div>
            <hr  />
            <div className="articlescard-description">
                {description}
            </div>
            <hr />

            <button className='articlescard-button'>Read more</button>
        </div>
    </div>




  )
}

export default Articlescard