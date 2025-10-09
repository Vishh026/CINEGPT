import React from 'react'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from './utils/store/Store'

const App = () => {
  


  return (
      <div className='bg-[#000000] w-full h-ffull'>
      <Provider store = {appStore}>
        <Body />
      </Provider>
    </div>
  )
}

export default App
