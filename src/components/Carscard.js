import React from 'react'
import './Carscard.css'

const Carscard = ({title,desc,l1,l2,l3,btext,ilink}) => {
  return (
      <div className='carscard-main'>
        <img src={ilink} alt="" />
        <div class="layout">
           <span><p className='f-h1'>{title}</p></span>
             
            <p className='p1'>
                {desc}
                <ul>
                    <li>{l1}</li>
                    <li>{l2}</li>
                    <li>{l3}</li>
                </ul>
            </p>
 
 
            <button class="btn btn-outline-danger">
                {btext}
            </button>
        </div>
        </div>
  )
}

export default Carscard