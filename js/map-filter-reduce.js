const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
const threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages)


const emailAddress = users.map(user=>user.email)
console.log(emailAddress)


const totalYears = users.yearsOfExperience.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
const averageYears=totalYears/user.length;
console.log(averageYears)


const longestEmail = users.email.reduce((accumulator, currentValue) => {
    return accumulator.length > currentValue.length ? accumulator : currentValue;
}, '');
console.log(longestEmail)


const names = users.reduce((accumulator, currentValue) => {
    return accumulator + ', ' + currentValue.name;
}, 'Your instructors are: ');
console.log(names);


const languages = users.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue.languages);
}, []);
console.log(languages); // ['clojure', 'javascript', 'java', 'scala', 'php', 'javascript', 'bash', 'java', 'php', 'sql', 'html', 'css', 'javascript', 'php']
const uniqueLanguages = [...new Set(languages)];
console.log(uniqueLanguages); // ['clojure', 'javascript', 'java', 'scala', 'php', 'bash', 'sql', 'html', 'css']


