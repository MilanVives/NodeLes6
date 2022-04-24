const p = new Promise((resolve,reject) => {
    setTimeout(()=>{
    //resolve(1);
    reject(new Error('message'));
    },2000);
});

//promise consumeren

p
.then(result => console.log('Result', result))
.catch(err => console.log('Error', err.message));