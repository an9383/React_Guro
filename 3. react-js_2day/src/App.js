// eslint-disable-next-line
import React, { useState, useContext } from 'react'
import Toolbar , {themes} from './grammar/Context'
import Home from "./components/layout/Home";


// App_01
// function SignupForm({ title = "회원가입", onSubmit, buttonText = "가입하기" }) {
//   // 폼 데이터를 관리할 상태 추가
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     hasCar: false,
//   });

//   // 입력값 변경 처리
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // 자차 유무 토글 처리
//   const handleToggleCar = () => {
//     setFormData((prevData) => ({
//       ...prevData,
//       hasCar: !prevData.hasCar,
//     }));
//   };

//   // 폼 제출 처리
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit?.(formData);
//     console.log("제출된 데이터:", formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>{title}</h2>
//       <FormInput
//         label="이름"
//         type="text"
//         placeholder="이름을 입력하세요"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <FormInput
//         label="이메일"
//         type="email"
//         placeholder="이메일을 입력하세요"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <ToggleButton
//         label="자차 유무"
//         buttonText={formData.hasCar ? "자차 있음" : "자차 없음"}
//         isActive={formData.hasCar}
//         onClick={handleToggleCar}
//       />
//       <button type="submit">{buttonText}</button>
//     </form>
//   );
// }

// function FormInput({ label, type, placeholder, name, value, onChange }) {
//   return (
//     <div>
//       <strong>{label}</strong>
//       <input
//         type={type}
//         placeholder={placeholder}
//         title={label}
//         name={name}
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// }

// function ToggleButton({ label, buttonText, isActive, onClick }) {
//   return (
//     <div>
//       <strong>{label}</strong>
//       <button
//         type="button" // submit 방지
//         onClick={onClick}
//         style={{
//           backgroundColor: isActive ? "#4CAF50" : "#f0f0f0",
//         }}
//       >
//         {buttonText}
//       </button>
//     </div>
//   );
// }

// function App() {
//   const handleSubmit = (formData) => {
//     console.log("App에서 받은 제출 데이터:", formData);
//     // API 호출 등의 처리를 할 수 있음
//   };

//   return (
//     <SignupForm
//       title="새 회원 등록"
//       onSubmit={handleSubmit}
//       buttonText="등록하기"
//     />
//   );
// }

// export default App;

// App_02
// function Header() {
//   return (
//     <header>
//       <h1>logo</h1>
//     </header>
//   );
// }

// function Nav() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/">About</a>
//         </li>
//         <li>
//           <a href="/">SignIn</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// function Section() {
//   return (
//     <section>
//       <h2>섹션1</h2>
//       <p>섹션1 컨텐츠</p>
//     </section>
//   );
// }

// function Footer() {
//   return <footer>footer</footer>;
// }

// function App() {
//   return (
//     <div id="wrap">
//       <Header />
//       <Nav />
//       <main>
//         <Section />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// App_03
// function Header() {
//   return (
//     <header>
//       <h1>logo</h1>
//       <Nav />
//     </header>
//   );
// }

// function Nav() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/">About</a>
//         </li>
//         <li>
//           <a href="/">SignIn</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// function Section() {
//   return (
//     <section>
//       <h2>섹션1</h2>
//       <p>섹션1 컨텐츠</p>
//     </section>
//   );
// }

// function Footer() {
//   return <footer>footer</footer>;
// }

// export default function App() {
//   return (
//     <div id="wrap">
//       <Header />
//       <main>
//         <Section />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// App_04
// function App() {
//   return (
//     <div className="root">
//       <Cat name="고양이1" age="1" />
//       <Cat name="고양이2" age="2" />
//       <Cat name="고양이3" age="3" />
//     </div>
//   );
// }

// function Cat(props) {
//   console.log(props);
//   // const props = {name: "고양이1", age: "1"}
//   // props.name = 고양이1, 고양이2, 고양이3
//   // props.age = 1, 2, 3
//   return (
//     <div>
//       <h2>
//         고양이 이름은 {props.name}이고 나이는 {props.age} 입니다.
//       </h2>
//     </div>
//   );
// }

// export default App;

// App_05
// function App() {
//   const navArr = [
//     { title: "component" },
//     { title: "props" },
//     { title: "state" }
//   ];
//   return (
//     <div className="root">
//       <Header title="리액트(React)" nav={navArr} />
//       <Article title="컴포넌트(Component)" desc="컴포넌트란 재사용 가능한 UI조각이다." />
//       <Article title="속성(Props)" desc="속성이란 컴포넌트를 사용할 때 설정하는 속성이다." />
//       <Article title="상태(State)" desc="속성이란 컴포넌트를 사용할 때 설정하는 속성이다." />
//     </div>
//   );
// }

