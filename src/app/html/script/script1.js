function data(){
    const userName=document.getElementById("user").value;
    var passWord=document.getElementById("pass").value;
    if(userName==='' && passWord==='') {
    alert('Please Enter Credentials')
    }
    else if(userName==='' && passWord!==''){
        alert('Please Enter User name')
    }
    else if(userName!=='' && passWord===''){
    alert('Please Enter Password')
    }
    else if(userName==='Sabrudeen' && passWord==='Sabru@12'){
        alert('Sucess')
    }
    else if(userName!=='Sabrudeen' || passWord!=='Sabru@12'){
        alert('Invalid Credentials')
    }
}




