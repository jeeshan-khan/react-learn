import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Practices } from './Practices.jsx'
import { App } from './App.jsx'
// import Profile  from './components/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
    {/* <Practices /> */}
    {/* <Profile /> */}
  </StrictMode>
)
