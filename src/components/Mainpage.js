import React from 'react'
import {
    Container,
    Form,
    Input,
    Button,
    ConP,
    Title
} from './MainpageElements'
const  Mainpage = ({inputValue,setInputValue,handleSubmit,error}) => {

  
  return (
    <Container>
        <Title>ToDo App</Title>
        
        <Form onSubmit={handleSubmit}>
          {/* step2 */}
          <Input 
              value = {inputValue}
              onChange= {e => setInputValue(e.target.value)}
              type='text' 
              placeholder='Add todo'>
          </Input>
          <Button 
              type='submit'>
            Add 
          </Button>

          
        </Form>
        <ConP>{error}</ConP>
        
    </Container>
  )
}

export default Mainpage
