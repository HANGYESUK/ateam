import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className='nav-Container low'>
        <div className='nav-Title low'>
            <h1>CAPA</h1>
            <h1 className='nav-SubTitle'>파트너스</h1>
        </div>
        <div className='nav-Log low'>
            <p>A가공업체</p>
            <p> | </p>
            <p>로그아웃</p>
        </div>

    </div>
  )
}

export default Nav