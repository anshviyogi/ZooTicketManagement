import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddMember from './component/AddMember'
import Links from './component/Links'
import ValidateMember from './component/ValidateMember'

function App(){
return(
  <div className='app'>
    <Router>
      <Routes>
        {/* Issue Route */}
        <Route path='/issue' element={<AddMember/>}/>

        {/* Security Route */}
        <Route path='/security' element={<ValidateMember/>}/>
        
        {/* Main Page Route */}
        <Route path='/' element={<Links/>}/>
      </Routes>
    </Router>
  </div>
)
}
export default App