const title = document.querySelectorAll('main > section')
const link_button = document.querySelectorAll('#btn')
const menu_a = document.querySelectorAll('.gnb a')
console.log(title, link_button, menu_a)

link_button[0].addEventListener('click',()=>{
    console.log(title[0].offsetTop)
    console.log(title[1].offsetTop)
    console.log(title[2].offsetTop)
    console.log(title[3].offsetTop)
    window.scrollTo(0, title[0].offsetTop)
})
