import React from 'react'
import { render } from 'react-dom'
import { createServer } from 'miragejs'
import { App } from './App'


createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', ()=>{
      return [
        {
          id: 1 , 
          title: 'Transaction 1',
          amount: 1.500,
          createdAt: '05/16/2000',
          type: 'withdraw',
          category: 'food'
        }
      ]
    })
  }
})

render(
  <React.StrictMode>
    <App />
  </React.StrictMode> , 
document.getElementById('root')
);