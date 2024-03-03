const content = "꾸준함과 성실함을 가치로 두고 무한히 성장하는New Frontend Developer 안일혁입니다.";
const text = document.querySelector(".text");
text.textContent = "";
let txtIdx = 0;
function typing(){
      let txt = content[txtIdx++];
      if (txt == undefined) return;
      text.innerHTML += txt === "\n" ? "<br/>": txt;
      if (txtIdx > content.length) {
          txtIdx = 0;
      }else{
        setTimeout(typing, 80)
      }
}
typing();

const top_menu = document.querySelectorAll('.gnb li a')
const title = document.querySelectorAll('main > section')
console.log(title, top_menu)


top_menu[0].addEventListener('click',()=>{
  console.log(title[0].offsetTop)
  console.log(title[1].offsetTop)
  console.log(title[2].offsetTop)
  console.log(title[3].offsetTop)
  console.log(title[4].offsetTop)
  window.scrollTo(0, title[0].offsetTop)
})
top_menu[1].addEventListener('click',()=>{
  console.log(title[0].offsetTop)
  console.log(title[1].offsetTop)
  console.log(title[2].offsetTop)
  console.log(title[3].offsetTop)
  console.log(title[4].offsetTop)
  window.scrollTo(0, title[1].offsetTop)
})

let swiperContainer =document.querySelector('#projectContainer')
let swiper = new Swiper('#projectContainer', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 1,
    // 슬라이드 사이의 간격
    spaceBetween: 50,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1,
    centeredSlides : true,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
})



