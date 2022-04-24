console.log('1. Before');
const user = getuser(1, function(user){
    console.log('User', user);
});
//console.log('User', user);
console.log('3. After');

function getuser(id, callback) {
setTimeout(()=> {
    console.log('2. Reading user from DB...');
    callback({id: id, gitHubUsername: 'MilanVives'});
},2000);
}