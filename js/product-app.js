$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() <= 150 || $(this).scrollTop() >= 1044 )
		   $("#go-up").hide() 
		else
			$("#go-up").show(1000)
	})
})


//paging
const itemNumberpage = 12;
let start = 0;
let end = 11;
let page =1 
const listPage = document.querySelector(".product_item-paging") 
const listProducts = document.querySelector(".product_items-rows")

function renderPage (itemNumberPage){
    const numberPage = Math.ceil(products.length / itemNumberPage)
    let  htmls =''
    for(let i = 0; i < numberPage;i++)
    {
        htmls +=`
             <button class="page ${page == i+1 ? 'active': '' }">${i + 1}</button>
        `
    }
    listPage.innerHTML = htmls;
}

renderPage(itemNumberpage);
//renderproduct

function renderProduct(start,end){
    const htmls = products.map(function(product,index){
        if(index >= start && index <= end){
            return `
            <div class="product_item-col">
					<div class="imgbx">
						<img src="${product.image}" title="Ecovacs t9"/>	
						<ul class="action">
							<li>
								<i class="fa fa-heart" aria-hidden="true"></i>
								<span>Yêu thích</span>
							</li>
							<li>
								<i class="fa fa-shopping-cart" aria-hidden="true"></i>
								<span>Thêm vào giỏ hàng</span>
							</li>
							<li>
								<i class="fa fa-eye" aria-hidden="true"></i>
								<span>Xem chi tiết</span>
							</li>
						</ul>
					</div>
					<div id="money_rating">
						<span>${product.Nameproduct} </span>
						<div class="moneys">
							<h4>${product.price}</h4>
						</div>
						<div class="empty">
							<span><i class="fas fa-cart-arrow-down"></i>Còn hàng</span>
						</div>
						<div class="rating">
							<i class="fa fa-star" aria-hidden="true"></i>
							<i class="fa fa-star" aria-hidden="true"></i>
							<i class="fa fa-star" aria-hidden="true"></i>
							<i class="fa fa-star" aria-hidden="true"></i>
							<i class="fa fa-star" aria-hidden="true"></i>
						</div>
					</div>
				</div>
            `
        }
    }).join('')
    listProducts.innerHTML =htmls
}
//page 1
renderProduct(start,end);

function Gotopage(pageCurr){
    page = pageCurr
    start = (pageCurr -1) * itemNumberpage;
    end = pageCurr * itemNumberpage -1;
    renderProduct(start,end) 
    renderPage(itemNumberpage);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
// onclick  page
listPage.onclick = function(e){
	const item = e.target.closest(".page")
	if(item){
		const pageCurr =  Number.parseInt(item.innerText);
		Gotopage(pageCurr);
		addhearts();
		//
		addProduct(start,end);
		//
		CardDescription(start);
	}
}   

// onclick product sell and product new
const productNews = document.querySelector(".product_new")
const productSell = document.querySelector(".product_sell");
productNews.onclick = function(){
	this.classList.add("active-red")
	productSell.classList.remove('active-red')
	renderProduct(start,end);
	document.querySelector(".loading").style.display ="block"
	setTimeout(()=>{
		document.querySelector(".loading").style.display ="none"
	},500)
	renderProduct(start,end) 
	listPage.style.display="flex"
	addhearts();
	addProduct(start,end);
	CardDescription(start);
}
productSell.onclick = function(){
	productSell.classList.add('active-red');
	productNews.classList.remove('active-red')
	renderProduct(start,end);
	document.querySelector(".loading").style.display ="block"
	setTimeout(()=>{
		document.querySelector(".loading").style.display ="none"
	},500)
	const begin = 16;
	const last = 23
	renderProduct(begin,last);
	listPage.style.display="none"
	addhearts();
	addProduct(begin,last);
	CardDescription(begin);
}
function MenuProduct (){
	const MenuProducts = document.querySelectorAll('.list_product-item li');
	let quantityProduct = 4;
	let start1
	let end1
	for(let i = 0; i < MenuProducts.length;i++)
	{
		MenuProducts[i].onclick = function(){
			 start1 = i * quantityProduct;
			 end1 = (i+1)*4 -1;
			renderProduct(start1,end1);
			addhearts();
			addProduct(start1);
			CardDescription(start1);
			listPage.style.display="none"
			productNews.classList.remove('active-red')
			productSell.classList.remove('active-red')
		}
	}
	//mobile
	const MenuMobileProducts = document.querySelectorAll('.list_mobile-product-item li');
	for(let i = 0; i < MenuMobileProducts.length;i++)
	{
		MenuMobileProducts[i].onclick = function(){
			 start1 = i * quantityProduct;
			 end1 = (i+1)*4 -1;
			renderProduct(start1,end1);
			addhearts();
			addProduct(start1);
			CardDescription(start1);
			listPage.style.display="none"
			productNews.classList.remove('active-red')
			productSell.classList.remove('active-red')
		}
	}
}
const MenuProductMobile = document.querySelector('.MenuProduct')
if(MenuProductMobile)
{
	MenuProductMobile.onclick = function(){
		MenuMobile.style.transform ="translateX(0)"
        MenuMobile.style.opacity="1"
	}
}
MenuProduct();
addhearts();
addProduct(start);
CardDescription(start);
//thả tim