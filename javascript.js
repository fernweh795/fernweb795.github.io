function showEmail() {
    document.getElementById("fake").innerHTML = "email:log@proton.me";
}


function calculate(){
let xValue= document.getElementById("x").value ;
const y = 6;
let sum = Number(xValue) + y;

document.getElementById("demo").innerHTML = "The sum is " + sum;
}

let hour=new Date().getHours();
if(hour<12){
document.getElementById("greetings").innerHTML="Good morning!";
document.getElementById("greetings").style.color="#dcd927";
}
else if(hour<18){
document.getElementById("greetings").innerHTML="Good afternoon!";
document.getElementById("greetings").style.color="#de9e13";}
else{
    document.getElementById("greetings").innerHTML="Good night!";
    document.getElementById("greetings").style.color="#090088";}





function addArticle(inputId,listId){
    const inputField=document.getElementById(inputId);
    const articleList=document.getElementById(listId);

    const titleText=inputField.value;

    if(titleText != ""){
        const li=document.createElement('li');
        li.textContent=titleText;
        articleList.appendChild(li);

        inputField.value="";
    }
    else{
        alert("Title can't be blank.");
    }}