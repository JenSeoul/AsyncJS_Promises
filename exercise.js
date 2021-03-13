
// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });
  
//   function getCustomer(id, callback) {
//     setTimeout(() => {
//       callback({ 
//         id: 1, 
//         name: 'Jen Everywhere', 
//         isGold: true, 
//         email: 'email' 
//       });
//     }, 4000);  
//   }
  
//   function getTopMovies(callback) {
//     setTimeout(() => {
//       callback(['movie1', 'movie2']);
//     }, 4000);
//   }
  
//   function sendEmail(email, movies, callback) {
//     setTimeout(() => {
//       callback();
//     }, 4000);
//   }


//   Async/await

async function sendTopMovies(id) {
    try{
    const customer = await getCustomer(id)
    console.log('Customer',customer)
     if(customer.isGold){
        const movies = await getTopMovies()
        console.log('Top Movies',movies)
        const confirmation = await sendEmail(customer.email, movies)
        console.log(confirmation)
        }
    }
    catch(e){
        console.log(e.message)
    }
}
sendTopMovies(1)


function getCustomer(id) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
          res({ 
            id: id, 
            name: 'Jen Everywhere', 
            isGold: true, 
            email: 'email' 
          });
        }, 4000);  
    })
  }
  
  function getTopMovies() {
      return new Promise((res,rej)=> {
          setTimeout(() => {
            res(['movie1', 'movie2']);
          }, 4000);
      })
  }
  
  function sendEmail(email,movies) {
      return new Promise((res,rej)=>{
          setTimeout(() => {
            res('Email sent....');
          }, 4000);
      })
  }
// const p1 = getCustomer(1)
//   .then(customer=>console.log('Customer:',customer))

// const p2 = getTopMovies()
//   .then(movies=> console.log('Top movies:',movies))
 
// const p3 = sendEmail()
//   .then(message=> console.log(message))

// Promise.all(p1,p2,p3)
//   .then(result=> console.log(result))
//   .catch(err => console.log(err.message))




