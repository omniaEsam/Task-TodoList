let $input= document.querySelector(".inputText");
let $btn  = document.querySelector(".btn");
let listDiv=document.querySelector(".todoList");
let $items=document.querySelector(".items");
let $deletbtn=document.querySelector(".deletbtn");
$btn.addEventListener("click",function(e){
    e.preventDefault();
    if($input==" "){
        alert("please Enter New Item");
    }
    else{
        addElement();
    }
});
function addElement(){
    let List=document.createElement("li");
    let check=document.createElement("input");
    let label=document.createElement("label");
    check.type="checkbox";
    label.innerHTML=$input.value;
    List.append(check,label ,$deletbtn);
    $items.appendChild(List);
    listDiv.appendChild($items);
    $deletbtn.style.display="block";
    List.classList.add("liststyle");
    check.style.cursor="pointer";
    $deletbtn.classList.add("btnstyle");
}
$deletbtn.addEventListener("click",function(e){
    e.preventDefault();

});
