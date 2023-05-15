//Good Turn

let res=[
[1,4],
[3,4],
[4,2],
[2,6]
    ]
    
    const see=(res)=>{
       return res.map((ele)=>{ 
       return ele.toString().split(",")
       .reduce((acc,cur)=>Number(acc)+Number(cur),0)>6 ? "YES" :"NO"
        })
    }
console.log("Welcome to Programiz!",see(res));