const getuserdata=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("getdata");
        },2000)
    })
}
const validateuserdata=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("validatedata");
        },2000)
    })
}
const updatedata=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("updatedata");
        },2000)
    })
}
getuserdata().then((result)=> {console.log(result),validateuserdata()})
validateuserdata().then((result)=>{console.log(result),updatedata})
             updatedata().then((result)=>console.log(result),updatedata())
             .then(()=>console.log("task completed"))
             .catch((er)=>console.log(er));