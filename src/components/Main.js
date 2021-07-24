import axios from 'axios'
import React, { Component } from 'react'
import { CardGroup, Spinner } from 'react-bootstrap'
import MainCard from './MainCard'
const serverUrl=process.env.REACT_APP_SERVER_URL
export class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            artData:[]
        }
    }
    /*==================================================================================*/
    componentDidMount=()=>{
axios.get(`${serverUrl}/apidata`).then(response=>{
    this.setState({
        artData:response.data 
    })
    console.log(this.artData);
}).catch(error=>alert(error.message))
    }

    /*==============================================================================*/
handleAddToFav=(item)=>{
const reqbody={
    id:item.id,
    name:item.name,
    description:item.description,
    title:item.title,
    image_id:item.image_id
}

axios.post(`${serverUrl}/favourite`,reqbody).then(response=>{
    if(response.data==='already exist'){
        alert('already in your Favourite list')
    }else{alert('added successfully')}
}).catch(error=>alert(error.message))
}

/*=========================================================================================*/






    render() {
        return (
            <div>
              {
                  this.state.artData.length>0?
                  <CardGroup>
                      {
               this.state.artData.map((value,idx)=>{
    return(
        <MainCard
        
        key={idx}
        id={value.id}
        description={value.credit_line}
        // img={value.thumbnail.lqip}
       name={value.artist_title}
        title={value.title}
        // width={value.width}
        // heigh={value.height}
        image_id={value.image_id}
        handleAddToFav={this.handleAddToFav}
        
        />
    )
}
)
                      }
                  </CardGroup>:
                  <>
              <Spinner animation="border" variant="primary" />
              <Spinner animation="border" variant="secondary" />
              <Spinner animation="border" variant="success" />
              <Spinner animation="border" variant="danger" />
              <Spinner animation="border" variant="warning" />
              <Spinner animation="border" variant="info" />
              </>
              }
            </div>
        )
    }
}

export default Main
