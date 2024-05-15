let numbertab = 0;
const tabs = document.querySelectorAll('.description-tab .tab');
const menuItems = document.querySelectorAll('.description-menu li');


function showTab(number) {
    tabs.forEach((tab) => {
        tab.style.display = 'none';
    });
    tabs[number].style.display = 'block';
}
    menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', (event) => {
        // Ngăn chặn hành vi mặc định của liên kết
        event.preventDefault();

        // Ẩn tất cả các tab
        tabs.forEach(tab => {
            tab.style.display = 'none';
        });

        // Xóa lớp active khỏi tất cả các mục menu
        menuItems.forEach(item => {
            item.classList.remove('active');
        });

        // Hiển thị tab tương ứng với mục menu được click
        tabs[index].style.display = 'block';

        // Thêm lớp active cho mục menu được click
        menuItem.classList.add('active');
    });
});

showTab(numbertab);
const models =document.querySelectorAll(".model");
const next = document.querySelector('.fa-arrow-right');
const prev = document.querySelector('.fa-arrow-left');
let lengthItem= models.length;
let indexModel=0;

next.onclick=function(e){
	if(indexModel + 1 >lengthItem-1){
		indexModel=0
		slideModel();
	}
	else{
        indexModel++;
        slideModel();
	}
}
prev.onclick=function(e){
	if(indexModel - 1 < 0){
		indexModel=lengthItem-1
		slideModel();
	}
	else{
        indexModel--;
        slideModel();
	}
}
models.forEach(model =>{
        const btn =model.querySelector("button");
        const p =model.querySelector('button p')
        btn.style.backgroundColor = btn.dataset.color;
        p.style.color = btn.dataset.color;
    });
function slideModel(){
    models.forEach(model =>{
        model.style.display = 'none';
    });
    models[indexModel].style.display ="flex";
    
}
slideModel();
const gallery = document.querySelector(".wrapper");
const exterior=document.querySelector('.exterior');
const specification=document.querySelector('.specification');
const features =document.querySelector('.features');
window.addEventListener('scroll', function() {

    let top =this.scrollY;
    console.log(top);
    if(700 <= top && top <=1700){
        gallery.classList.add("active");
    }
    else{
        gallery.classList.remove("active");
        
    }
    if(1600 <= top && top <=2500){
        exterior.classList.add("active");
    }
    else{exterior.classList.remove("active");}

    if(2600 <=top && top <=3500 ){
        specification.classList.add("active");
    } else{specification.classList.remove("active");}
    if(3600 <=top && top <=4500 ){
        features.classList.add("active");
    } else{features.classList.remove("active");}
});