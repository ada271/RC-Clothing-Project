import React from 'react'


//! 2.yol
const ProductCard = ({title,price,image}) => {
  

    // console.log(props)
  return (
    <div className="card">
      <div className="price">
        <h3>{price}</h3>
      </div>

      <img src={image} alt="" />

      <div className="card_over">
        <h2>{title} + </h2>
      </div>
    </div>
  );
};












//! 1. YOL
// const ProductCard = ({urun}) => {
//      console.log(urun);
//      const{price,image,title}=urun
//   return (
//     <div className='card'>
//   <div className='price'>
//     <h3>{price} </h3>
//   </div>

// <img src={image} alt="" />

// <div className='card_over'>
//     <h2>{title} </h2>
// </div>

//     </div>
//   )
// }

export default ProductCard