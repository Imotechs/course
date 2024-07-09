
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

 function ifControl(num){
    if(num===1){
        console.log('Good Morning')
    } else if(num ===2){
        console.log('Good Afternoon')
    } else if(num ===3){
        console.log('Good evening')
    }
    
    else{
        console.log('Good Night!')
    }
 }


ifControl(2)

const whileControl =(num)=>{
 while(num<5){
    console.log(num)
    if(num==3){
        break;
    }
    num++;
 }
 console.log('out of loop ')
}

whileControl(1)

function numbersIdentifier(){
    let num =0
    while(num<=10){
     if(num%2===0){
        console.log('even Number',num)
     } else{
        console.log('old Number',num)
     }
     num++
    }

}

//numbersIdentifier()

let namesArray =['sam','josh','vera','sunny']
//console.log(namesArray[0])
//console.log(namesArray[namesArray.length-1]) //take note

for(let i=0;i<namesArray.length;i++){
    console.log(namesArray[i],i)
}

//console.log(namesArray.pop())
// namesArray.pop()
// namesArray.shift()
namesArray.unshift('javis')
console.log(namesArray)

var book ={
    names:{firtname:'Last Days at forcados',lastname:'jamb'},
    author:'Samuel Tobe',
    year:2024
}

console.log(book.names)