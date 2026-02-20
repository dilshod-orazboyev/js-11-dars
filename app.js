// Array methods

const arr = [1, 2, 3, 4, 5, 6]

// 1. push - arrayga yangi element qoshadi (oxiriga)
arr.push(7)
console.log(arr);

// 2. pop - arrayning oxirgi elementlarini ochiradi
arr.pop()
console.log(arr);

// 3. unshift - arrayga element qoshadi (boshiga)
arr.unshift(0)
console.log(arr);

// 4. shift - arraydan element ochiradi (boshidan)
arr.shift()
console.log(arr);

// 5. concat - ikki arrrayni birlashtirib, yangi array hosil qiladi
const arr2 = [7, 8, 9, 10]
const newArr = arr.concat(arr2)

// 6. slice - qirqish, nusxalash
const sliceArr = arr.slice(2, 5);
console.log(sliceArr);

// 7. splice - arrayning malum elemntlarini index boyicha ozgartirish
 arr.splice(1, 3, 9, 10)
console.log(arrr, 'test');

// 8. delete - index boyicha ochirish
delete arr[1]
console.log(arr);

// 9. join - qoshish
const str  = ['A', 'B', 'C']
console.log(str.join(''));

// reverse - arrayni teskari ogirish
console.log(arr.reverse());
console.log(arr.join(''));




