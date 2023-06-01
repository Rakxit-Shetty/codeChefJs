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

//Masterchef finals

const readline=require('readline');
const rl05=readline.createInterface(process.stdin,process.stdout);

let count2=-1;
let line5=[];
rl05.on('line',(read)=>{
    count2++;
    if(count2>0){
        line4.push(read);
    }
})

rl05.on('close',()=>{
    line5.forEach((ele)=>{
        if(Number(ele)<=10){
            console.log("YES")
        }else{
            console.log("NO")
        }
    })
})

//Mario and the Broken String

const readline=require('readline');
const rl06=readline.createInterface(process.stdin,process.stdout);

let skip=-1;
let stri=[]
rl06.on('line',(read)=>{
    skip++;
    if(skip>0){
        if(skip%2==0){
            stri.push(read)
        }
    }
})

rl06.on('close',()=>{
    //console.log(stri);
    let flg="YES";
    stri.forEach((ele)=>{
        [...ele].slice(ele.length/2).join("")== [...ele].slice(0,ele.length/2).join("") ? console.log("YES"):console.log("NO")
        
    })
    
})

//Fitness
const readline=require('readline');
const rl07=readline.createInterface(process.stdin,process.stdout);

let skip1=-1;
let day=[]
rl07.on('line',(read)=>{
    skip1++;
    if(skip1>0){
       day.push(read)
    }
})

rl07.on('close',()=>{
   day.forEach((ele)=>console.log(Number(ele)*10));
   
    
})

//Nearest Court

const readline=require('readline');
const rl08=readline.createInterface(process.stdin,process.stdout);

let skipline=-1;
let arry=[];

rl08.on('line',(read)=>{
    skipline++;
    if(skipline>0){
       arry.push(read.split(" "))
    }
})

rl08.on('close',()=>{
    let res= arry.map((ele)=>{
       return Math.min(...[Math.abs(Number(ele[0])-Number(ele[1])),Math.abs(Number(ele[1])-Number(ele[0]))])
    })
    res.forEach((ele)=>console.log(Math.ceil(Number(ele/2))))
   })

   //Buy 2 Get 1 Free
   const readline=require('readline');
const readl=readline.createInterface(process.stdin,process.stdout);

arr=[]
lskip=-1;

readl.on('line',(read)=>{
 lskip++;
 if(lskip>0){
     arr.push(read.split(" "))
 }
})

readl.on('close',()=>{
    
    arr.forEach((ele)=>{
        let sum=0, cal=0;
        
        for(i=0;i<ele[0];i++){
            
            if(cal==2){
                cal=0
            }
            else{
                cal++;
                sum+=Number(ele[1])
            }
        }
        
        console.log(sum)
    })
        
})