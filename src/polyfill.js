

new Promise(() => { })

new Set([])

new Map();

let x = Symbol();

const user = {
    firstName: "Sebastian",
    lastName: "McKenzie",
    getFullName: () => {
        // whoops! `this` doesn't actually reference `user` here
        return this.firstName + " " + this.lastName;
    },
    // use the method shorthand in objects
    getFullName2() {
        return this.firstName + " " + this.lastName;
    }
};

module.exports = () => { }