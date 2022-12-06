const users = [
    {
        givenName: 'Sam',
        age: 21
    },
    {
        givenName: 'Cathy',
        age: 34
    },
    {
        givenName: 'Karen',
        age: 43
    }
    ];

console.log(`${users[0].givenName} ${users[1].givenName} ${users[2].givenName}`)
users.forEach(function(user){
user.givenName= "John Doe"
    console.log(user)

})


