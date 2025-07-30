import React, { useState } from 'react'
import Section1 from '../../components/Section1/Section1'
import BuyCall from '../../components/BuyCall/BuyCall'
import ProductCart from '../../components/Products/ProductCart'
import YoutubeCard from '../../components/YoutubeCard/YoutubeCard'
import img from '../../assets/Img.png'
function Products() {
 const [imgg, ssetimg] = useState(img)
 const [video, setvideo] = useState("https://www.youtube.com/embed/K0eV1aS22pg")
  return (
    <div>
      <Section1 text={'Приёмка товаров'} img={imgg}/>
      <ProductCart/>
      <YoutubeCard video={video}/>
      <BuyCall/>
    </div>
  )
}

export default Products
