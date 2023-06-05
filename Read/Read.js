//read 2 line by skiping 1
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

// read 3 line by skiping 1

// let skip=-1;
// let ar=[];
// let line=[];
// let thr=0;

// rl.on('line',(read)=>{
//     skip++;
    
//     if(skip>0){
        
//         ar.push(read)
        
//         if(thr===2){
//           line.push(ar)
//           ar=[];
//           thr=-1;
//         }
        
//         thr++;
//         }
        
    
// })



// //READ 
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