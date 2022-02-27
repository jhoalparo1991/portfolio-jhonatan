const header = document.querySelector('header')

document.addEventListener('scroll', (e)=>{
    let position = e.path[1].scrollY;

    if (position >= 30){
        header.classList.add('down-header');
    }else{
        header.classList.remove('down-header');
    }
})