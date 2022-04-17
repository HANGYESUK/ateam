import React, { useContext } from 'react';
import './SelectMenu.css';


type stateType = number[]

function SelectMenu(props :any) {

    let state :stateType = useContext(stateContext);

  return (
    <div className='selectMenu colum'>
        <div>
            <h1>들어온 요청</h1>
            <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
        </div>
        <div className='selection low'>
            <div>
                <select name='가공방식'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <select name='재료'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className='low'>
                <button>버튼</button>
                <p>상당중인 요청건만 보기</p>
            </div>
        </div>
        
    </div>
  )
}

export default SelectMenu