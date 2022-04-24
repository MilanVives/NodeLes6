console.log('1. Before');
async function displayCommits(){
    try{
        const user = await getuser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log('Commits ',commits);
    }
    catch(err){
        console.log('Error ', err);
    }
}
displayCommits();
console.log('3. After');

function getuser(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log('2. Reading user from DB...');
            resolve({id: id, gitHubUsername: 'MilanVives'});
        },2000);
    });
}

function getRepositories(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log('4. Calling Github API...');
            resolve(['repo1','repo2','repo3']);
        },2000);
    });
}

function getCommits(repo){
    return new Promise((resolve,reject)=>{        
    setTimeout(()=> {
            console.log('5. Calling Github API...');
            resolve(['commit1','commit2','commit3']);
        },2000);
    });
}

