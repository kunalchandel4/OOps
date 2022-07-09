const localData =JSON.parse(localStorage.getItem("student"))|| [];

const MainData =JSON.parse(localStorage.getItem("admin"))||[]
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    signup(username, password) {
        let validtion = false;
        validtion = this.validtionName(username) && this.validtionPassword(password)

        if (validtion) {
            this.username = username;
            this.password = password;
           
           
            console.log("user successfully signup")
        } else {
            console.log("arye phla data toh shi se bhr")
        }
    }




    validtionName(username) {
        return true;
    }
    validtionPassword(password) {
        return true
    }
    login(username, password) {
        if (username === this.username && password === this.password) {
            console.log("logged on")
        } else {
            console.log("failed")
        }
    }

}



class Student extends User {
    constructor(name, id) {
        super(name, id)
        this.numofAssignment = 0
    }
    submit() {
        this.numofAssignment++
    }
}
class Admin extends User {
    constructor(name, id) {
        super(name, id);
    }

    removeStudent(id) {

        students.filter((el) => {
            return el.id === id
        })

    }

}


// let s1 = new Student('pablo', 001);
// s1.signup('pablo123', "password")
// s1.login('pablo123', "password")
// s1.submit()

let n = new Admin()
// n.signup("soni","1234");

// n.removeStudent()
// console.log(students)
// console.log('n:', n)
// console.log('s1:', s1)


let num=1;

function admin(event){
         event.preventDefault()    
         let id='Masai'          
    let form=document.querySelector("#admindata");
    let name=form.name.value;
    let email=form.email.value;
    let password=form.password.value;
 let goes= new Admin(name,` ${id+num}`)
 goes.signup(email,password)
 num++
 localData.push(goes)
 localStorage.setItem("admin",JSON.stringify(localData))
 window.location.href="index.html"
//  console.log(a)
console.log(localData);
}

let numb=1;

function stuDent(event){
         event.preventDefault()    
         let id='Fw19_'          
    let form=document.querySelector("#students");
    let name=form.name.value;
    let email=form.email.value;
    let password=form.password.value;
 let a= new Student(name,` ${id+numb}`)
 a.signup(email,password)
 numb++
 MainData.push(a)
 localStorage.setItem("student",JSON.stringify(MainData))
 window.location.href="index.html"
//  console.log(a)
//  console.log(MainData);
}


// let kunal=JSON.parse(localStorage.getItem("abc"))||[] ;
// let obj={}
// obj.name="abc" 
// kunal.push(obj)
// localStorage.setItem("abc",JSON.stringify(kunal))
// obj.name="sonia"
// kunal.push(obj)
// localStorage.setItem("abc",JSON.stringify(kunal))

// // fucntion 
// // student filter assign ans email &&& passwrd  // match 
// //unmatch
// //0


// ans 1