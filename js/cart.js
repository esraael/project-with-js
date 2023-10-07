
let allTotalPrice = 0
let productsContainer = document.querySelector(".Products-items")
function drawdata(product){
    let d = product.map((item)=>{
        allTotalPrice += (item.price * item.inCart)
        return  `
        <tr>
            <td class="td-style">
                <button class="btn btn-danger btn-style" onClick="removeitem(${item.id})"><i class="fa-solid fa-xmark"></i> </button>
                <img src=${item.imgurl} class="img-thumbnail " height="70" width="70">
                <h3 class="text-primary">${item.product}</h3>
            </td>
            <td class="text-center price-tab">${item.price},00 EGP</td>
            <td>
                <div class="quan-sty">
                    <button class="btn btn-success btn-style" onClick="res(${item.id})">+</button>
                    <span class="product-value your-Cart_${item.id}">${item.inCart}</span>
                    <button class="btn btn-danger btn-style" onClick="res2(${item.id})">-</button>
                </div>
                        
                </td>
                <td class="text-center price-tab total-price_${item.id}" id="totalprice">${item.inCart * item.price},00 EGP</td>  
        </tr>
        `
    })
    
    let y = d.join(" ")
    productsContainer.innerHTML = y
    footerdispaly(allTotalPrice)
}
let favsection = document.querySelector(".swiper-wrapper")
function drawfav(favitem){
    let fav = favitem.map((item)=>{
        return `
        <div class="col-lg-4">
                <div class="pa_sec_1_content">
                    <img class="sec_1_imaggggs" src="${item.imgurl}" alt="Card image" >
                        <div class="card-body">
                            <h4 class="sec_1_h555">Product : <span> ${item.product} </span></h4>
                            <p class="sec_1_h555" price="80">Price :<span> ${item.price} EGP </span></p>
                            <p class="sec_1_h555">Category :<span> ${item.category}</span></p>
                            <div class="d-flex justify-content-between sec_1_info">
                            <a id="favCheck" class="text-secondary" onClick="addfav(${item.id})"><i class="fa-solid fa-heart fav ii"></i></a>
                            </div>
                            
                        </div>
                </div>  
            </div>
        `
    })
    let y = fav.join(" ")
    favsection.innerHTML += y
}

let productData = localStorage.getItem("CartProducts")
let favitem = localStorage.getItem("favarr")
favitem = JSON.parse(favitem)
drawfav(favitem)

if (productData || favitem ){
    productData=JSON.parse(productData)
    drawdata(productData)
}

function removeitem(id) {
    const productToRemove = productData.find(item => item.id === id);
    if (productToRemove) {
      const totalPriceToRemove = productToRemove.price * productToRemove.inCart;

        const indexToRemove = productData.indexOf(productToRemove);
        if (indexToRemove !== -1) {
            productData.splice(indexToRemove, 1);
        }
        drawdata(productData);
    
        allTotalPrice -= totalPriceToRemove;
    
        localStorage.setItem("CartProducts", JSON.stringify(productData));
    
        footerdispaly(allTotalPrice);
    }
}


function res(id){
    let productitem = productData.find((item)=>item.id === id)
    let productID = productitem.id 
    let productQuantity = document.querySelector(`.your-Cart_${productitem.id}`) 
    let totalPrice = document.querySelector(`.total-price_${productitem.id}`) 
    productitem.inCart =parseInt(productitem.inCart)+1
    productQuantity.innerHTML = productitem.inCart
    let totalcost =  productitem.inCart * productitem.price
    totalPrice.innerHTML = `$${totalcost},00  `
    allTotalPrice +=  productitem.price

    localStorage.setItem("CartProducts", JSON.stringify(productData))
    footerdispaly(allTotalPrice)
}
function res2(id){
    let productitem = productData.find((item)=>item.id === id)
    let productID = productitem.id 
    let productQuantity = document.querySelector(`.your-Cart_${productitem.id}`)  
    let totalPrice = document.querySelector(`.total-price_${productitem.id}`) 
    productitem.inCart =parseInt(productitem.inCart)-1
    productQuantity.innerHTML = productitem.inCart 
    let totalcost =  productitem.inCart * productitem.price
    totalPrice.innerHTML = `$${totalcost},00  `
    allTotalPrice -=  productitem.price
    localStorage.setItem("CartProducts", JSON.stringify(productData))

    footerdispaly(allTotalPrice)
}
function footerdispaly(all){
    let display = document.querySelector(".display")
    display.innerHTML = `
            <tr>
                <td colspan="4">Total Price : ${all}$</td>
            </tr>
        `
}
footerdispaly(all)





































/////////////////////////////////////////////////////////////////
// **********************************************************
// total-price_${item.id}  ضيفنا ال class دا علشان نقدر نعدل كل سعر لوحده 
//  <td class="text-center price-tab   ...   total-price_${item.id}   ....      ">$${item.inCart * item.price},00</td>   
// <span class="product-value  ...    your-Cart_${item.id}  ....     ">${item.inCart}</span>
/*
let index = productData.find((item)=>item.id === id)
    console.log(productData[index])
    // productData[index].remove()
    // drawdata(productData)
*/
