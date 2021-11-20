var all_anim = document.querySelectorAll("[data-anim]")

all_anim.forEach( element => {


    if(element.dataset.anim == "left-zoom-jl"){

        console.log('left anim')
        var position = element.getBoundingClientRect()
        console.log(position.top)

        element.addEventListener('scroll', AddleftZoom)
        // AddleftZoom(element)

    }


})



function AddleftZoom(recup){

    recup.style.setProperty("--left-zoom-opacity","1");
    recup.style.setProperty("--left-zoom-margin","auto");
    

}