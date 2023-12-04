
document.querySelector("header").addEventListener('click', function() {
   
    if(this.style.animationPlayState == "paused"){
        console.log("release cat")
        this.style.animationPlayState = "running"
    } else{
        console.log("freeze cat")
        this.style.animationPlayState = "paused"
    }
    
});

document.querySelectorAll('.wrapper').forEach(function (element) {
    element.addEventListener('click', function () {
        // Set z-index of all '.wrapper' elements to 0
        document.querySelectorAll('.wrapper').forEach(function (wrapper) {
            wrapper.style.zIndex = 0;
        });

        // Set z-index of clicked '.wrapper' element to 10
        this.style.zIndex = 10;

        // Toggle the 'open' class
        this.classList.toggle('open');
    });
});