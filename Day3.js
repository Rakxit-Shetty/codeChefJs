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