// function Header(props) {
//   return (
//     // props.nav = navArr
//     <header>
//       <h1>{props.title}</h1>
//       <Nav nav2={props.nav} />
//     </header>
//   );
// }

// function Nav(props) {
//   return (
//     <nav>
//       <ul>
//         {props.nav2.map((item, index) => (
//           <li key={index}>
//             <a href={"/sub/" + item.title}>{item.title}</a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// function Article(props) {
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>{props.desc}</p>
//     </div>
//   );
// }

// export default App;

// App_06
// function App() {
//   // nav를 배열로 구성한다.
//   const navArr = [{ title: 'Home' }, { title: 'About' }, { title: 'SignIn' }];
//   return (
//     // nav를 props로 전달한다.
//     <div className="root">
//       <Nav nav={navArr} />
//     </div>
//   );
// }

// function Nav(props) {
//   // prop로 전달된 nav를 받아서 동적으로 li를 구성한 다음 배열에 담아준다.
//   const list = [];
//   // props.nav.length = 3
//   for (let i = 0; i < props.nav.length; i++) {
//     // list 배열에 li를 추가한다.
//     list.push(
//       // li에 key를 추가해 주는 이유는 리액트가 배열의 요소를 추가, 삭제, 수정할 때 효율적으로 처리하기 위해서이다.
//       // props.nav[i].title = Home, About, SignIn
//       <li key={props.nav[i]}>
//         <a href="/">{props.nav[i].title}</a>
//       </li>
//     );
//   }

//   return (
//     // ul 태그 안에 list 배열을 넣어준다.
//     <nav>
//       <ul>{list}</ul>
//     </nav>
//   );
// }

// export default App;


// App_07
function App() {
  // data를 배열로 구성한다.
  const dataArr = [
    { name: '홍길동', age: 20 },
    { name: '임꺽정', age: 25 },
    { name: '전우치', age: 30 },
  ];
  return (
    <div className="root">
      <Table data={dataArr} /> {/* data를 props로 전달한다. */}
    </div>
  );
}

function Table(props) {
  // key를 추가해 주는 이유는 리액트가 배열의 요소를 추가, 삭제, 수정할 때 효율적으로 처리하기 위해서이다.
  // item.id = 1, 2, 3
  // item.name = 홍길동, 임꺽정, 전우치
  // item.age = 20, 25, 30

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody> {/* list 배열을 넣어준다. */}
    </table>
  );
}

export default App;

// App_Comment Props
// const App = () => {
//   const user1 = {
//     name: 'winter',
//     avatarUrl: 'https://assets.chatgpt4google.com/assets/promo/43.gif',
//   };

//   const user2 = {
//     name: 'fall',
//     avatarUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//   };

//   const commentData1 = {
//     user: user1,
//     text: 'This is a comment from winter.',
//     date: '2023.10.10',
//   };

//   const commentData2 = {
//     user: user1,
//     text: 'This is a comment from fall.',
//     date: '2023.11.23',
//   };

//   // Comment 컴포넌트에 commentData를 props로 전달한다.
//   // 부모 컴포넌트에서 props로 전달한 데이터는 Comment 컴포넌트에서 props로 받아서 사용한다.
//   return (
//     <>
//       <Comment data={commentData1} />
//       <Comment data={commentData2} />
//     </>
//   );
// };

// const Comment = props => {
//   // props.data = commentData1, commentData2

//   // props.data.user = users[0], users[1]
//   // props.data.text = 'This is a comment from winter.', 'This is a comment from fall.'
//   // props.data.date = '2023.10.10', '2023.11.23'
//   return (
//     <div>
//       <UserInfo user={props.data.user} />
//       <div>{props.data.text}</div>
//       <div>{props.data.date}</div>
//     </div>
//   );
// };

// const UserInfo = props => {
//   // props.user = user1, user2

//   // props.user.name = winter, fall
//   return (
//     <div>
//       <img
//         src={props.user.avatarUrl}
//         alt={props.user.name}
//       />
//       <div>{props.user.name}</div>
//     </div>
//   );
// };

// export default App;

// App_08
// const App = () => {
//   const users = [
//     {
//       name: 'winter',
//       avatarUrl: 'https://assets.chatgpt4google.com/assets/promo/43.gif',
//     },
//     {
//       name: 'fall',
//       avatarUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//     },
//   ];

//   const comments = [
//     {
//       user: users[0],
//       text: 'This is a comment from winter.',
//       date: '2023.10.10',
//     },
//     {
//       user: users[1],
//       text: 'This is a comment from fall.',
//       date: '2023.11.23',
//     },
//   ];

