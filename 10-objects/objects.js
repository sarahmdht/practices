const admin = {
    id: 1,
    name: "Adam",
    role: "developer",
    welcomeNote : function(today) {
        return "Current User is: " + this.name + " - Current Date: " + today;
    },
    
};

let Current = new Date();
console.log(admin.welcomeNote(Current));