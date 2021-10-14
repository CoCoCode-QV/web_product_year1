$(document).ready(function(){

    $("#go-up").hide()
    
    $(window).scroll(function(){
         if($(this).scrollTop() <= 150 || $(this).scrollTop() >= 6706 )
            $("#go-up").hide() 
         else
             $("#go-up").show(1000)
     })

     $("#gototop").click(function(){
         $("html, body").animate({
            scrollTop : 0
        },1000);
     })

    // add: cart_list--no-cart 
    if($(".cart_item").length <= 0)
    {
         $(".cart_list").addClass("cart_list--no-cart");
         $(".cart_list-overflow").hide;
         $(".cart_list-heading").attr("style","display:none");
         $(".btn-giohang").attr("style","display:none");
    } 
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init(); 
        
 })

 // thả tim
function addhearts (){
    const liHearts =document.querySelectorAll('ul.action > li:first-child');
    const lengthLi = liHearts.length;
    for(let i = 0; i < lengthLi;++i){
        liHearts[i].onclick = function(){
            this.firstElementChild.classList.toggle("red")
        }
        }
}

addhearts();
 //product cart
const products=[
    {
        id: 1,
        image: 'img/ecovacs t9.png',
        Nameproduct: 'Robot lau nhà Ecovacs DEEBOT T9 POWER',
        price: '14.900.000đ',

    },
    {
        id: 2,
        image: 'img/ecovacst8.png',
        Nameproduct:'Robot lau nhà Ecovacs DEEBOT T8 POWER',
        price: '8.800.000đ'

    },
    {
        id: 3,
        image: 'img/ecovacs t5.jpg',
        Nameproduct:'Robot lau nhà Ecovacs DEEBOT T5 MAX',
        price: '6.500.000đ'
    },
    {
        id: 4,
        image: 'img/DEEBOT-OZMO-920.jpg',
        Nameproduct:'Robot lau nhà Ecovacs DEEBOT OZMO 920',
        price: '9.450.000đ'
    },
    {
        id: 5,
        image: 'img/xiaomi GEN 3.jpg',
        Nameproduct:'Robot lau nhà XIAOMI GEN 3',
        price: '11.900.000đ'
    },
    {
        id: 6,
        image: 'img/xiaomi mop p white.jpg',
        Nameproduct:'Robot lau nhà XIAOMI MOP P WHITE',
        price: '12.200.000đ'
    },
    {
        id: 7,
        image: 'img/xiaomi PRO SKV4109GL.jpg',
        Nameproduct:'Robot lau nhà XIAOMI pro SKV4109GL',
        price: '7.890.000đ'
    },
    {
        id: 8,
        image: 'img/XIAOMI gen1-1.jpg',
        Nameproduct:'Robot lau nhà XIAOMI GEN1-1',
        price: '8.400.000đ'
    },
    {
        id: 9,
        image: 'img/liectroux f5 pro.jpg',
        Nameproduct:'Robot lau nhà LIECTROUX F5 PRO',
        price: '7.900.000đ'
    },
    {
        id: 10,
        image: 'img/Liectroux-XR500.jpg',
        Nameproduct:'Robot lau nhà LIECTROUX-XR500',
        price: '6.300.000đ'
    },
    {
        id: 11,
        image: 'img/liectroux-zk901-sp1.jpg',
        Nameproduct:'Robot lau nhà LIECTROUX-ZK901',
        price: '5.650.000đ'
    },
    {
        id: 12,
        image: 'img/Robot-Liectroux-C30B.jpg',
        Nameproduct:'Robot lau nhà LIECTROUX C30B',
        price: '8.120.000đ'
    },
    {
        id: 13,
        image: 'img/kuving.jpg',
        Nameproduct:'MÁY ÉP TRÁI CÂY TỐC ĐỘ CHẬM KUVINGS NS-924CB',
        price: '7.590.000đ'
    },
    {
        id: 14,
        image: 'img/kuving1.jpg',
        Nameproduct:'MÁY ÉP TRÁI CÂY TỐC ĐỘ CHẬM KUVINGS NS-625CBS2',
        price: '9.990.000đ'
    },
    {
        id: 15,
        image: 'img/kuving2.jpg',
        Nameproduct:'MÁY ÉP TRÁI CÂY TỐC ĐỘ CHẬM KUVINGS NS-1725CBC2',
        price: '7.490.000đ'
    },
    {
        id: 16,
        image: 'img/may-lam-sua-hat-da-nang-tefal-bl967b66.jpg',
        Nameproduct:'MÁY LÀM SỮA HAT DA NANG TEFAL BL967',
        price: '2.690.000đ'
    },
    //noi chien
    {
        id: 17,
        image: 'img/NOI CHIEN 2.png',
        Nameproduct:'Nồi chiên không dầu KICHENLUX AF68-2',
        price: '2.690.000đ'
    },
    {
        id: 18,
        image: 'img/NOI CHIEN 3.png',
        Nameproduct:'Nồi chiên không dầu TEFAL EY701D15',
        price: '3.390.000đ'
    },
    {
        id: 19,
        image: 'img/COMIT.png',
        Nameproduct:'Nồi chiên không dầu COMET CM6836',
        price: '1.290.000đ'
    },
    {
        id: 20,
        image: 'img/MAGIC A-801.jpg',
        Nameproduct:'Nồi chiên không dầu MAGIC A-801',
        price: '1.840.000đ'
    },
    //hut bui giuong nem
    {
        id: 21,
        image: 'img/may-hut-bui-giuong-nem-hons-a101.jpg',
        Nameproduct:'MÁY HÚT BỤI GIƯỜNG NỆM HONS HSBC A101',
        price: '2.500.000đ'
    },
    {
        id: 22,
        image: 'img/May-hut-bui-giuong-nem-HONS-HSBC-2000.jpg',
        Nameproduct:'MÁY HÚT BỤI GIƯỜNG NỆM HONS HSBC-2000',
        price: '1.700.000đ'
    },
    {
        id: 23,
        image: 'img/may-hut-bui-giuong-nem-XIAOMI-deerma.jpg',
        Nameproduct:'MÁY HÚT BỤI GIƯỜNG NỆM XIAOMI-DEERMA CM800 ',
        price: '890.000đ'
    },
    {
        id: 24,
        image: 'img/HSBC-2100-2-500x500.jpg',
        Nameproduct:'MÁY HÚT BỤI GIƯỜNG NỆM HONS HSBC-2100',
        price: '1.840.000đ'
    },
]
//no cart
function NoCart (a){
    if(a >= 1){
        document.querySelector('.cart_list').classList.remove("cart_list--no-cart")
        document.querySelector('.cart_list-overflow').show;
        document.querySelector('.cart_list-heading').style.display = "block";
        document.querySelector('.btn-giohang').style.display = "block";
    }else
    {
        document.querySelector('.cart_list').classList.add("cart_list--no-cart")
         document.querySelector('.cart_list-overflow').hide;
         document.querySelector('.cart_list-heading').style.display = "none";
         document.querySelector('.btn-giohang').style.display = "none";
    }
}
// add product

