// const p = new Promise((res,rej) => {
//     // Kick off some async work 
//     // ...
//     setTimeout(()=>{
//         // res(1) // pending=> resolved or fulfilled 
//         // rej(new Error('message'))// pending => rejected
//     },2000)
//     // res(1)
//     // rej(new Error('message'))
// });

// p
// .then(result => console.log('result',result))
// .catch(err => console.log('Error', err.message))

// // Replacing callbacks with promises 
function getUser(id){
    return new Promise((resolve, reject)=>{
        // Kick off some async ope
            setTimeout(()=>{
                console.log('Reading a user from DB');
                resolve({id: id, gitHubUsername: 'ddd'})
                // reject(new Error('message'))
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
            res(['repo1', 'repo2'])
         },2000)
    });
}
// How to consume promises 
// getUser(1)
//     .then(user=>getRepositories(user.gitHubUsername))
//     .then(repos=>getCommites(repos[0]))
//     .then(commit=>console.log(commit))
//     .catch(err=> console.log('Error', err.message))

// Try catch block and await/async
async function displayCommits(){
try {const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commit = await getCommites(repos[0]);
    console.log(commit)
    }
catch(err){
    console.log('Errpr', err.message)
    }
}
displayCommits()