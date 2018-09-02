


class Test {

    static a = 5;

    constructor(name) {
        this.name = name;
    }

    logger() {
        console.log("Hello", this.name);
    }
}

class T2 extends Test {

}

module.exports = T2;
