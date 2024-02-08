const top_menu = document.querySelectorAll('.gnb li a')
const title = document.querySelectorAll('main > section')
const link_button = document.querySelectorAll('#btn')
const menu_a = document.querySelectorAll('.gnb a')
console.log(title, link_button, menu_a)


// 오른쪽 고정 버튼 
link_button[0].addEventListener('click',()=>{
    console.log(title[0].offsetTop)
    console.log(title[1].offsetTop)
    console.log(title[2].offsetTop)
    console.log(title[3].offsetTop)
    window.scrollTo(0, title[0].offsetTop)
})
link_button[1].addEventListener('click',()=>{
    console.log(title[0].offsetTop)
    console.log(title[1].offsetTop)
    console.log(title[2].offsetTop)
    console.log(title[3].offsetTop)
    window.scrollTo(0, title[1].offsetTop)
})
link_button[2].addEventListener('click',()=>{
    console.log(title[0].offsetTop)
    console.log(title[1].offsetTop)
    console.log(title[2].offsetTop)
    console.log(title[3].offsetTop)
    window.scrollTo(0, title[2].offsetTop)
})
link_button[3].addEventListener('click',()=>{
    console.log(title[0].offsetTop)
    console.log(title[1].offsetTop)
    console.log(title[2].offsetTop)
    console.log(title[3].offsetTop)
    window.scrollTo(0, title[3].offsetTop)
})

// 상단 헤더
menu_a[2].addEventListener('click',()=>{
    console.log(title[0].offsetTop)
    console.log(title[1].offsetTop)
    console.log(title[2].offsetTop)
    console.log(title[3].offsetTop)
    window.scrollTo(0, title[1].offsetTop)
})
menu_a[3].addEventListener('click',()=>{
    console.log(title[0].offsetTop)
    console.log(title[1].offsetTop)
    console.log(title[2].offsetTop)
    console.log(title[3].offsetTop)
    window.scrollTo(0, title[2].offsetTop)
})
menu_a[4].addEventListener('click',()=>{
    console.log(title[0].offsetTop)
    console.log(title[1].offsetTop)
    console.log(title[2].offsetTop)
    console.log(title[3].offsetTop)
    window.scrollTo(0, title[3].offsetTop)
})