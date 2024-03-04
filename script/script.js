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
console.log(top_menu, title)


top_menu[0].classList.add('active')
top_menu.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0, title[i].offsetTop)
    })
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




