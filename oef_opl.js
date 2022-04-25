async function notifyCustomer(){
try{
  const customer = await getCustomer(1);
  if (customer.isGold){
    const books = await getTopBooks();
    console.log('Top books: ', books);
    const mess = await sendEmail();
    console.log(mess);
  }

}
catch(err){
    console.log('Error: ', err.message);
  }
}

notifyCustomer();

  function getCustomer(id) {
    return new Promise((resolve,reject)=> {
       setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'JouwVoornaam JouwFamilienaam', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);  
    })
   
  }
  
  function getTopBooks() {
    return new Promise((resolve,reject)=> {
    setTimeout(() => {
      resolve(['book1', 'book2']);
    }, 4000);
  })
}
  
  function sendEmail(email, books) {
    return new Promise((resolve,reject)=> {
    setTimeout(() => {
      resolve('email sent');
    }, 4000);
  });
}