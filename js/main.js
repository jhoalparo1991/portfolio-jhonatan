let header = document.querySelector('header');

document.addEventListener('scroll', (e)=>{
    let scroll = e.path[1].scrollY;

    if(scroll >=35){
        header.classList.add('hidden')
    }else{
        header.classList.remove('hidden')
        
    }
})


console.log(header);