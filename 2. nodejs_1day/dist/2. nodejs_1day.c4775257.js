//함수 선언문
function hello1() {
    console.log('hello1');
}
//함수 표현식
const hello2 = function() {
    console.log('hello2');
    return 'hello2';
};
hello1();
hello2();
//함수 호출
function sum(a, b1) {
    return a + b1;
}
const a = sum(1, 2);
console.log(sum(2, b = 1));
// 2+ undefined =NaN
//객체 구조 분해 할당
const user = {
    name: "\uACA8\uC6B8",
    age: 2
};
//user 이름을 출력하는 함수
function getName({ name, age }) {
    //const {name, age} =user
    return user.name;
}
function getAge(user) {
    const { age } = user;
    return age;
}
function getEmail({ email = "\uC774\uBA54\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }) {
    return email;
}
console.log(getName(user));
console.log(getAge(user));
console.log(getEmail(user));
//Rest
function sum1(...rest) {
    return rest;
}
console.log(sum1(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
// setInterval
// setInterval(콜백함수, 밀리초)
const interval = setInterval(()=>{
    console.log('setInterval');
}, 3000);
const cancleBtn = document.querySelector('#btn');
cancleBtn.addEventListener('click', ()=>{
    console.log("\uCDE8\uC18C\uBC84\uD2BC \uD074\uB9AD");
    clearInterval(interval);
});
// 콜백함수
function aa(callback) {
    callback();
    console.log('a');
}
function bb() {
    console.log('b');
}
aa(bb);
// 콜백함수 예제
const sum2 = (a, b1, c)=>{
    setTimeout(()=>{
        return c(a + b1);
    }, 1000);
};
sum2(1, 2, (value)=>{
    console.log(value);
});
//일반함수 this
function user3() {
    this.firstName = "\uAC00\uC744";
    this.lastName = "\uAE40";
    return {
        firstName: "\uACA8\uC6B8",
        lastName: "\uAE40",
        getFullName: ()=>{
            return `${this.firstName} ${this.lastName}`;
        }
    };
}
const u = user3();
console.log(u.getFullName());

//# sourceMappingURL=2. nodejs_1day.c4775257.js.map
