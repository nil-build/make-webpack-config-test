//exponentiation-operator
let x = 10 ** 2;

x **= 3;

async function foo() {
    await bar();
}

async function* agf() {
    await 1;
    yield 2;
}
/./s
{
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
    let n = { x, y, ...z };
}
try {
    throw 0;
} catch {
    //doSomethingWhichDoesntCareAboutTheValueThrown();
}

class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
        return this.instanceProperty;
    };

    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function () {
        return Bork.staticProperty;
    };
}

@annotation
class MyClass { }

function annotation(target) {
    target.annotated = true;
}
{
    let a = do {
        if (x > 10) {
            'big';
        } else {
            'small';
        }
    };
}
obj:: func
// is equivalent to:
func.bind(obj)

:: obj.func
// is equivalent to:
obj.func.bind(obj)

obj:: func(val)
// is equivalent to:
func.call(obj, val)

:: obj.func(val)
// is equivalent to:
obj.func.call(obj, val)
{
    a ||= b;
    obj.a.b ||= c;

    a &&= b;
    obj.a.b &&= c;
}

{
    let foo = object.foo ?? "default";
}

let budget = 1_000_000_000_000;

{
    const obj = {
        foo: {
            bar: {
                baz: 42,
            },
        },
    };

    const baz = obj ?.foo ?.bar ?.baz; // 42

    const safe = obj ?.qux ?.baz; // undefined

    // Optional chaining and normal chaining can be intermixed
    obj ?.foo.bar ?.baz; // Only access `foo` if `obj` exists, and `baz` if
    // `bar` exists
}

function test(param = throw new Error('required!')) {
    const test = param === true || throw new Error('Falsey!');
}

Object.assign(a, b);
{
    function foo1(one: any, two: number, three?): string { }
}


bar.__proto__ = foo;

{
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
}

{
    var o = { a, b, c };
}
{
    var obj = {
        ["x" + foo]: "heh",
        ["y" + bar]: "noo",
        foo: "foo",
        bar: "bar"
    };
}
{
    let { x, y } = obj;

    let [a, b, ...rest] = arr;
}