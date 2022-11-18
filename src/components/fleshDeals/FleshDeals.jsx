import React from 'react'
import FleshCard from './FleshCard'

const FleshDeals = ( { productItems, addToCart } ) => {
  return (
    <>
      <section className="flash background">
         <div className="container f-flex">
            <div className="heading f-flex">
                <i className="fa fa-bolt"></i>
                <h1>Flash Deals</h1>
            </div>
            <FleshCard productItems={ productItems } addToCart={addToCart} />
         </div>
      </section>
    </>
  )
}

export default FleshDeals
