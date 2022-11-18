import React from 'react'

const Categories = () => {

    const data = [
        {
            cateImg: "./images/category/cat1.png",
            cateName: "Fashion",
          },
          {
            cateImg: "./images/category/cat2.png",
            cateName: "Electronic",
          },
          {
            cateImg: "./images/category/cat3.png",
            cateName: "Cars",
          },
          {
            cateImg: "./images/category/cat4.png",
            cateName: "Home & Garden",
          },
          {
            cateImg: "./images/category/cat5.png",
            cateName: "Gifts",
          },
          {
            cateImg: "./images/category/cat6.png",
            cateName: "Music",
          },
          {
            cateImg: "./images/category/cat7.png",
            cateName: "Health & Beauty",
          },
          {
            cateImg: "./images/category/cat8.png",
            cateName: "Pets",
          },
          {
            cateImg: "./images/category/cat9.png",
            cateName: "Baby Toys",
          },
          {
            cateImg: "./images/category/cat10.png",
            cateName: "Groceries",
          },
          {
            cateImg: "./images/category/cat11.png",
            cateName: "Books",
          },
    ]

  return (
    <>
      <div className="category">
        {
            data.map((value, index) => {
                return (
                    <div className="box f_flex" key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                        stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                        <span>{value.cateName}</span>
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Categories
