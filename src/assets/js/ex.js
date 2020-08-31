//Main function to add task
function addtask(){
    
    var item=document.getElementById("item");              //no of task in the todo list
    var task=document.getElementById("task").value;        //input from user (input field)
    var taskArr=document.getElementById("taskArr").value;  //task values
    var comb="";
    var comb1="";
    item.value++;

    if(taskArr == ""){ 
        comb1=task+","+item.value+"@";  
        document.getElementById("taskArr").value=comb1;
    }else{
        comb1=task+","+item.value+"@";
        comb=taskArr+comb1;
        document.getElementById("taskArr").value=comb;
    }

    createDivision(task,item.value);
    document.getElementById("task").value=" ";
};

//Function to delete task
function deletetask(task,taskNitem,rowId){ 

    alert("Are you sure to delete "+task+"?");  
    var row=document.getElementById(rowId);
    row.parentNode.removeChild(row);

    var taskArr=document.getElementById("taskArr").value;
    var array=taskArr.split("@");
    var index=array.indexOf(taskNitem);
    array.splice(index, 1);
    document.getElementById("taskArr").value=array;
};

//Function to append a task division
function createDivision(task,itemValue){
    
    var test=document.getElementById("test");        
    var div=document.createElement("div");
    div.id="row"+itemValue;
    div.classList.add("row","mt-1");
    div.style.height="80px";  

    var div2=document.createElement("div");
    div2.classList.add("col-3","d-none","col-md-3","d-md-block");

    var div3=document.createElement("div");
    div3.classList.add("col-md-6","border","d-flex","justify-content-center","align-items-center");

    var div4=document.createElement("div");
    div4.classList.add("col-3","d-none","col-md-3","d-md-block");

    var it=document.createElement("input");
    it.id="taskNitem";
    it.type="hidden";
    it.value=task+","+itemValue;
    div.appendChild(it);

    var deleteBtn=document.createElement("input");
    deleteBtn.type="submit";
    deleteBtn.classList.add("col-2","btn","btn-danger");
    deleteBtn.value="Delete";
    deleteBtn.onclick=function (){deletetask(task,it.value,div.id)};

    var div5=document.createElement("div");
    div5.classList.add("col-4","text-dark","h5");
    div5.id="addedtask";
    div5.innerHTML=itemValue+". "+task;

    var divv=document.createElement("div");
    divv.classList.add("col-5");

    test.appendChild(div);
    div3.appendChild(div5);
    div3.appendChild(divv);
    div.appendChild(div2);
    div.appendChild(div3);
    div3.appendChild(deleteBtn);
    div.appendChild(div4);
};

