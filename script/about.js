const title = document.querySelectorAll('.title h1')
const link_a = document.querySelectorAll('.link a')
const menu_a = document.querySelectorAll('.gnb a')
console.log(title, link_a, menu_a)

menu_a.forEach((obj, idx)=>{
    obj.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0, title[idx].offsetTop)
    })
})

link_a.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault() // 3번째 버튼을 클릭했을때 첫번째로 돌아가는 것을 방지 해준다 (a태그로할시에) button태그로 하면 이런 현상이 없음
        window.scrollTo(0, title[i].offsetTop)
    })
})  