import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Main from './Main/Main'
import * as serviceWorker from './serviceWorker'
import 'fullpage.js/dist/fullpage.min.css'
import 'animate.css/animate.min.css'

ReactDOM.render(<Main />, document.getElementById('root'))

serviceWorker.unregister()
