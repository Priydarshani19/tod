let inputs=document.getElementById("inp");
let text=document.querySelector(".text");
/*add task*/ 
function add(){
    if(inputs.value == ""){
        alert("please enter task")
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";

        /**Delete task */
        newEle.querySelector("i").addEventListener("click",remove);

        function remove(){
            newEle.remove()
        }

    }
}