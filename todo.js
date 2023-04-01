var input = document.querySelector("input");

//adding a new to do
input.addEventListener("change",function(){
    var task = this.value;
    var newli = document.createElement("li");
    
    var trash = document.createElement("span");
    trash.innerHTML = "<i class='far fa-trash-alt'></i>";
    trash.addEventListener("click",removeTask);

    newli.appendChild(trash);
    newli.insertAdjacentText("beforeend",task);
    newli.addEventListener("click",completedTask);

    var ul = document.querySelector("ul");
    ul.appendChild(newli);
    this.value= "";
});

//to add a line-through
function completedTask(){
    this.style.textDecoration = "line-through";
}
// ul.addEventListener("click",function(){
//     var li = document.querySelectorAll("li");
//     for(var i=0;i<li.length;i++){
//         li[i].addEventListener("click",function(){
//             this.style.textDecoration = "line-through";
//         });
//     }
        
// });

//remove elements by clicking on trash icon
function removeTask(){
    let li = this.parentNode;
    let parent = li.parentNode;
    li.classList.add("fade");
    setTimeout(function(){
        parent.removeChild(li);
    },200);
    // event.stopPropagation();
}
// ul.addEventListener("click",function(){
//     var trash = document.querySelectorAll("span");
//     for(var i=0;i<trash.length;i++)
//     {
//         trash[i].addEventListener("click",function(){
//             this.parentNode.classList.add("fade");
//             var li = this.parentNode;
//             var parent = li.parentNode;
            
//             setTimeout(function(){
//                 parent.removeChild(li);
//             },200);
//         });
//     }
// });

//to hide/display input 
var plus = document.querySelector(".fa-plus");
plus.addEventListener("click",function(){
    // input.classList.toggle("fade");
    if(input.style.display === "none")
        input.style.display = "inline-block";
    else
        input.style.display = "none";
})