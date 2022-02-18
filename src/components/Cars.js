import React from 'react'
import Carscard from './Carscard'
import abc from './images/2461356.jpg'

const Cars = () => {
  return (
      <>
    <div id="cars">
        <Carscard title="MODEL S" desc="Tesla designed Model S from the ground-up as an electric vehicle — each component, including batteries, motors and exterior aerodynamics are optimized to benefit from one another and create one of the most efficient, yet unbelievably powerful vehicles ever built." l1="Range: 371 miles" l2="Top speed: 155 mph" l3="Starting from $88740" btext="Customize your Tesla" ilink="https://cdnb.artstation.com/p/assets/images/images/009/911/359/large/stoyan-daskalov-tesla-models-night-02.jpg?1521551233"/>

        <Carscard title="MODEL 3" desc="Tesla designed Model 3 from the ground-up as an electric vehicle — each component, including batteries, motors and exterior aerodynamics are optimized to benefit from one another and create one of the most efficient, yet unbelievably powerful vehicles ever built." l1="Range: 358 miles" l2="Top speed: 145 mph" l3="Starting from $39940" btext="Customize your Tesla" ilink="https://images.unsplash.com/photo-1568988026871-cc639428479a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>

        <Carscard title="MODEL X" desc="Tesla designed Model X from the ground-up as an electric vehicle — each component, including batteries, motors and exterior aerodynamics are optimized to benefit from one another and create one of the most efficient, yet unbelievably powerful vehicles ever built." l1="Range: 332 miles" l2="Top speed: 155 mph" l3="Starting from $98,940" btext="Customize your Tesla" ilink={abc}/>

        <Carscard title="MODEL Y" desc="Tesla designed Model Y from the ground-up as an electric vehicle using system-level integration throughout. Each component, including batteries, motors and even exterior aerodynamics are optimized to benefit from one another." l1="Range: 318 miles" l2="Top speed: 135 mph" l3="Starting from $53940" btext="Customize your Tesla" ilink="https://tesla-cdn.thron.com/delivery/public/image/tesla/233a5827-64d0-498f-9f2a-fd3d3595c65a/bvlatuR/std/1800x1285/MY-Specs-LHD-Desktop"/>
    </div>
    <div className="trucks" id='trucks'>
    <Carscard title="Cyber Truck" desc="BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR.
    Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass." l1="Range: upto 500 miles" l2="Top speed: 130 mph" l3="Starting from $40950" btext="Order Now" ilink="https://tesla-cdn.thron.com/delivery/public/image/tesla/c834642e-bd02-47d1-a16d-eddabd15ddb8/bvlatuR/std/1251x704/Cybertruck-Order-Hero-Global"/>
    </div>

    <div className="Semi" id='Semi'>
    <Carscard title="Semi" desc="​Semi is the safest, most comfortable truck ever. Four independent motors provide maximum power and acceleration and require the lowest energy cost per mile." l1="Energy Consumption: <2kWh/mi" l2="Drag cofficient: 0.36" l3="Starting from $100,950" btext="Reserve Now" ilink="https://pictures.topspeed.com/IMG/jpg/201711/2019-tesla-semi-6.jpg"/>
    </div>
    <div className="Roadster" id='Roadster'>
    <Carscard title="Roadster" desc="​​The quickest car in the world, with record-setting acceleration, range and performance." l1="0-60: in 1.9s" l2="Top Speed: 250+" l3="Starting from $200,950" btext="Reserve Now" ilink="https://www.wallpapertip.com/wmimgs/33-337817_tesla-roadster-dark-background.jpg"/>
    </div>
    </>
  )
}

export default Cars