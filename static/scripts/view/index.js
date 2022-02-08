document.getElementById("button_craft_lesson").addEventListener("click", function(){
    hideEverything()
    showElement(document.getElementById("div_craft_lesson"))
})

document.getElementById("button_take_lesson").addEventListener("click", function(){
    hideEverything()
    showElement(document.getElementById("div_take_lesson"))

})

function hideEverything(){ 
    hideElement(document.getElementById("div_take_lesson"))
    hideElement(document.getElementById("div_craft_lesson"))
    hideElement(document.getElementById("div_welcome"))
}