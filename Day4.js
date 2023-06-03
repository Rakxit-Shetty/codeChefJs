//Chef Plays Ludo

const readline=require('readline');
const rl=readline.createInterface(process.stdin,process.stdout);

let res=[]
let skip=-1;

rl.on('line',(read)=>{
    skip++;
    if(skip>0){
        res.push(Number(read));
    }
})

rl.on('close',()=>{
    
    res.forEach((ele)=>ele==6 ? console.log("YES"): console.log("NO"))
})

// //Easy Pronunciation
// const readline=require('readline');

// const rl=readline.createInterface(process.stdin,process.stdout);

// let nlythree=[];
// let all=[];
// let skip=-1;
// let thr=0;

// rl.on('line',(read)=>{
//     skip++;
//     if(skip>0){
//         nlythree.push(read);
//         thr++;
//         if(thr===2){
//             all.push(nlythree)
//             nlythree=[]
//             thr=0;
//         }
//     }
// })

// rl.on('close',()=>{
    
//     all.forEach((ele)=>{
        
//         if(Number(ele[0])<4){
            
//             console.log("YES");
            
//         }else{
            
//             let count=0;
            
//             for(elem of [...ele[1]]){
                
//                 if(elem!='a' && elem!='e' && elem!='i' && elem!='o' && elem!='u'){
//                 count++;
//               if(count>=4) break;
//                 }else{
//                     count=0;
//                 }
//             }
//              count>=4 ? console.log("NO"): console.log("YES") 
            
//         }
//     })
    
// })