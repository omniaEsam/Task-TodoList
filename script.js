let $input= document.querySelector(".inputText");
let $btn  = document.querySelector(".btn");
let listDiv=document.querySelector(".todoList");
let $items=document.querySelector(".items");

$btn.addEventListener("click",function(e){
    e.preventDefault();
    if($input.value==" "){
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
    let $deletbtn=document.createElement("button");
    $deletbtn.innerHTML='<a href="#"><i class="fa fa-trash"></i></a>';
    check.type="checkbox";
    label.innerHTML=$input.value;
    List.append(check,label ,$deletbtn);
    $items.appendChild(List);
    listDiv.appendChild($items);
    $deletbtn.style.display="block";
    List.classList.add("liststyle");
    $input.value="";
    check.style.cursor="pointer";
    $deletbtn.classList.add("btnstyle");
    $deletbtn.addEventListener("click",function(e){
        e.preventDefault();
        List.style.display="none";
    });
}

