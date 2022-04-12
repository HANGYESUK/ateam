import React from 'react';
import './SelectMenu.css';

function SelectMenu() {
  return (
    <div className='selectMenu colum'>
        <div>
            <h1>들어온 요청</h1>
            <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
        </div>
        <div className='low'>
            <div>
                <select name='가공방식'>
                    <option></option>
                </select>
                <select name='재료'>
                    <option></option>
                </select>
            </div>

            <div>
                <button>버튼</button>
                <p>상당중인 요청건만 보기</p>
            </div>
        </div>
        
    </div>
  )
}

export default SelectMenu