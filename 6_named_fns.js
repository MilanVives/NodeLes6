console.log('1. Before');
const user = getuser(1, function(user){
    //console.log('User', user);
    getRepositories(user.gitHubUsername, (repos)=>{
        //console.log('Repos: ',repos);
        getCommits(repos[0], displayCommits)
    });
});
console.log('3. After');

function getuser(id, callback) {
setTimeout(()=> {
    console.log('2. Reading user from DB...');
    callback({id: id, gitHubUsername: 'MilanVives'});
},2000);
}

function getRepositories(username, callback){
    setTimeout(()=> {
        console.log('4. Calling Github API...');
        callback(['repo1','repo2','repo3']);
    },2000);
}

function getCommits(repo, callback){
            setTimeout(()=> {
            console.log('5. Calling Github API...');
            callback(['commit1','commit2','commit3']);
        },2000);
}
//named functions

function displayCommits(commits){
    console.log('Commits: ', commits);
}



//Synchroon
/*
const user = getUser(1);
const repos = getRepositories(user.gitHubUsername);
const commits = getCommits(repos[0]);
*/