//   return (
//     <>
//       {comments.map((item, index) => (
//         // index = 0, 1
//         // item = comments[0], comments[1] 순서대로 배열의 요소를 꺼낸다.
//         <Comment
//           key={index}
//           data={item}
//         />
//       ))}
//     </>
//   );
// };

// const Comment = props => {
//   // props.data = commentData1, commentData2

//   // props.data.user = users[0], users[1]
//   // props.data.text = 'This is a comment from winter.', 'This is a comment from fall.'
//   // props.data.date = '2023.10.10', '2023.11.23'
//   return (
//     <div>
//       <UserInfo user={props.data.user} />
//       <div>{props.data.text}</div>
//       <div>{props.data.date}</div>
//     </div>
//   );
// };

// const UserInfo = props => {
//   // props.user = user1, user2

//   // props.user.name = winter, fall
//   return (
//     <div>
//       <img
//         src={props.user.avatarUrl}
//         alt={props.user.name}
//       />
//       <div>{props.user.name}</div>
//     </div>
//   );
// };

// export default App;

// App_Product Props
// export default function App() {
//   const productArr = [
//     { name: "상품1", price: 500 },
//     { name: "상품2", price: 1000 },
//     { name: "상품3", price: 2000 }
//   ];
//   return (
//     <div className="App">
//       <h1>Product List</h1>
//       <Product products={productArr} />
//     </div>
//   );
// }

// function Product(props) {
//   return (
//     <div className="product">
//       <ul>
//         {props.products.map((item, index) => (
//           <ProductList key={index} productList={item} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function ProductList(props) {
//   return (
//     <li>
//       <strong>{props.productList.name}</strong>
//       <p>{props.productList.price}원</p>
//     </li>
//   );
// }

// App_09
// const App = () => {
//   const productsArr = [
//     { id: 1, name: 'Product A', price: 10.99 },
//     { id: 2, name: 'Product B', price: 15.99 },
//     { id: 3, name: 'Product C', price: 7.49 },
//   ];

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ProductList products={productsArr} />
//     </div>
//   );
// };

// const ProductList = props => {
//   // props.products = productsArr
//   return (
//     // product.id = 1, 2, 3
//     // product = productsArr[0], productsArr[1], productsArr[2]
//     <ul>
//       {props.products.map(product => (
//         <Product
//           key={product.id}
//           product={product}
//         />
//       ))}
//     </ul>
//   );
// };

// const Product = props => {
//   // props.product = productsArr[0], productsArr[1], productsArr[2]
//   // props.product.name = Product A, Product B, Product C
//   // props.product.price = 10.99, 15.99, 7.49
//   // toFixed(2) = 소수점 2자리까지 표시한다.
//   return (
//     <li>
//       <h3>{props.product.name}</h3>
//       <p>Price: ${props.product.price.toFixed(2)}</p>
//     </li>
//   );
// };

// export default App;

// App_event
// function App() {
//   const handleClick = () => {
//     alert('버튼 클릭');
//   };

//   return (
//     // onClick 이벤트 핸들러에 ()를 붙이지 않는 이유는
//     // 이벤트를 등록할 때 함수를 호출하는 것이 아니라 함수를 등록하기 때문이다.
//     <div className='App'>
//       <button onClick={handleClick}>버튼</button>
//     </div>
//   );
// }

// export default App;

// App_event2
// function App() {
//   const handleClick = () => {
//     alert('버튼 클릭');
//   };

//   return (
//     // onClick 이벤트 핸들러에 ()를 붙이면 이벤트 핸들러가 등록되는 것이 아니라
//     // 함수가 호출되면서 함수의 반환값이 이벤트 핸들러로 등록된다.
//     // 따라서 아래 코드는 버튼을 클릭하면 즉시 alert 창이 뜬다.
//     <div className='App'>
//       <button onClick={handleClick()}>버튼</button>
//     </div>
//   );
// }

// export default App;

// App_event3
// function App() {
//   // 버튼 클릭시 Alert 창 띄우기
//   const handleClick = () => {
//     alert('버튼 클릭');
//   };

//   // input 태그에 텍스트 입력시 .text 요소에 텍스트 출력하기
//   // event = onChange 이벤트가 발생
//   const handleChange = event => {
//     // event.target = 이벤트가 발생한 요소
//     document.querySelector('.text').innerText = event.target.value;
//   };

//   // 마우스를 올렸을 때 this 요소의 배경색을 빨간색으로 변경하기
//   const handleMouseOver = event => {
//     event.target.style.backgroundColor = 'red';
//   };

//   return (
//     // 아래 코드는 JSX 문법으로 함수를 호출할 때 ()를 붙이지 않는 이유는
//     // 이벤트를 등록할 때 함수를 호출하는 것이 아니라 함수를 등록하기 때문이다.
//     <div className='App'>
//       <h1>클릭 이벤트</h1>
//       <button onClick={handleClick}>버튼</button>

