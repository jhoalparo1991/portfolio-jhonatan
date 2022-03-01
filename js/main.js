let header = document.querySelector('header');
let year = document.querySelector('.year');

let date = new Date().getFullYear();

year.textContent = date;

document.addEventListener('scroll', (e)=>{
    let scroll = e.path[1].scrollY;

    if(scroll >=35){
        header.classList.add('hidden')
    }else{
        header.classList.remove('hidden')
        
    }
})

