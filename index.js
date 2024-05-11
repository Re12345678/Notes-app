let btn=document.querySelector("#btn");
let notesall=document.querySelector(".notes");
let notes=document.querySelector(".note");
let trash=document.querySelector(".fas fa-trash");
let clear=document.getElementById("clear");



btn.addEventListener("click",function(){
    let note=document.createElement("div");
    let i=document.createElement("i");
    let p=document.createElement("p");
    note.className="note";
    i.className="fas fa-trash";
    notesall.appendChild(note).appendChild(i);
    p.setAttribute("contenteditable","true");
    note.appendChild(p);
});
function show(){

    notesall.innerHTML=localStorage.getItem("note");
 }
 show();
 function update(){
     localStorage.setItem("note", notesall.innerHTML);
 }
 

 notesall.addEventListener("click", function(e){
    if (e.target.classList.contains("fa-trash")) {
        // Delete note if trash icon is clicked
        e.target.parentElement.remove();
        update();
    }
 else if(e.target.tagName === "DIV"){
     notes=document.querySelectorAll(".note");
     notes.forEach(nt => {
         nt.onkeyup = function(){
             update();
         }
     })
 }
 else if(e.target.tagName === "P"){
    e.target.contentEditable = true;
    e.target.addEventListener("blur", function(){
        update();
 });
 }
 });
 clear.addEventListener("click", function(){
    notesall.innerHTML=" ";
    localStorage.clear();
 })
 
