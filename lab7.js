let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    // Using an arrow function
    showListArrow: function() {
        this.students.forEach(student => console.log(this.title + ": " + student));
    },

    // Using bind
    showListBind: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    },

    // Using a variable to hold `this` (self pattern)
    showListSelf: function() {
        let self = this;
        this.students.forEach(function(student) {
            console.log(self.title + ": " + student);
        });
    },

    // Using forEach second argument
    showListForEachArg: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }, this);
    },

    // Using call
    showListCall: function() {
        this.students.forEach(student => {
            this.printTitle.call(this, student);
        });
    },

    // Using apply
    showListApply: function() {
        this.students.forEach(student => {
            this.printTitle.apply(this, [student]);
        });
    },

    // Direct object reference within an arrow function
    showListDirect: () => {
        group.students.forEach(student => console.log(group.title + ": " + student));
    },

    // Helper function for call and apply
    printTitle: function(student) {
        console.log(this.title + ": " + student);
    }
};

console.log("Arrow Function:");
group.showListArrow();

console.log("Bind:");
group.showListBind();

console.log("Self Pattern:");
group.showListSelf();

console.log("ForEach Second Argument:");
group.showListForEachArg();

console.log("Call:");
group.showListCall();

console.log("Apply:");
group.showListApply();

console.log("Direct Object Reference:");
group.showListDirect();
