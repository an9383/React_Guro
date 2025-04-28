//비동기
// console.log('은행 1번 번호표 업무 시작')
// console.log('은행 1번 번호표 업무 끝')

// console.log('은행 2번 번호표 업무 시작')
// console.log('은행 2번 번호표 업무 끝')

// console.log('악마 음료 슈렉 프라푸치노 주문')

// setTimeout(() => {
//     console.log('아메리카노 주문')
//     console.log('아메리카노 주문 완료')
// }, 3000)

// console.log('악마 음료 슈렉 프라푸치노 주문 완료')

//콜백 함수로 비동기 처리
// function orderCoffee(coffee) {
//   console.log(`${coffee}를 만드는 중...`)

//   setTimeout(() => {
//       console.log(`${coffee}가 만들어졌습니다.`)
//   }, 3000)
// }

// function drinkCoffee() {
//   console.log('커피를 마신다.')
// }

// orderCoffee('아메리카노')
// drinkCoffee()

//콜백함수
// 콜백 함수를 사용하여 비동기 처리하기
// function orderCoffee(coffee, callback) {
//   console.log(`${coffee}를 만드는 중...`)

//   setTimeout(() => {
//       console.log(`${coffee}가 만들어졌습니다.`)
//       callback()
//   }, 3000)
// }

// // 콜백 함수
// function drinkCoffee() {
//   console.log('커피를 마신다.')
// }

// // orderCoffee 함수를 호출하고 콜백 함수를 전달
// // 콜백 함수는 orderCoffee 함수에서 커피가 만들어진 후에 실행된다.
// orderCoffee('아메리카노', drinkCoffee)

//promise를 사용하여 비동기 처리하기
const orderCoffee = new Promise((resolve,reject)=>{
console.log('커피를 만드는 중...')
setTimeout(() => {
  if (Math.random() > 0.5) {
      resolve('아메리카노 준비 완료!')
  } else {
      reject('주문을 받질 못했습니다.')
  }
},3000)

orderCoffee
 //resolve함수가 호출되면 then 매서드가 실행된다.
.then((item)=>{
  console.log(`${item}가 만들어졌습니다.`)
})
 //reject 함수가 호출되면 catch 메서드가 실행된다.
 .catch((error)=>{
  console.error(error)
 })
})
