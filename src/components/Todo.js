import React, { useState } from 'react'
import { Button, ButtonGroup} from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Todo() {
  //to get todo value
    const[todo,setTodo]=useState("")
  //to set todo value in an array
    const[data,setdata]=useState([])
  //to access id
    const[todoId,setTodoid]=useState(-1)
  //for button to set update and add
    const[edit,setedit]=useState(false)

   //on submit functionality
    const handleSubmit=(e)=>{
        e.preventDefault()
        //if todo === -1
if(todoId===-1){
  setdata([...data,todo])
  // console.log(data);
  setTodo("")
}else if (todoId>-1){         //if todo is not equal to -1 
  const dataCopy=[...data]
  dataCopy.splice(todoId,1,todo)
  setdata(dataCopy)
  // console.log(data.splice(todoId,1,todo));
  setedit(false)
    // console.log(todo);
    // console.log(todoId);
    setTodo("")
    setTodoid(-1)
}
}
 
//edit functionality
const handleEdit=(val,i)=>{
  //setting the value from onClick to the main input
  setTodo(val)
  //setting todo id to the id what we get from onClick
  setTodoid(i)
  //making it true for update
  setedit(true)
}



const handleDelete=(i)=>{
const deleteItem=[...data]
deleteItem.splice(i,1)
// console.log(deleteItem);
setdata(deleteItem)
}


  return (
    <div>
     
        <Row>
            <Form.Group as={Col} md="5" className='m-auto' >
              <Form.Label>Todo</Form.Label>
              <Form.Control
                type="text"
                name="todo"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
              />
              {edit ?  <Button  as={Col} onClick={handleSubmit}>Update Todo</Button>:
              <Button  as={Col} onClick={handleSubmit}>Add Todo</Button>}
            
              </Form.Group>
        </Row>
        {data.map((val,i)=>{
          return <>
          <div key={i}>
          <h5 className='contain'>{val}</h5> 
          
           <Button className='todo_button' onClick={()=>handleEdit(val,i)}>edit</Button> 
          <Button onClick={()=>handleDelete(i)}>Delete</Button>
          </div>
         </>
        })}
    </div>
  )
}

export default Todo