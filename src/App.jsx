import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
      {/* Header */}
      <Header></Header>
      <Outlet></Outlet>
      {/* Footer */}
    </div>
  )
}

export default App
