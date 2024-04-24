import products from "../data"


const Products = () => {



  return (
    <div>
    <h3>This is Products</h3>
    
      {products.map((products)=>{
         <li key={products.id}>{products.name},{products.price}</li>
      })}
   
  </div>
  )
}

export default Products
