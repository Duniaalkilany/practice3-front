import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap'
export class UpdateForm extends Component {
    render() {
        return (
            <div>
               <Form onSubmit={this.props.updateFavs}>
  

  
  <Form.Group className="mb-3" controlId="title">
    <Form.Label>title</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.title} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="name">
    <Form.Label>artist name:</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.name} />
  </Form.Group>


  <Form.Group className="mb-3" controlId="description">
    <Form.Label>description</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.description} />
  </Form.Group>
  
  <Button variant="danger" type="submit">
    Submit
  </Button>
</Form> 
            </div>
        )
    }
}

export default UpdateForm
