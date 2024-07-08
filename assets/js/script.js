
console.log('Hello Class!!')
var username = 'samuel Oge'
var username = 'John'
console.log(username)
console.log('hello Samuel')
console.log(`hello ${username}`)

let myname =  "name is joy"
console.log(myname)

const firstName = 'Joy'
console.log(firstName)

const num = 2.123
console.log(12/num)
let knum;
console.log(knum)

let person = {
    name:'Samuel',
    age:23,
    DOB:'23-06-1925',
    profile_img :'assets/images/bulb.jpg'
}

console.log(person.age)

// if(firstName==='Joy'){
//     const firstName = 'Blessing'
// console.log(firstName)
// }




function addNumbers(num1,num2){
    const total = num1+num2
    console.log(total)
    return total
}

const multiplyNumbers =(a,b)=>{
    return a*b
}

//console.log('muitiplying numbers',multiplyNumbers(2,3))

function openForm(){
    const form = document.getElementById('form-inputs')
    form.style.display ='block';
    form.style.backgroundColor ='brown'
}