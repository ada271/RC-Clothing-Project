

const Products = ({products}) => {
  return (
    <div className="product-list">
        {
            products.map((urun)=>(<div>
                


                {/* <h3>{urun.price}</h3>
                <img src={urun.image} alt="" /> */}

            </div>))
        }
    </div>
  )
}

export default Products