

const url = 'https://jsonplaceholder.typicode.com/posts?_limit=5&_deplay=3000'
async function main(){
    const r = await fetch(url)
    if (r.ok){
        return r.json()
    }
}
const mains = document.querySelector('.main')
function cre(clas,text){
    const el = document.createElement('div')
    el.classList.add(clas)
    mains.append(el)
    let i = 0
    const t = setInterval(() => {
            
            el.innerHTML += text[i]
            i ++
            i == text.length ? clearInterval(t) : 0
       
        
    }, 100);
}
function ecrir(text){
    for(let i in text){
        cre(clas='titre',text=text[i].title)
        cre(clas='corps',text=text[i].body)
    }
}

const button = document.querySelector('button')
button.onclick = ()=>{
    button.style.display = 'none'
    ch = button.nextElementSibling
    ch.style.display = 'block'
    ch.classList.toggle('load-ch')

    main().then(b => {
        let i = 0

        const t = setInterval(() => {

            cre(clas='titre',text=b[i].title)
            cre(clas='corps',text=b[i].body)
            
            i ++
            i == b.length ? clearInterval(t) : 0
        }, 2000)
        button.parentElement.remove()
    })
}
