let button=document.getElementById('submit');
let email=document.getElementById('email');
let pass=document.getElementById('password');
let msg=document.getElementById('msg');



button.addEventListener('click',()=>{
    e1=email.value;
    p1=pass.value;
    console.log(e1);
    checkquerry();
});

function checkquerry(){
    
    if(e1!='' && p1!=''){
        console.log("filled");
        if(e1=="Admin@gmail.com" && p1=="admin@123"){
             window.location.href="admin.html";

        }
        else{
            msg.innerText="incorrect id and pass";
            msg.style.color="red";
        }
    }
    else{
        
    }
}