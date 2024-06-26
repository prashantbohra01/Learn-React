import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { Counter } from './features/counter/Counter.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    <Counter />
    </Provider>
)
