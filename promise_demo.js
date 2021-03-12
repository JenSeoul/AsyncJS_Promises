const p = new Promise((res,rej) => {
    // Kick off some async work 
    // ...
    setTimeout(()=>{
        // res(1) // pending=> resolved or fulfilled 
        rej(new Error('message'))// pending => rejected
    },2000)
    // res(1)
    // rej(new Error('message'))
});

p
.then(result => console.log('result',result))
.catch(err => console.log('Error', err.message))

// Replacing callbacks with promises 
function getUser(id){
    return new Promise((resolve, reject)=>{
        // Kick off some async ope
            setTimeout(()=>{
                console.log('Reading a user from DB');
                resolve({id: id, gitHubUsername: 'ddd'})
            },2000);
    })
}

function getRepositories(username){
    return new Promise((res,rej)=>{
        // Kick off some async work 
        setTimeout(()=>{
            console.log('Getting the repositories based on user name');
            res({username, gitrepository: 'Repository'});
        },2000);
    })
}
function getCommites(repository){
    return new Promise((res,rej)=> {
         // Kick off some async work 
         setTimeout(()=>{
            console.log('Reading commits from repositories')
            res({repository, commits:'commits'})
         },2000)
    });
}
// How to consume promises 
