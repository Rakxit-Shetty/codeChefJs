//ATM Machine

const readline=require('readline');
const rl=readline.createInterface(process.stdin,process.stdout);

let skip=-1;
let line=0;
let arr=[];
let fullarr=[];

rl.on('line',(read)=>{
    skip++;
    if(skip>0){
        arr.push(read);
        line++;
        if(line==2){
            fullarr.push(arr);
            arr=[];
            line=0;
        }
    }
})

rl.on('close',()=>{
    // console.log(fullarr);
    
    fullarr.forEach((ele)=>{
    let unit= Number(ele[0].split(" ")[1]);
    // console.log(unit)
    let per=ele[1].split(" ");
    let chr=""
    per.forEach((elem)=>{
        
        if(unit>=Number(elem)){
            chr+="1";
            unit-=Number(elem);
        }else{
            chr+="0"
        }
        
        
    })
    console.log(chr)
 
 
    })
})





