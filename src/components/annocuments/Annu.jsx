import React from 'react'

const Annu = () => {
    const myStyle = {
        width: '30%',
        height: '340px'
    }

    const myStyle1 = {
        width: '68%',
        height: '340px'
    }

  return (
    <>
      <section className="annouc background">
        <div className="container d_flex">
            <div className="img" style={myStyle}>
                <img src="https://picsum.photos/200/300?grayscale" alt="img" width="100%" height="100%" />
            </div>
            <div className="img" style={myStyle1}>
                <img src="https://picsum.photos/200/300/?blur=2" alt="img" width="100%" height="100%" />
            </div>
        </div>
      </section>
    </>
  )
}

export default Annu
