const Myproms = new Promise((resolve, reject) => {
    let flag = false;
    if (flag) {
        resolve("sucess")
    }
    else {
        reject("failed")
    }
})
Myproms.then((result) => console.log(result))
.catch((er) => console.log("error:", er))