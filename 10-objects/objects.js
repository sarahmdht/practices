// const admin = {
//     id: 1,
//     name: "Adam",
//     role: "developer",
//     welcomeNote : function(today) {
//         return "Current User is: " + this.name + " - Current Date: " + today;
//     },

// };

// let Current = new Date();
// console.log(admin.welcomeNote(Current));

//let sum; //sum = undefined
// sum = 1 // sum = number
// sum "adam" // sum = string

// let sum = new Number(); //type is object
// // sum = 1; // type became number
// console.log(typeof sum);

////////////////////////////////////////////////////////
/* ****** initialize ****** */
// const currentUser = new Object(); // type = object by defining type but takes time
// const currentUser = {id:1, username:"ahmed", loginUser: function() {console.log("user logged in");}}; // type = object by auto detecting

// // console.log(currentUser.id); // or 
// console.log(currentUser["id"]);

// currentUser.loginUser(); //invoke or call

// currentUser.email = "email@email.com"; // to add property to the object

////////////////////////////////////////////////////////
/* ****** modify and delete ****** */
// const currentUser = {
//     id:1,
//      username:"ahmed"
// };

// const copiedUser = currentUser; // to modify property
// copiedUser.id = 2;

// delete currentUser.username; // to delete property

// console.log(currentUser); // we find the object value changed

///////////////////////////////////////////////////////
/* ***** nested object ****** */
// const users = {
//     id:1,
//     currentUser: {
//         id:2,
//          username:"ahmed"
//     },
// age:100
// };

// console.log(users);
// console.log(users.currentUser.id); // or
// console.log(users["currentUser"]["id"]);

////////////////////////////////////////////////////////
/* ****** methods ******* */
// const admin = {
//     id: 1,
//     name: "Adam",
//     role: "developer",
//     welcomeNote: function (today) {
//         return "Current User is: " + this.name + " - Current Date: " + today;
//     },

// };
// let currentDate = new Date(); //set parameter value
// let displayText = admin.welcomeNote(currentDate);// invoke
// console.log(displayText);

//////////////////////////////////////////////////////////
/* ****** constructor ******** */
// const admin = {
//     id: 1,
//     name: "Adam",
//     role: "developer",
//     welcomeNote : function(today) {
//         return "Current User is: " + this.name + " - Current Date: " + today;
//     },

// };
function User(idv, namev, usernamev, rolev) {
    this.id = idv;
    this.name = namev;
    this.username = usernamev;
    this.role = rolev;
}
const admin = new User(1, "adam", "smith", "developer");
const author = new User(2, "tom", "thomas", "author");

console.log(author);