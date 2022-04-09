import React from 'react'
import hrclogo from '../images/HrcLogo.png'
import abcLogo from '../images/abcLogo.svg'

const TodoList=()=>{
  return (
    <div style={{ height: '20vh', width: '100%' }}>

        <div className="flex-container ">

            <div  >  
                <img src={abcLogo} alt="abc logo" heights='60vh' width='200vw' ></img>
            </div>

            <div className="center " >
                <img src={hrclogo} alt="hrc logo" height='45vh' width='200vw' ></img>
            </div>

        </div>

         <div >
                <h5 className='invoice'>Invoice List</h5>
                
          </div>

    </div>  
  )
}
export default TodoList;