import React from 'react'
import qrcode from '/qrcode.png'

const App = () => {
  return (
    <div className="card">
      <img src={qrcode} className='qrcode'/>
      <p className="upper">Improve your front-end skills by building projects</p>
      <p className="lower">Scan the qr code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}

export default App