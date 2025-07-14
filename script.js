console.log("hello bhidu!")
let icon = document.querySelectorAll(".icon");
function iconChange(){
    if(icon.classList.contains("fa-plus"))
    {
        icon.classList.remove("fa-plus")
        icon.classList.add("fa-xmark")
    }
    else{
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-plus")
    }
}
icon.addEventListener('click',iconChange)