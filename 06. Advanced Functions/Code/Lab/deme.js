function execute(func, text) {
    const str = func();
    console.log(str + text);
}

const myFunc = () => 'hello ';
const otherFunc = () => 'how are you ';
execute(myFunc, 'world!');
execute(otherFunc, 'world!');