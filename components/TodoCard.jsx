import React from 'react'

export default function TodoCard(props){ 
    const {children, handleDeleteTodo,index } = props
    return(
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button>
                    <i className="fa-solid fa-pen-to-square"></i>  <i className="fa-solid fa-trash"></i>
                </button>
                <button onClick={() =>{
                    handleDeleteTodo
                }}>
                    <i className='fa-regular fa-trash-can'></i>
                </button>
            </div>   
        </li>  
  )
}
