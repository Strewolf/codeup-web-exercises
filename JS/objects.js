
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
let person={
    firstname:'Horace',
        lastname:'Smith'
    }
    console.log(person.firstname)
    console.log(person.lastname)
    person.sayHello = "Hello from"
    console.log(`${person.sayHello} ${person.firstname} ${person.lastname}`)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];
shoppers.forEach(function(shopper){
    let discountAmount= shopper.amount*.12
    let afterDiscount= shopper.amount - discountAmount
    if (shopper.amount>200){
        console.log(shopper.name)
        console.log(`your amount before discount is $ ${shopper.amount}`)
        console.log(`Your discount will be 12% for your purchase`)
        console.log(`The discount amount will be $ ${discountAmount}`)
        console.log(`Your total purchase amount will be $ ${afterDiscount} `)
    } else {
        console.log(shopper.name)
        console.log(`Your amount will be $ ${shopper.amount}`)
        console.log(`You will not have a discount with your purchase`)
        console.log(`Your total amount will be $ ${shopper.amount}`)
    }
    })
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
let books = [{

        title: "Akina Speedstar",
       author: {
           firstname: "Xavier ",
           lastname: "wulf"
       }},
        {
            title: "The midnight sun",
            author:{
                firstname:"Damien",
                lastname:"Clark"
            }
        },
        {
            title:"Kingdom of Babylon",
            author: {
                firstname: "Gerard",
                lastname: "Lucious"
            }
        },
        {
            title:"Over the moon",
            author:{
                firstname:"stephanie",
                lastname:"applebottom"
            }
        },
        {
            title:"In the abyss",
            author:{
                firstname:"Mike",
                lastname:"Pendletin"
        }},


    ]
books.forEach(function(book,i) {
    console.log(`Book# ${books.indexOf(book)+1}`)
    console.log(`Title: ${book.title}`)
    console.log(`Author: ${book.author.firstname} ${book.author.lastname}`)

})
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
/**let createBook= function(title,Firstname,Lastname) {
    let book={}
    return [
            {
                books.title = title,
                books.author = {
            author.firstname = Firstname,
                book.author.lastname = Lastname
        }
    }
        ]
    }


*/
