// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
//-------------------------------------------------
// const numbers = {
// keyin1: 1,
// keyin2: 2,
// keyin3: 3,
// keyin4: 4,
// keyin5: 5,
// keyin6: 6,
// keyin7: 7,
// }

// for ( const i in numbers) {
//     if (numbers[i] >= 3)
//     {
//         console.log(numbers[i]); 
//     }
// }
//-------------------------------------------------










// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
//-------------------------------------------------
// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//     {
//         userId: 10,
//         userName: "Alex",
//         text: "lorem ipsum",
//         rating: {
//                     likes: 10,
//                     dislikes: 2, // вывести это число
//                 },
//     },
//     {
//         userId: 5, // вывести это число
//         userName: "Jane",
//         text: "lorem ipsum 2", // вывести этот текст
//         rating: {
//                     likes: 3,
//                     dislikes: 1,
//                 },
//     },
//     ],
// };


// for (const key in post)
// {
//     if (post[key] === "John" || post[key] === 2 || post[key] === 5 || post[key] === "lorem ipsum 2" )
//     {
//         console.log(post[key]);
//     }
        
//     let arrpostkey = post[key];
    
//     for (let i = 0; i < arrpostkey.length; i++) 
//     {
//         let postKeyIn1 = Object.values(arrpostkey[i]);
        
//         for (let j = 0; j < postKeyIn1.length; j++) 
//         {
//             let postKeyIn2 = postKeyIn1[j];
//             if (postKeyIn2 === 'John' || postKeyIn2 === 2 || postKeyIn2 === 5 || postKeyIn1[j] === 'lorem ipsum 2' )
//             {
//                 console.log(postKeyIn2);
//             }

//             for (let e in postKeyIn2) 
//             {
//                 let postKeyIn3 = postKeyIn2[e];
//                 if (postKeyIn3 === 'John' || postKeyIn3 === 2 || postKeyIn3 === 5 || postKeyIn3 === 'lorem ipsum 2' )
//                 {
//                     console.log(postKeyIn3);
//                 }
//             }
//         }
//     }
// }
//-------------------------------------------------









// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
//-------------------------------------------------
// const products = 
// [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// products.forEach(prod => prod.price = prod.price * 0.85)
// {
//     console.log(products);
// }
//-------------------------------------------------










// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
//-------------------------------------------------
// const products = [
// {
//     id: 3,
//     price: 127,
//     photos: [
//                 "1.jpg",
//                 "2.jpg",
//             ],
// },
// {
//     id: 5,
//     price: 499,
//     photos: [],
// },
// {
//     id: 10,
//     price: 26,
//     photos: [
//                 "3.jpg",
//             ],
// },
// {
//     id: 8,
//     price: 78,
// },
// ];
//-------------------------------------------------

// const massfotos = products.filter((fotos) => {
//     if (fotos.photos != "" )
//     {
//         console.log(fotos.photos);
//     }
    
// });

//-------------------------------------------------
// console.log(products.sort((prod1, prod2) => 
//           prod1.price - prod2.price));
//-------------------------------------------------













// **Задание 5**
// Дано 2 массива 
// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
//-------------------------------------------------
// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// let res = {};

// en.map((item, index) => res[item] = ru[index])
// console.log(res)
//-------------------------------------------------