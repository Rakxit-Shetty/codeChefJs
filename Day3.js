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

// read 3 input by skiping 1
//Uncle Johny


const readline=require('readline');
const rl=readline.createInterface(process.stdin,process.stdout);

let skip=-1;
let ar=[];
let line=[];
let thr=0;

rl.on('line',(read)=>{
    skip++;
    
    if(skip>0){
        
        ar.push(read)
        
        if(thr===2){
          line.push(ar)
          ar=[];
          thr=-1;
        }
        
        thr++;
        }
        
    
})

rl.on('close',()=>{
    // console.log(line);
    line.forEach((ele)=>console.log([...ele[1]].filter((e)=>e!=" ").at(Number(ele[2])-1))) 
})


