function showLetter(){
    document.getElementById("letter").style.transform =
    "translate(-50%, -50%) scale(1)";
}
function closeLetter(){
    document.getElementById("letter").style.transform =
    "translate(-50%, -50%) scale(0)";
}
function toggleLetter(){
    const letter = document.getElementById("letter");

    if(letter.style.transform === "translate(-50%, -50%) scale(1)"){
        letter.style.transform = "translate(-50%, -50%) scale(0)";
        document.body.classList.remove("blur");
    } else {
        letter.style.transform = "translate(-50%, -50%) scale(1)";
        document.body.classList.add("blur");
    }
}
document.getElementById("overlay").addEventListener("click", function(){
  document.getElementById("bg-music").play();
  this.style.display = "none";
});