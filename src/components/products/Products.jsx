import React from 'react'
import ProductCard from './ProductCard'
import "./Products.scss";

const Products = ({products}) => {
   
  return (
    <div className="products-list">
      {/*//! Buradan spreadle açarak gönderip objenin propertylerini props objesine yerleştirme */}
      {products.map((urun) => (
        <ProductCard key={urun.id} {...urun} />
      ))}

      {/*//! Best Practice Alt Componente Gönderme */}
      {/*//! Buradan açmadan gönderip alt componentte karşılayıp içini açma */}
      {/* {products.map((ürün) => (
        <ProductCard key={ürün.id} ürün={ürün} />
      ))} */}

    
      
   
      
    </div>
  );
}

export default Products
