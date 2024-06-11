//////////indexed array////////////
//object but with indexed objects so you call with index number not value
const students = [
    "Nora",
    "Ahmed",
    "Aya",
    "Sara"
];
//to display certain element
// console.log(students[3]);

//to modifiy existing element
students[1] = "Mona";
// console.log(students);

// to change to string
// console.log(students.toString());
// console.log(Array.isArray(students));
// console.log(typeof students);
// console.log(students instanceof Array);


//display last element
// console.log(students[students.length - 1]);

// const users = new Array("ahmed", "mohamed","Mona");
// console.log(users);

//////////associative array////////////
//js do not have associative array so it is an object
// i can call element with value not index number
const users = {};

users["ahmed"] = "ahmeduser";
users["mona"] = "monauser";
// console.log(users);
// console.log(users["ahmed"]);
// console.log(Array.isArray(users));
// console.log(typeof users);
// console.log(users instanceof Array);

//////////array hold objects////////////

const student = [
    30,
    {
        username: "Nora",
        age: 90,
        password: "nora"
    },
    {
        username: "Ahmed",
        age: 100,
        course: [
            "Arabic",
            "English"
        ],
        password: "ahmed"
    },
    {
        username: "Sara",
        age: 110,
        password: "sara"
    },
    {
        username: "Aya",
        age: 120,
        password: "aya"
    },
];
// console.log(student);


//////////chat application////////////
const chats = [
    {
        id: 1,
        type: "Group",
        group: {
            id: 13,
            groupName: "Sales Group"
        },
        messages : [
            {
                message: "Hello All",
            date: new Date(),
            },
            {
                message: "Hello Mo",
            date: new Date(),
            },
            {
                message: "Hello Dear",
            date: new Date(),
            }
        ],
    },
    {
        id: 2,
        type: "Contact",
        user: {
            id: 13,
            userName: "Sales Group"
        },
        messages : [
            {
                message: "Hello All",
            date: new Date(),
            },
            {
                message: "Hello Mo",
            date: new Date(),
            },
            {
                message: "Hello Dear",
            date: new Date(),
            }
        ]
    }
];

for (let i=0; i <= chats.length - 1; i++){
    if (chats[i].type === "Group"){
        console.log(chats[i]["Group"]);
    }
    else {
        console.log(chats[i]["Contact"]);
    }
}