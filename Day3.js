//Biryani classes

const readline=require('readline');
const rl=readline.createInterface(process.stdin,process.stdout);

let skipLine=-1;
let line =[];

rl.on('line',(read)=>{
    skipLine++;
    if(skipLine>0){
        line.push(read.split(" "))
    }
    
})

rl.on('close',()=>{
    line.forEach((ele)=>console.log(Number(ele[0])*Number(ele[1])))
})

//The Block Game

const readline=require('readline');
const rl=readline.createInterface(process.stdin,process.stdout);

let skip1=-1;
let arr=[]

rl.on('line',(read)=>{
    skip1++;
    if(skip1>0){
        arr.push(read.split(""));
    }
})

rl.on('close',()=>{
    
    arr.forEach((ele)=> {
        
        ele.join("")===ele.reverse().join("") ?
     console.log("wins") : console.log("loses") 
        
    })
    
})