import React from 'react'

const Context = React.createContext()


const Provider = ({children}) => {


  <Context.Provider value={15}>
      {children}
  </Context.Provider>
}

export default {Context}

export  {Provider}
