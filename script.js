console.log("hello bhidu!")
let play = document.getElementsByClassName("icon");
function iconChange(){
    if(play.classList.contains("fa-plus"))
    {
        play.classList.remove("fa-plus")
        play.classList.add("fa-xmark")
    }
    else{
        play.classList.remove("fa-xmark")
        play.classList.add("fa-plus")
    }
}
play.addEventListener('click',iconChange)

