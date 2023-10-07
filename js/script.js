function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// ---------------------------------------------------------
let user_info=document.querySelector("#user_info")
let user_data=document.querySelector("#user")
let links=document.querySelector("#link")
let carts_products=document.querySelector(".carts_products")
let logout=document.querySelector(".logout")

if (localStorage.getItem("firstname")){
  links.remove()
  user_info.style.display="flex"
  carts_products.style.display="flex"
  logout.style.display="flex"
  user_data.innerHTML=localStorage.getItem("firstname")
}
logout.addEventListener("click" , function(){
  localStorage.clear();
  setTimeout(()=>{
    window.location="login.html";
  },1500)
})

// ---------------------------------------------------------------
let products = document.querySelector("#Products")
let data =[
    {
        id:1,
        product : "Jacket",
        imgurl:"images/kids-warm-puffer-jacket-yellow-260nw-2048868983.webp",
        price:300,
        category:"Fashion",
        inCart:0,
        infav:0
    },
    {
        id:2,
        product : "Watch",
        imgurl:"images/luxury-watch-isolated-on-white-260nw-1528296152.webp",
        price:150,
        category:"Watchs",
        inCart:0,
        infav:0
    },
    {
        id:3,
        product : "Perfume",
        imgurl:"images/photo-1541643600914-78b084683601.webp",
        price:200,
        category:"Perfume",
        inCart:0,
        infav:0
    },
    {
        id:4,
        product : "Shampoo",
        imgurl:"images/photo-1556227834-09f1de7a7d14.webp",
        price:100,
        category:"Hair Mask",
        inCart:0,
        infav:0
    },
    {
        id:5,
        product : "Earpods",
        imgurl:"images/photo-1572569511254-d8f925fe2cbb.webp",
        price:150,
        category:"Phone Accessories",
        inCart:0,
        infav:0
    },
    {
        id:6,
        product : "T-shirt",
        imgurl:"images/photo-1620799140408-edc6dcb6d633.webp",
        price:200,
        category:"Fashion",
        inCart:0,
        infav:0
    },
    {
        id:7,
        product : "Glasses",
        imgurl:"images/photo-1625591339971-4c9a87a66871.webp",
        price:100,
        category:"Glasses",
        inCart:0,
        infav:0
    },
    {
        id:8,
        product : "Shose",
        imgurl:"images/shose-baby-260nw-577111159.webp",
        price:100,
        category:"Shose",
        inCart:0,
        infav:0
    },
    {
        id:9,
        product : "Phone",
        imgurl:"images/smartphone-camera_TBGNSSQV6B.jpg",
        price:1000,
        category:"iPhone",
        inCart:0,
        infav:0
    },
]
// ---------------------------------------------search-------------------------------
let searchbtn = document.querySelector("#searchbtn")
searchbtn.addEventListener("click",()=>{
    let selecttype = document.querySelector("#search").value
    let searchinput = document.querySelector("#inputtt").value.toLowerCase()
    let filterdata = data.filter((item)=>{
        if(selecttype === "select by name"){
            return item.product.toLowerCase().includes(searchinput)
        }
        else if(selecttype === "select by Category"){
            return item.category.toLowerCase().includes(searchinput)
        }
    })
    if (filterdata){
        drawItems(filterdata)
    }
    if (searchinput===""){
        drawItems(data)
    }
})



function drawItems(data){
    let d = data.map((item)=>{
        return `
        <div class="col-lg-4">
                <div class="pa_sec_1_content">
                    <img class="sec_1_imaggggs" src="${item.imgurl}" alt="Card image" >
                        <div class="card-body">
                            <h4 class="sec_1_h555">Product : <span> ${item.product} </span></h4>
                            <p class="sec_1_h555" price="80">Price :<span> ${item.price} EGP </span></p>
                            <p class="sec_1_h555">Category :<span> ${item.category}</span></p>
                            <div class="d-flex justify-content-between sec_1_info">
                            <a  class="btn btn-primary addtocart" id="check" onClick="addItems(${item.id}) ">Add to Cart</a>
                            <a id="favCheck" class="text-secondary" onClick="addfav(${item.id})"><i class="fa-solid fa-heart fav iii"></i></a>
                            </div>
                            
                        </div>
                </div>  
            </div>
        `
    })
    let y = d.join(" ")
    products.innerHTML = y
}
drawItems(data)

let cartProductsarr=[]
let count = document.querySelector("#counter")
let counter = 0 ;

function addItems(id){
    if (localStorage.getItem("firstname")){
        let index = data.findIndex((item)=>item.id===id)
        let productdata = data[index]
        let cartdata = cartProductsarr.findIndex((item)=> item.id === id)

        if (cartdata === -1){
            productdata.inCart = 1
            cartProductsarr.push(productdata)
            counter ++ 
        }
        else{
            productdata.inCart --
            cartProductsarr.splice(cartdata , 1)
            counter --
        }
        localStorage.setItem("CartProducts" , JSON.stringify(cartProductsarr))
        count.innerHTML = counter
    }
    else{
        window.location="login.html"
    }


}
let favarr=[]
function addfav(id) {
    if (localStorage.getItem("firstname")){
        let index = data.findIndex((item)=> item.id === id)
        let favitem = data[index]
        let ourfav = favarr.findIndex((item)=> item.id === id)
        if (ourfav === -1){
            favitem.infav= 1
            favarr.push(favitem)
        }
        else{
            favitem.infav --
            favarr.splice(ourfav , 1)
        }
        localStorage.setItem("favarr",JSON.stringify(favarr))
    

    }
    else{
        window.location="login.html"
    }
}
// --------------------------------------addbutton----------------------
let check = document.querySelectorAll("#check")
check.forEach((item) => {
    item.addEventListener("click", function(){
        if(item.innerHTML== "Add to Cart"){
            item.classList.add("btn-danger")
            item.innerHTML="Remove"
            item.classList.remove("btn-primary")
        }
        else{
            item.classList.add("btn-primary")
            item.innerHTML= "Add to Cart"
            item.classList.remove("btn-danger")
        }
    })
})
let favCheck = document.querySelectorAll("#favCheck")
favCheck.forEach((item)=>{
    item.addEventListener("click",()=>{
        if (item.classList.contains("text-secondary"))
        {
            item.classList.add("text-danger")
            item.classList.remove("text-secondary")
        }
        else if (item.classList.contains("text-danger")){
            item.classList.add("text-secondary")
            item.classList.remove("text-danger")
        }
    })
})



















