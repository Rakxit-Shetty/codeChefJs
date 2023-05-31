//Number Mirror

const readline=require('readline');
const rl01=readline.createInterface({input:process.stdin,output:process.stdout})

rl01.on('line',(line)=>{
  console.log(line)
})

//Good Turn

const readline=require('readline');
const rl02=readline.createInterface(process.stdin,process.stdout);

let lines=[];

rl02.on('line',(input)=>{
    lines.push(input);
    
})
rl02.on('close',()=>{
    lines.splice(0,1);
    // console.log(lines)
    let res =lines.map((ele)=>ele.split("").filter((ele)=>ele!=" ").reduce((acu,cur)=>Number(acu)+Number(cur),0))
 let final=res.map((ele)=>ele>6 ? "YES": "NO")
 final.forEach((ele)=>console.log(ele))
  
})