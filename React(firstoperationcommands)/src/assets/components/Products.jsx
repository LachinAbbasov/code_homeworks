import products from "../data"


const Products = () => {



  return (
    <>
    <h3>This is Products</h3>
    <ul>
      {products.map((products)=>{
       return(
            <li key={products.id}>{products.name}.{products.price}</li>)
          
      }
      )}
    </ul>
    
  </>
  );
}
export default Products
