//변수
//const,let 등 변수 선언 방식

let a= 1
console.log(a) //1

a = 2
console.log(a) //2

const b = 5
console.log(b)

// const 는 재할당이 불가능하다.
// b = 6

// 템플릿 문자열
const str1 = '안녕하세요.';
const str2 = '김겨울입니다.';
const greeting = '${str1} 저는 ${str2}';

const str3 = 'odada';
const str4 = 100;
const str5 = '010-1234-5678';
const str6 ='서울시';

const cat = {
  name: '겨울이',
  age:2,
  name2: 'odada',
  age2: 100,
  phonenumber: '010-1234-5678',
  address: '서울시'
}

console.log(`저희 고양이 이름은 ${cat.name}이고, \n나이는 ${cat.age}살 입니다.`)

console.log(`제 이름은 ${cat.name2}`)

//배열
const arr = [1,2,3,4,5]
console.log(arr)
console.log(arr.length)

const animal = ['고양이','강아지','토끼']
console.log(`내가 좋아하는 동물은 ${animal[0]}입니다.`)

const users = [
  {name:'김겨울', age:2},
  {name:'김가을', age:3},
  {name:'김여름', age:4},
  {name:'김봄', age:5},
]

console.log(`${users[3].name}의 나이는 ${users[3].age} 입니다.`)
console.log(`${users[0].name}의 나이는 ${users[0].age} 입니다.`)
console.log(`${users[1].name}의 나이는 ${users[1].age} 입니다.`)
console.log(`${users[2].name}의 나이는 ${users[2].age} 입니다.`)