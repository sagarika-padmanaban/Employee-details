import React from 'react'
import { Provider } from "react-redux";
import Table from './components/Table/Table'
import { store } from './store'
import './App.css'
const App = () => {
  console.log({store});
  return (
    <div className='App'>
      <Provider store={store} >
        {/* <h1>saga</h1> */}
        <Table />
      </Provider>
    </div>

  )
}

export default App

