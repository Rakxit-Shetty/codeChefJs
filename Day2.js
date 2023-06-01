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


//Saving Taxes

const readline=require('readline');
const rl02=readline.createInterface(process.stdin,process.stdout);

let line1=[]

rl02.on('line',(read)=>{
    line1.push(read);
})

rl02.on('close',()=>{
    line.splice(0,1);
    
    let res=line.map((ele)=>ele.split(" "));
    res.forEach((ele)=>console.log(Number(ele[0])-Number(ele[1])))
})

//Wordle

const readline=require('readline');
const rl03=readline.createInterface(process.stdin,process.stdout);

let line3=[];
let st=[];
let count=-1;

rl03.on('line',(read)=>{
   count++;
    if(count>0){
    
    st.push(read);
    if(count%2==0){
        line3.push(st);
        st=[];
    }
    }
})

rl03.on('close',()=>{
    
    let res=line3.map((str)=>{
         let fin="";
        for(let i=0;i<str[0].length;i++){
           
            str[0][i]==str[1][i] ? fin+="G" :fin+="B"
        }
        return fin;
    })
    
    res.forEach((ele)=>console.log(ele));
})

//Water Consumption
const readline=require('readline');
const rl=readline.createInterface(process.stdin,process.stdout);

let count1=-1;
let line4=[];
rl04.on('line',(read)=>{
    count1++;
    if(count1>0){
        line4.push(read);
    }
})

rl04.on('close',()=>{
    line4.forEach((ele)=>{
        if(Number(ele)>=2000){
            console.log("YES")
        }else{
            console.log("NO")
        }
    })
})