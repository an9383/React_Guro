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
const orderCoffee = new Promise((resolve, reject)=>{
    console.log("\uCEE4\uD53C\uB97C \uB9CC\uB4DC\uB294 \uC911...");
    setTimeout(()=>{
        if (Math.random() > 0.5) resolve("\uC544\uBA54\uB9AC\uCE74\uB178 \uC900\uBE44 \uC644\uB8CC!");
        else reject("\uC8FC\uBB38\uC744 \uBC1B\uC9C8 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");
    }, 3000);
    orderCoffee//resolve함수가 호출되면 then 매서드가 실행된다.
    .then((item)=>{
        console.log(`${item}\u{AC00} \u{B9CC}\u{B4E4}\u{C5B4}\u{C84C}\u{C2B5}\u{B2C8}\u{B2E4}.`);
    })//reject 함수가 호출되면 catch 메서드가 실행된다.
    .catch((error)=>{
        console.error(error);
    });
});

//# sourceMappingURL=2. nodejs_1day.79e0fb77.js.map
