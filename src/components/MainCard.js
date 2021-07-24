import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
export class MainCard extends Component {
    render() {
        return (
            <div>
               <Card style={{ width: '18rem' ,height:'600px' }} >
  <Card.Img variant="top" style={{ maxWidth: '18rem', height: '300px' }}   src={`https://www.artic.edu/iiif/2/${this.props.image_id}/full/843,/0/default.jpg`}/>
  <Card.Body>
    <Card.Title> Title:{this.props.title}</Card.Title>
    
    <Card.Text>
artist:{this.props.name}
    </Card.Text>
    <Card.Text>
    description:{this.props.description}
 
    </Card.Text>
    <Button variant="danger" onClick={()=>this.props.handleAddToFav(this.props)}>Add to favourite</Button>
  </Card.Body>
</Card> 
            </div>
        )
    }
}

export default MainCard
