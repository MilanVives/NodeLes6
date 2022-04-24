console.log('1. Before');
const user = getuser(1);
console.log('User', user);
console.log('3. After');

function getuser(id) {
setTimeout(()=> {
    console.log('2. Reading user from DB...');
    return ({id: id, gitHubUsername: 'MilanVives'});
},2000);
}




