import React from 'react'
import NData from './NData'

const Cart = () => {
  return (
    <>
     <div className="content grid product">
        {
            NData.map((value, index) => {
                return (
                    <div className="box" key={index}>
                        <div className="img">
                            <img src={value.cover} alt="img" />
                        </div>
                        <h4>{value.name}</h4>
                        <span>{value.price}</span>
                    </div>
                )
            })
        }
     </div>
    </>
  )
}

export default Cart