const cartList = []
function addProduct(start){
    // add cart list
    const Nodelist_addcart = document.querySelectorAll('ul.action > li:nth-child(2)')
    const item_cartList = document.querySelector('.cart_list-item');
    let length_nodelist_addcart = Nodelist_addcart.length;
    function renderCartlist (){
        const htmlCart = cartList.map(function(cart,index){
            return `	
                <li class="cart_item" id="${cart.id}">
                    <img src="${cart.image}" alt="" class="cart_item-img">
                    <div class="cart_item-header">
                            <h5 class="cart_item-header--name">${cart.Name}</h5>
                            <span class="cart_item-header--price">${cart.price}</span>
                            <span class="cart_item-header--x">x</span>
                            <span class="cart_item-header--number">${cart.quantity}</span>
                            <span class="cart_item-header--remove"  id ="${index}"><i class="fas fa-trash-alt"></i></span>
                    </div>	
                </li>
                `
        }).join('');
        item_cartList.innerHTML = htmlCart;
    }
    let notify =  document.querySelector('.notify');
    let notify_delete = document.querySelector('.notify_delete');
    for(let i = 0; i < length_nodelist_addcart;i++)
    {
    
        Nodelist_addcart[i].onclick = function(){
            NoCart(1)
            this.firstElementChild.classList.add("red");
            let j = i; 
            let id2 = i + 1;
            // nếu home thì chạy đúng vì nodelist = 24 nếu page thì nodelist = 12 gặp lỗi về product
            if(length_nodelist_addcart !== products.length)
            {
               j = i + start;
               id2 = i + 1 + start;
            }
            // lấy index của sản phẩm 
            let flag = true;
            cartList.forEach(function(cart,index){
                if(cart.id === id2)
                    flag = false;
            })
            if(!flag)
            {
                cartList.forEach(function(cart,index){
                    if(cart.id == id2)
                        cart.quantity += 1;
                })
            }else{
                const obj = {
                    id: products[j].id,
                    image: products[j].image,
                    Name: products[j].Nameproduct,
                    price: products[j].price,
                    quantity: 1,
                }
                cartList.unshift(obj);
            }
            renderCartlist();
        //async
        // notify add cart 
        setTimeout(() => {
            notify.style.display ="none"
            notify.style.transform ="translateX(100%)"
        }, 1000);
        notify.style.display ="block"
        notify.style.transform ="translateX(0)"
        }
    }

    // xóa cart_item

    item_cartList.onclick = function(e){
    const item_remove=  e.target.closest('.cart_item-header--remove')
        if(item_cartList){
            //id của item_caltlist
            const id = item_remove.id;
            const reduceNumber = cartList[id].quantity
        if(confirm("Bạn có chắc muốn xóa sản phẩm này?")){
            if(reduceNumber <= 1){
                cartList.splice(id,1);
                renderCartlist();
            }else{
                cartList[id].quantity -= 1;
                renderCartlist();
            }
        }
        let Idcart_item= parseInt(item_remove.parentElement.parentElement.id);  
         // nếu home thì chạy đúng vì nodelist = 24 nếu page thì nodelist = 12 gặp lỗi về product
            if(length_nodelist_addcart !== products.length)
            {
                Idcart_item = Idcart_item -  start ;
            }
            Nodelist_addcart[Idcart_item - 1].firstElementChild.classList.remove("red") 
            setTimeout(() => {
                notify_delete.style.display ="none"
                notify_delete.style.transform ="translateX(100%)"
            }, 1000);
            notify_delete.style.display ="block"
            notify_delete.style.transform ="translateX(0)"
        }
    //cartd empty thì add no-cartd
    if(cartList.length <= 0)
    {
        NoCart(0);
    }
    } 
}
addProduct();

