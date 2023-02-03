let icon = document.getElementById('icon')
icon.addEventListener('click' , () =>{
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
        icon.src = "n/sun.png"
    }
    else{
        icon.src = "n/m1oon.png"
        icon.style.width = '50px'
    }
})


