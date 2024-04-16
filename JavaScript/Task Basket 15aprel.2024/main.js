import products from "./data.js";

const cardsRow = document.querySelector('.cards-row');
const tBody =document.querySelector('tbody');


window.addEventListener('load',()=>{
    if (!localStorage.getItem('basket')){
localStorage.setItem('basket',JSON.stringify([]));
    }
});

products.forEach((product)=>{
cardsRow.innerHTML+=` <div class="col-lg-3 col-md-6 col-sm-12">
<div class="card">
    <img class="card-img-top" height="240"
        src="${product.imgSrc}"
        alt="${product.name}">
    <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
      <h5>${product.discountPercentage > 0 ? `<del class="text-secondary">${product.salePrice}$</del>${Number(product.salePrice-(product.salePrice*product.discountPercentage/100)).toFixed(2)}`:product.salePrice }$</h5>
        <button data-id=${product.id} class="btn btn-outline-primary basket-btn">Basket</button>
        <button data-id=${product.id} class="btn btn-outline-danger delete-btn">Delete</button>
    </div>
</div>
</div>`;
const deleteBtns =document.querySelectorAll('.delete-btn')
deleteBtns.forEach((deleteBtn)=>{
    deleteBtn.addEventListener('click', function(){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) { 
                const prodIdx =products.findIndex((x)=>x.id===this.getAttribute('data-id'));
                 this.closest('.col-lg-3').remove();
            products.splice(prodIdx,1);
            console.log(products);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
     
    });
});

const basketBtns = document.querySelectorAll('.basket-btn')
basketBtns.forEach((basketBtn)=>{
    basketBtn.addEventListener('click',function(e){
     const localBasketArr = JSON.parse(localStorage.getItem("basket"));
    localBasketArr.push({id: this.getAttribute("data-id"),count:1});
    localStorage.setItem('basket',JSON.stringify(localBasketArr));
    });
});
});



const basketArr = JSON.parse(localStorage.getItem("basket"));
console.log('basketarray;',basketArr);
basketArr || 
  basketArr.forEach((basketItem)=>{
     tBody.innerHTML  +=  `<tr>
                            <th scope="row">1</th>
                            <td>Snikkers</td>
                            <td><img width="100" height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYUU9oJ1YKUCAhi6O2H4wFFaSqCRDqu8pr96jvR5VuQ&s" alt=""></td>
                            <td>3.5$</td>
                            <td><button class="btn btn-outline-warning increase-btn"><i class="fa-solid fa-plus" style="color: #d2e033;"></i></button></td>
                            <td><button class="btn btn-outline-warning declerease-btn"><i class="fa-solid fa-minus" style="color: #d2e033;"></i></button></td>
                            <td><button class="btn btn-outline-danger delete-btn"><i class="fa-solid fa-trash" style="color: #ff0000;"></i></button></td>
                        </tr>`;
});