//card-description
const description = [
    {
        id: 1,
        image: 'img/ecovacs t9.png',
        Nameproduct: 'Robot lau nhà Ecovacs DEEBOT T9 POWER',
        price: '14.900.000đ',
        detail: function(){
            return `
            <li>Kích thước: 35 x 35 x 9.3cm</li>
            <li>Lực hút: 600/1500/3000</li>
            <li>Độ ồn: 66db</li>
            <li>Dung lượng Pin:5200mAh</li>
            <li>Thời gian hoạt động: 120 phút</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 2,
        image: 'img/ecovacst8.png',
        Nameproduct:'Robot lau nhà Ecovacs DEEBOT T8 POWER',
        price: '8.800.000đ',
        detail: function(){
            return `
            <li>Kích thước: 35 x 35 x 10cm</li>
            <li>Lực hút: 600/1200/1500</li>
            <li>Độ ồn: 67 - 73dB</li>
            <li>Dung lượng Pin:5200mAh</li>
            <li>Thời gian hoạt động: 150 phút - 170 phút</li>
            <li>Công suất: 40W</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 3,
        image: 'img/ecovacs t5.jpg',
        Nameproduct:'Robot lau nhà Ecovacs DEEBOT T5 MAX',
        price: '6.500.000đ',
        detail: function(){
            return `
            <li>Kích thước: 35 x 35 x 9.3cm</li>
            <li>Lực hút: 600/1200/1500pa</li>
            <li>Độ ồn: 66dB</li>
            <li>Dung lượng Pin:5200mAh</li>
            <li>Thời gian hoạt động: 200phút</li>
            <li>Thời gian sạc: 4h</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 4,
        image: 'img/DEEBOT-OZMO-920.jpg',
        Nameproduct:'Robot lau nhà Ecovacs DEEBOT OZMO 920',
        price: '9.450.000đ',
        detail: function(){
            return `
            <li>Kích thước: 35 x 35 x 10cm</li>
            <li>Lực hút: 600/1200/1500</li>
            <li>Độ ồn: 67 - 73dB</li>
            <li>Dung lượng Pin:5200mAh</li>
            <li>Thời gian hoạt động: 150 phút</li>
            <li>Công suất: 40W</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 5,
        image: 'img/xiaomi GEN 3.jpg',
        Nameproduct:'Robot lau nhà XIAOMI GEN 3',
        price: '11.900.000đ',
        detail: function(){
            return `
            <li>Kích thước: 35 x 35 x 10cm</li>
            <li>Lực hút: 1200/1500</li>
            <li>Độ ồn: 69dB</li>
            <li>Dung lượng Pin:5200mAh</li>
            <li>Thời gian hoạt động: 150 phút - 170 phút</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 6,
        image: 'img/xiaomi mop p white.jpg',
        Nameproduct:'Robot lau nhà XIAOMI MOP P WHITE',
        price: '12.200.000đ',
        detail: function(){
            return `
            <li>Kích thước: 35 x 35 x 9.3cm</li>
            <li>Lực hút:1500/3000</li>
            <li>Độ ồn: 65dB</li>
            <li>Dung lượng Pin:5200mAh</li>
            <li>Thời gian hoạt động: 200 phút</li>
            <li>Công suất: 40W</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 7,
        image: 'img/xiaomi PRO SKV4109GL.jpg',
        Nameproduct:'Robot lau nhà XIAOMI pro SKV4109GL',
        price: '7.890.000đ',
        detail: function(){
            return `
            <li>Kích thước: 35 x 35 x 10cm</li>
            <li>Lực hút: 600/1200/1500</li>
            <li>Độ ồn: 67 - 73dB</li>
            <li>Dung lượng Pin:5200mAh</li>
            <li>Thời gian hoạt động: 150 phút - 170 phút</li>
            <li>Công suất: 40W</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 8,
        image: 'img/XIAOMI gen1-1.jpg',
        Nameproduct:'Robot lau nhà XIAOMI GEN1-1',
        price: '8.400.000đ',
        detail: function(){
            return `
            <li>Kích thước: 35 x 35 x 9.6cm</li>
            <li>Lực hút: 600/1200/1500</li>
            <li>Độ ồn: 69dB</li>
            <li>Dung lượng Pin:5200mAh</li>
            <li>Thời gian hoạt động: 150 phút - 170 phút</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 9,
        image: 'img/liectroux f5 pro.jpg',
        Nameproduct:'Robot lau nhà LIECTROUX F5 PRO',
        price: '7.900.000đ',
        detail: function(){
            return `
            <li>Kích thước: 35 x 35 x 10cm</li>
            <li>Lực hút: 600/1200/1500</li>
            <li>Độ ồn: 70dB</li>
            <li>Dung lượng Pin:5200mAh</li>
            <li>Thời gian hoạt động: 150 phút - 170 phút</li>
            <li>Công suất: 35W</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 10,
        image: 'img/Liectroux-XR500.jpg',
        Nameproduct:'Robot lau nhà LIECTROUX-XR500',
        price: '6.300.000đ',
        detail: function(){
            return `
            <li>Kích thước: 35 x 35 x 10cm</li>
            <li>Lực hút: 600/1200/1500</li>
            <li>Độ ồn: 67 - 73dB</li>
            <li>Dung lượng Pin:4200mAh</li>
            <li>Thời gian hoạt động: 120 phút - 150 phút</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 11,
        image: 'img/liectroux-zk901-sp1.jpg',
        Nameproduct:'Robot lau nhà LIECTROUX-ZK901',
        price: '5.650.000đ',
        detail: function(){
            return `
            <li>Kích thước: 35 x 35 x 10cm</li>
            <li>Lực hút: 600/1200/1500</li>
            <li>Độ ồn: 67 - 73dB</li>
            <li>Dung lượng Pin:4200mAh</li>
            <li>Thời gian hoạt động: 120 phút - 150 phút</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 12,
        image: 'img/Robot-Liectroux-C30B.jpg',
        Nameproduct:'Robot lau nhà LIECTROUX C30B',
        price: '8.120.000đ',
        detail: function(){
            return `
            <li>Kích thước: 35 x 35 x 10cm</li>
            <li>Lực hút: 600/1200/1500</li>
            <li>Độ ồn: 67 - 73dB</li>
            <li>Dung lượng Pin:5200mAh</li>
            <li>Thời gian hoạt động: 150 phút - 170 phút</li>
            <li>Công suất: 40W</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 13,
        image: 'img/kuving.jpg',
        Nameproduct:'MÁY ÉP TRÁI CÂY TỐC ĐỘ CHẬM KUVINGS NS-924CB',
        price: '7.590.000đ',
        detail: function(){
            return `
            <li>Dung tích hộp ép: 400ml</li>
            <li>Kích thước: 57 x 26 x 36cm</li>
            <li>Thương hiệu: Hàn Quốc</li>
            <li>Trọng lượng: 10kg</li>
            <li>Thiết kế song ngữ: Việt</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 14,
        image: 'img/kuving1.jpg',
        Nameproduct:'MÁY ÉP TRÁI CÂY TỐC ĐỘ CHẬM KUVINGS NS-625CBS2',
        price: '9.990.000đ',
        detail: function(){
            return `
            <li>Dung tích hộp ép: 500ml</li>
            <li>Kích thước: 57 x 26 x 36cm</li>
            <li>Thương hiệu: Hàn Quốc</li>
            <li>Trọng lượng: 9kg</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 15,
        image: 'img/kuving2.jpg',
        Nameproduct:'MÁY ÉP TRÁI CÂY TỐC ĐỘ CHẬM KUVINGS NS-1725CBC2',
        price: '7.490.000đ',
        detail: function(){
            return `
            <li>Dung tích hộp ép: 400ml</li>
            <li>Kích thước: 57 x 26 x 36cm</li>
            <li>Thương hiệu: Hàn Quốc</li>
            <li>Trọng lượng: 10kg</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 16,
        image: 'img/may-lam-sua-hat-da-nang-tefal-bl967b66.jpg',
        Nameproduct:'MÁY LÀM SỮA HAT DA NANG TEFAL BL967',
        price: '2.690.000đ',
        detail: function(){
            return `
            <li>Dung tích hộp ép: 400ml</li>
            <li>Kích thước: 57 x 26 x 36cm</li>
            <li>Thương hiệu: Hàn Quốc</li>
            <li>Trọng lượng: 10kg</li>
            <li>Công suất: 2200W</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    //noi chien
    {
        id: 17,
        image: 'img/NOI CHIEN 2.png',
        Nameproduct:'Nồi chiên không dầu KICHENLUX AF68-2',
        price: '2.690.000đ',
        detail: function(){
            return `
            <li>Dung tích lên đến: 6 lít</li>
            <li>Nhiệt độ cao lên tới 200 độ C</li>
            <li>Công suất lớn 1800W giúp thời gian nấu nướng nhanh hơn</li>
            <li>Làm chín thực phẩm không cần đến dầu – mỡ rất an toàn cho cơ thể</li>
            <li>Giúp tiết kiệm thời gian, vệ sinh an toàn thực phẩm</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 18,
        image: 'img/NOI CHIEN 3.png',
        Nameproduct:'Nồi chiên không dầu TEFAL EY701D15',
        price: '3.390.000đ',
        detail: function(){
            return `
            <li>Dung tích lên đến: 7 lít</li>
            <li>Nhiệt độ cao lên tới 200 độ C</li>
            <li>Công suất lớn 1800W giúp thời gian nấu nướng nhanh hơn</li>
            <li>Làm chín thực phẩm không cần đến dầu – mỡ rất an toàn cho cơ thể</li>
            <li>Giúp tiết kiệm thời gian, vệ sinh an toàn thực phẩm</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 19,
        image: 'img/COMIT.png',
        Nameproduct:'Nồi chiên không dầu COMET CM6836',
        price: '1.290.000đ',
        detail: function(){
            return `
            <li>Dung tích lên đến: 6 lít</li>
            <li>Nhiệt độ cao lên tới 200 độ C</li>
            <li>Công suất lớn 1200W </li>
            <li>Làm chín thực phẩm không cần đến dầu – mỡ rất an toàn cho cơ thể</li>
            <li>Giúp tiết kiệm thời gian, vệ sinh an toàn thực phẩm</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 20,
        image: 'img/MAGIC A-801.jpg',
        Nameproduct:'Nồi chiên không dầu MAGIC A-801',
        price: '1.840.000đ',
        detail: function(){
            return `
            <li>Dung tích lên đến: 6 lít</li>
            <li>Nhiệt độ cao lên tới 200 độ C</li>
            <li>Công suất lớn 1800W giúp thời gian nấu nướng nhanh hơn</li>
            <li>Làm chín thực phẩm không cần đến dầu – mỡ rất an toàn cho cơ thể</li>
            <li>Giúp tiết kiệm thời gian, vệ sinh an toàn thực phẩm</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    //hut bui giuong nem
    {
        id: 21,
        image: 'img/may-hut-bui-giuong-nem-hons-a101.jpg',
        Nameproduct:'MÁY HÚT BỤI GIƯỜNG NỆM HONS HSBC A101',
        price: '2.500.000đ',
        detail: function(){
            return `
            <li>Độ ồn: 69db</li>
            <li>Dung lượng pin: 2200mAh</li>
            <li>Thời gian sử dụng liên tục: 30-40 phút</li>
            <li>Thời gian sạc đầy pin: 4 tiếng</li>
            <li>Công suất: 90w</li>
            <li>Màng lọc: hepa</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
        
    },
    {
        id: 22,
        image: 'img/May-hut-bui-giuong-nem-HONS-HSBC-2000.jpg',
        Nameproduct:'MÁY HÚT BỤI GIƯỜNG NỆM HONS HSBC-2000',
        price: '1.700.000đ',
        detail: function(){
            return `
            <li>Kíc thước máy: 26 x 17,5 x 10,5cm</li>
            <li>Độ ồn: 69db</li>
            <li>Dung lượng pin: 2200mAh</li>
            <li>Thời gian sử dụng liên tục: 30-40 phút</li>
            <li>Thời gian sạc đầy pin: 4 tiếng</li>
            <li>Công suất: 90w</li>
            <li>Màng lọc: hepa</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 23,
        image: 'img/may-hut-bui-giuong-nem-XIAOMI-deerma.jpg',
        Nameproduct:'MÁY HÚT BỤI GIƯỜNG NỆM XIAOMI-DEERMA CM800 ',
        price: '890.000đ',
        detail: function(){
            return `
            <li>Kíc thước máy: 26 x 17,5 x 10,5cm</li>
            <li>Độ ồn: 69db</li>
            <li>Dung lượng pin: 2200mAh</li>
            <li>Thời gian sử dụng liên tục: 30-40 phút</li>
            <li>Thời gian sạc đầy pin: 4 tiếng</li>
            <li>Công suất: 70w</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
    {
        id: 24,
        image: 'img/HSBC-2100-2-500x500.jpg',
        Nameproduct:'MÁY HÚT BỤI GIƯỜNG NỆM HONS HSBC-2100',
        price: '1.840.000đ',
        detail: function(){
            return `
            <li>Kíc thước máy: 26 x 17,5 x 10,5cm</li>
            <li>Độ ồn: 69db</li>
            <li>Dung lượng pin: 2200mAh</li>
            <li>Thời gian sử dụng liên tục: 30-40 phút</li>
            <li>Thời gian sạc đầy pin: 4 tiếng</li>
            <li>Công suất: 90w</li>
            <li>Màng lọc: hepa</li>
            <li>Bảo hành: 1 năm</li>
            `
        }
    },
]

function CardDescription(start){
    const listEye = document.querySelectorAll('ul.action > li:last-child');
    const exit = document.querySelector('.exit')
    const details = document.querySelector('.overlay');
    const itemProduct = document.querySelectorAll('#money_rating')
    const item_cartList = document.querySelector('.cart_list-item');
    const notifyOverlay = document.querySelector('.notifyOverlay')
    function renderDetails (id2){
        const htmls = description.map(function(cart,index)
        {
            if(cart.id == id2)
            {
                return `
                <div class="card" id ="${cart.id}">
                    <div class="card_form ">
                        <div class="col-left">
                            <div class="card_img">
                                <img src="${cart.image}" alt="">
                            </div>
                        </div>
                        <div class="col-right">
                            <div class="card_name">
                                <h4>${cart.Nameproduct}</h4>
                            </div>
                            <div class="card_price">
                                <h3>${cart.price}</h3>
                            </div>
                        
                            <div class="card_description">
                                <p>Mô tả chi tiết:</p>
                                <ul>
                                    ${cart.detail()}
                                </ul>
                            </div>
                            <div class="card-btn">
                                    <input type="button" value="-" class="minus">
                                    <input type="text" id="quantity" value="1">
                                    <input type="button" value="+" class="plus">
                    
                                    <button type="submit" id="addcart">Thêm vào giỏ hàng</button>
                                    <button type="submit" id="buynow">Mua ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="exit">	<i class="fas fa-times-circle"></i></span>
                
                `
            }
        }).join('');
        details.innerHTML =htmls;
    }
    for(let i = 0; i < listEye.length ;i++)
    {
        listEye[i].onclick= function(){
            let id2 = i + 1;
            if(listEye.length !== products.length)
            {
                id2 = i + 1+start;
            }
            renderDetails(id2);
            details.style.opacity ="1";
            details.style. transform ="translateY(0)";
        }
        
    }
    for(let j = 0; j < itemProduct.length; j++)
    {
        itemProduct[j].ondblclick = function(){
            let id2 = j + 1;
            if(listEye.length !== products.length)
            {
                id2 = j + 1+start;
            }
            renderDetails(id2);
            details.style.opacity ="1";
            details.style. transform ="translateY(0)";
        }
    }

    details.onclick= function(e){
        const exit =e.target.closest(".exit");
        if(exit)
        {
            setTimeout(()=>{
                details.style.opacity ="0";
                details.style. transform ="translateY(-100%)";
            },500)
        }
    
        const plus = e.target.closest(".plus")
        const minus = e.target.closest(".minus")
        if(plus)
        {
            let valueNumber = plus.previousElementSibling;
           valueNumber.value++;

        } 
        if(minus)
        {
            let valueNumber = minus.nextElementSibling;
            if(valueNumber.value <= 1)
            {
                minus.preventDefault;
            }else
            {
              valueNumber.value--;
            }
        }
        //add cart 
        const addcart = e.target.closest("#addcart")
        if(addcart)
        {
            let numberValue = addcart.previousElementSibling.previousElementSibling.value
           const Newdescription = description.map(function(item){
                return {
                    id: item.id,
                    image: item.image,
                    Name: item.Nameproduct,
                    price: item.price,
                    quantity: numberValue,
                }
            })
            NoCart(1)
            const id = document.querySelector('.overlay > .card').id;
            let temp = 0;
           for(let i = 0; i < Newdescription.length;i++)
           {
               if(Newdescription[i].id == id)
               {
                   cartList[temp] = Newdescription[i];
                   temp++
               }
            }
            function renderCartlist (){
                const htmlCart = cartList.map(function(cart,index){
                    return `	
                        <li class="cart_item" id="${cart.id}">
                            <img src="${cart.image}" alt="" class="cart_item-img">
                            <div class="cart_item-header">
                                    <h5 class="cart_item-header--name">${cart.Name}</h5>
                                    <span class="cart_item-header--price">${cart.price}</span>
                                    <span class="cart_item-header--x">x</span>
                                    <span class="cart_item-header--number">${cart.quantity}</span>
                                    <span class="cart_item-header--remove"  id ="${index}"><i class="fas fa-trash-alt"></i></span>
                            </div>	
                        </li>
                        `
                }).join('');
                item_cartList.innerHTML = htmlCart;
            }
            renderCartlist();
            alert("Đã thêm sản phẩm vào giỏ hàng!")
         }

    }

}
// const kw = document.getElementById("kw").value
// console.log(kw)
CardDescription()
//mobile
const listMobile = document.querySelector('.list')
const MenuMobile = document.querySelector('.list_mobile')
if(listMobile){
    listMobile.onclick= function(){
        MenuMobile.style.transform ="translateX(0)"
        MenuMobile.style.opacity="1"
    }
}

const exitMenu = document.querySelector('.list_mobile > .exit')
exitMenu.onclick = function(){
    MenuMobile.style.transform ="translateX(200%)"
    MenuMobile.style.opacity="0"
    MenuMobile.style.transition = "all 2s"
}
