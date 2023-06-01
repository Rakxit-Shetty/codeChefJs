//Add Two Numbers
const readline=require('readline');
const rl01=readline.createInterface(process.stdin,process.stdout);

let line=[]
rl01.on('line',(read)=>{
    line.push(read);
})

rl01.on('close',()=>{
    line.splice(0,1);
    
   let res= line.map((ele)=>ele.split(" ").reduce((acu,cur)=>Number(acu)+Number(cur),0));
   
  res.forEach((ele)=>console.log(ele))
   
})