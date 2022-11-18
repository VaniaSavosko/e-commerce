import React from "react"

const Catg = () => {
    const style = {
        width: '30px',
        height: 'auto'
    }
    const data = [
        {
            cateImg: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png",
            cateName: "Apple",
        },
        {
            cateImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
            cateName: "Samasung",
        },
        {
            cateImg: "https://w7.pngwing.com/pngs/854/175/png-transparent-oppo-logo-phone-identity-green.png",
            cateName: "Oppo",
        },
        {
            cateImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Vivo_Logo.svg/1280px-Vivo_Logo.svg.png",
            cateName: "Vivo",
        },
        {
            cateImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Redmi_Logo.svg/2560px-Redmi_Logo.svg.png",
            cateName: "Redimi",
        },
        {
            cateImg: "https://w7.pngwing.com/pngs/1012/508/png-transparent-sony-logo-sony-television-text-trademark.png",
            cateName: "Sony",
        },
    ]
    return (
        <>
            <div className='category'>
                <div className='chead d_flex'>
                    <h1>Brands </h1>
                    <h1>Shops </h1>
                </div>
                {data.map((value, index) => {
                    return (
                        <div className='box f_flex' key={index}>
                            <img src={value.cateImg} alt='img' width={style.width} height={style.height}/>
                            <span>{value.cateName}</span>
                        </div>
                    )
                })}
                <div className='box box2'>
                    <button>View All Brands</button>
                </div>
            </div>
        </>
    )
}

export default Catg