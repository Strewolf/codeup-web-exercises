// Create a function, returnPetsWithNoFish, that takes in a array of pet objects and returns an array of pet objects with no pets of type 'Fish'.

    const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Beans',
        type: 'Dog',
        age: 3
    },
    {
        name: 'Mr. Salmon',
        type: 'Fish',
        age: 1
    }
];

function returnPetWithNoFish(pets){
   let output=[]
    pets.forEach(pet => {
        if(pet.type!=="fish"){
            output.push(pet)
        }
    })
    return output
}

console.log(returnPetWithNoFish(pets))



// returnPetsWithNoFish(pets) // returns...
//
//     [
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//         {
//             name: 'Bubba',
//             type: 'Dog',
//             age: 5
//         },
//         {
//             name: 'Beans',
//             type: 'Dog',
//             age: 3
//         }
//     ]









