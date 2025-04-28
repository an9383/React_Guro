// eslint-disable-next-line

import React, { useState, useContext } from 'react'
import Toolbar , {themes} from './grammar/Context'

// createContext 함수를 사용하여 Context 생성
const ThemeContext = React.createContext(themes.light)

function App() {

  return (
    <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
    </ThemeContext.Provider>
)
}

export default App; //컴포넌트로 출력하게 만듬.index.js에서 사용
