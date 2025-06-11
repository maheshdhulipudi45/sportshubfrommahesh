const getuser =(callback)=>{
    setTimeout(()=>{
        console.log("mahesh45")
        callback()
   

    },2000)
}
const getuserdata =(callback)=>{
    setTimeout(()=>{
        console.log("maheshdhulipudi45")
        callback()
   

    },2000)
}

const getusernumber =(callback)=>{
    setTimeout(()=>{
        console.log("7658956116")
        callback()
   

    },2000)
}


getuser(()=>{
    getuserdata(()=>{
        getusernumber(()=>{
    console.log("sucess")
        })
    })
})

// setTimeout(()=>{
//     console.log("mahesh")
// }, 1000)

// let a=10
// console.log(a)