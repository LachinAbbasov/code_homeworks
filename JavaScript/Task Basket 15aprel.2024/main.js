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
        <button data-id=${product.id} data-name=${product.name} class="btn btn-outline-primary basket-btn">Basket</button>
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
      const currentProdID =this.getAttribute("data-id");
      const foundDuplicate = localBasketArr.find((x)=>x.id===currentProdID);
     if (foundDuplicate) {
      foundDuplicate.count++;
      Swal.fire({
        icon: 'success',
        title: `${this.getAttribute('data-name')} count increased`,
        showConfirmButton: false,
        timer: 1500,
      });
     }
     else{
      localBasketArr.push({id:currentProdID,count:1});
      
      Swal.fire({
        icon: 'success',
        title: `${this.getAttribute('data-name') } added to basket`,
        showConfirmButton: false,
        timer: 1500,
      });
     }
     const currentProd = products.find((x)=>x.id==currentProdID);
     tBody.innerHTML +=`<tr>
     <th scope="row">${currentProdID.id}</th>
     <td>${currentProd.name}</td>
     <td><img width="100" height="100" src="${currentProd.imgSrc}" alt="${currentProd.name}"></td>
     <td>5$</td>
     <td><i>${foundDuplicate ? foundDuplicate.count : 1 }</i></td>
     <td><button class="btn btn-outline-warning increase-btn"><i class="fa-solid fa-plus" style="color: #d2e033;"></i></button></td>
     <td><button class="btn btn-outline-warning declerease-btn"><i class="fa-solid fa-minus" style="color: #d2e033;"></i></button></td>
     <td><button class="btn btn-outline-danger delete-btn"><i class="fa-solid fa-trash" style="color: #ff0000;"></i></button></td>
 </tr>`
    localStorage.setItem('basket',JSON.stringify(localBasketArr));
    });
});
});



const basketArr = JSON.parse(localStorage.getItem("basket"));
// refresh
basketArr && basketArr.forEach((basketItem)=>{
    const basketProd = products.find((x)=>x.id==basketItem.id);
     tBody.innerHTML  +=  `<tr>
                            <th scope="row">${basketProd.id}</th>
                            <td>${basketProd.name}</td>
                            <td><img width="100" height="100" src="${basketProd.imgSrc}" alt="${basketProd.name}"></td>
                            <td>5$</td>
                            <td><i>${basketItem.count}</i></td>
                            <td><button class="btn btn-outline-warning increase-btn"><i class="fa-solid fa-plus" style="color: #d2e033;"></i></button></td>
                            <td><button class="btn btn-outline-warning declerease-btn"><i class="fa-solid fa-minus" style="color: #d2e033;"></i></button></td>
                            <td><button class="btn btn-outline-danger delete-btn"><i class="fa-solid fa-trash" style="color: #ff0000;"></i></button></td>
                        </tr>`;
});

// 1.04.39