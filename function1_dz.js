console.log('Задание 1');
const min = (a, b) => {
    if (typeof (a, b) == 'number') {
        console.log(Math.min(a, b))
    }
    if (typeof (a, b) != 'number') {
        const values = Object.values(a);
        console.log(Math.min(...values));
    }
}

min(1, 2)
min([10, 2])
min({ a: 1, b: 2 })


alert('Задание 2')
let a = prompt('Общ количество ?')
let b = prompt('Брак?')
const number = () => (100 * b) / a
console.log(number() + "% брак");