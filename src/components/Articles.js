import React from 'react'
import './Articles.css'
import Articlescard from './Articlescard'

const Articles = () => {
  return (
      <div id="articles">
      <div className="recommendation">
      <h1 class="heading"> our <span>Recommendations</span> </h1>
        </div>    
    <div className="test">
        <Articlescard  title = "Roadster" description="The quickest car in the world, with record-setting acceleration, range and performance." imglink="https://fsmedia.imgix.net/50/d8/ee/f6/e720/4052/84c7/624a1705f392/the-next-generation-tesla-roadster.gif"/>
        <Articlescard  title = "Solar Panels" description="Tesla solar panels are designed to be highly efficient, delivering maximum solar production year-round, even on roofs with complicated angles." imglink="https://www.advocate.com/sites/advocate.com/files/2018/07/31/tesla-solar-panel-750x.jpg"/>
        <Articlescard  title = "Accessories" description="Add a premium touch to your Tesla by accentuating your vehicle's model name with Model 3 Illuminated Door Sills and other Accessories." imglink="//cdn.shopify.com/s/files/1/0196/5170/products/SwivelScreenMountingKitHEROGIFv7_1024x1024.gif?v=1630694383"/>
    </div>
      </div>
  )
}

export default Articles