import React from 'react'
import './App.css'

import DateInput from '../src/components/DateInput'
import ConvertButton from './components/ConvertButton'
import DateResult from './components/DateResult'

function App() {
  return (
    <div className='app'>
      <div className='app-container'>
        <div style={{ display: 'flex', gap: 20 }}>
          <DateInput label='Day' />
          <DateInput label='Month' />
          <DateInput label='Year' />
        </div>
        <ConvertButton />

        <DateResult type='year' date='--' />
        <DateResult type='month' date='--' />
        <DateResult type='day' date='--' />

      </div>
    </div>
  )
}

export default App
