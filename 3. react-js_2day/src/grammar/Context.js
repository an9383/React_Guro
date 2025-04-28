import React, { useContext, createContext} from 'react'

export const themes = {
  light: {
      foreground: 'blue',
      background: '#eeeeee',
  },
  dark: {
      foreground: '#ffffff',
      background: 'red',
  },
}
const ThemesContext = createContext(themes.light)

const Context = () => {
  return (
    <div>
      Context
      {/* Context 제공 */}
      <ThemesContext.Provider>
        <Toolbar />
      </ThemesContext.Provider>
    </div>
  )
}

const Toolbar = () => {
  return <ToolbarBox />
}

const ToolbarBox = () => {
  // theme = themes.light
  return <div style={{background:themes.background}}>ToolbarBox</div>
}

export default Context