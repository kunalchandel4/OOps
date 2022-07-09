let student= JSON.parse(localStorage.getItem("student"))||[]
let admin = JSON.parse(localStorage.getItem('admin'))||[]


class user{
  
    login(name,password){
        let a=student.filter(function(el){
            return el.username===name && el.password===password
        })
        console.log(a)
        if(a.length>0){
            alert ("sucess")
            window.location.href="student.html"
            console.log("agye aap")
        }else {
            let b= admin.filter((el)=>{
                return el.username===name && el.password===password
            })
            if(b.length>0){
                
                alert("admin sawgat hai")
                window.location.href="admin.html"
            }else{
                alert("dhyan se dekhle bai")
            }
                
            
            console.log(b)
        }
        
    }
}


function sonia(event){
    event.preventDefault()
  
let form=document.querySelector("#form")
let name=form.email.value;
let passwrd=form.password.value;
let a=new user()
a.login(name,passwrd)
console.log(name,passwrd)

}