//       <h1>입력 이벤트</h1>
//       <input
//         type='text'
//         onChange={handleChange}
//       />
//       <strong className='text'></strong>

//       <h1>마우스오버 이벤트</h1>
//       <div
//         className='change-red'
//         onMouseOver={handleMouseOver}
//       >
//         마우스를 올려주세요.
//       </div>
//     </div>
//   );
// }

// export default App;

// App_event4
// function App() {
//   // 클릭 이벤트 처리와 상태 관리를 위한 변수
//   // count = 상태, setCount = 상태를 변경하는 함수
//   // useState(0) = count의 초기값을 0으로 설정
//   const [count, setCount] = useState(0);

//   // 버튼 클릭 시 count 상태 업데이트
//   const handleButtonClick = () => {
//     setCount(count + 1); // count 상태를 1 증가
//   };

//   // 입력 이벤트 처리를 위한 변수
//   // inputValue = 상태, setInputValue = 상태를 변경하는 함수
//   // useState('') = inputValue의 초기값을 ''으로 설정
//   const [inputValue, setInputValue] = useState('');

//   // 입력 필드의 값이 변경될 때 inputValue 상태 업데이트
//   const handleInputChange = event => {
//     // event.target.value = 입력 필드의 값
//     setInputValue(event.target.value);
//   };

//   return (
//     // 삼항 연산자 : 조건 ? 참일 때 반환값 : 거짓일 때 반환값
//     <div className='App'>
//       <h1>클릭 이벤트 예제</h1>
//       <button onClick={handleButtonClick}>클릭하여 증가: {count}</button>

//       <h1>조건부 렌더링 예제</h1>
//       {count >= 5 ? <p>count가 5 이상입니다.</p> : <p>count가 5 미만입니다.</p>}

//       <hr />

//       <h1>입력 이벤트 예제</h1>
//       <input
//         type='text'
//         placeholder='입력하세요'
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//       <p>입력한 값: {inputValue}</p>
//     </div>
//   );
// }

// export default App;

// App_useState1
// function App() {
//   const [number, setNumber] = useState(0);

//   function increase() {
//     setNumber(number + 1);
//   }

//   function decrease() {
//     setNumber(number - 1);
//   }
//   return (
//     <div className='root'>
//       <h1>{number}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// }

// export default App;

// App_useState2
// import { TbTicket } from 'react-icons/tb'; // 컬쳐 아이콘
// import { GiTreehouse } from 'react-icons/gi'; // 한적한 시골
// import { MdOutlinePhotoCamera } from 'react-icons/md'; // 최고의 전망
// import { BiHome } from 'react-icons/bi'; // 한옥

// const App = () => {
//   const sortArr = [
//     { value: '컬쳐 아이콘', icon: <TbTicket /> },
//     { value: '한적한 시골', icon: <GiTreehouse /> },
//     { value: '최고의 전망', icon: <MdOutlinePhotoCamera /> },
//     { value: '한옥', icon: <BiHome /> },
//   ];

//   const [selected, setSelected] = useState(0);

//   return (
//     <div className='max-w-6xl mx-auto px-4'>
//       <div
//         className='flex justify-between items-center gap-8 border-b'
//         role='tablist'
//         aria-label='숙소 카테고리'
//       >
//         {sortArr.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => setSelected(index)}
//             className={`
//               flex flex-col items-center justify-center
//               py-4 gap-2 flex-1
//               transition-all duration-200 ease-in-out
//               focus:outline-none
//               ${selected === index ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black hover:border-b-2 hover:border-gray-300'}
//             `}
//             role='tab'
//             aria-selected={selected === index}
//           >
//             <span
//               className='text-2xl'
//               aria-hidden='true'
//             >
//               {item.icon}
//             </span>
//             <span className='text-xs font-medium whitespace-nowrap'>{item.value}</span>
//           </button>
//         ))}
//       </div>

//       <div className='mt-4'>
//         {sortArr.map((item, index) => (
//           <div
//             key={index}
//             role='tabpanel'
//             aria-hidden={selected !== index}
//             className={`
//               transition-all duration-200 ease-in-out
//               ${selected === index ? 'block' : 'hidden'}
//             `}
//           >
//             {item.value} 관련 숙소가 표시됩니다.
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;


// App_ori
// function App() {

//   return (
//     <ThemeContext.Provider value={themes.dark}>
//         <Toolbar />
//     </ThemeContext.Provider>
//     )
// }

//export default App; //컴포넌트로 출력하게 만듬.index.js에서 사용
