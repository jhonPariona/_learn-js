function pruebaPromesa() {
    return new Promise(function (resolve,reject){
        setTimeout(() => {
            console.log("Haciendo algo en un tiempo...");
            let number = Math.random()
            if (number < 0.7){
                resolve(number)
            }else {
                reject(number)
            }
        }, 2000);
    })
}

pruebaPromesa()
.then((data)=>{console.log("Correcto", data)})
.catch(err => {console.log("error",err)})
