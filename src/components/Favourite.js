import axios from 'axios'
import React, { Component } from 'react'
import { CardGroup } from 'react-bootstrap'
import FavouriteCard from './FavouriteCard'
import UpdateForm from './UpdateForm'
const serverUrl=process.env.REACT_APP_SERVER_URL
export class Favourite extends Component {

    constructor(props){
        super(props)
        this.state={
            favData:[],
            choosenToUpdate:{},
            showForm:false
        }
    }
    /*====================================================================================*/
    componentDidMount=()=>{
        axios.get(`${serverUrl}/favourite`).then(response=>{
            this.setState({
                favData:response.data
            })
        }).catch(error=>alert(error.message))
    }

    /*==========================================================================================*/

deleteFavs=async(item)=>{
await axios.delete(`${serverUrl}/favourite/${item.id}`).then(response=>{
    alert('deleted successfully :"(')

}).catch(error=>alert(error.message))
axios.get(`${serverUrl}/favourite`).then(response=>{
    this.setState({
        favData:response.data
    })
}).catch(error=>alert(error.message))
}
/*===================================================================================*/
showUpdateForm=(item)=>{
this.setState({
    choosenToUpdate:item,
    showForm:!this.state.showForm
})
}

/*=====================================================================================*/
updateFavs=async(e)=>{
e.preventDefault()
const id=this.state.choosenToUpdate.id
const reqBody={
description:e.target.description.value,
 name:e.target.name.value,
 title:e.target.title.value,
  
}
await axios.put(`${serverUrl}/favourite/${id}`,reqBody).then(response=>{
    this.setState({
        showForm:false
    })
alert('heeeeeeeeeeeeeeeeeeeeeeeeeeelooooooooooooooo')
}).catch(error=>alert(error.message))
axios.get(`${serverUrl}/favourite`).then(response=>{
    this.setState({
        favData:response.data
    })
}).catch(error=>alert(error.message))
}


/*================================================================================*/


    render() {
        return (
            <div>

{
    this.state.showForm&&
    <UpdateForm
    updateFavs={this.updateFavs}
    item={this.state.choosenToUpdate}
    
    />
}

                {this.state.favData&&
                
                <CardGroup>
                    {
                        this.state.favData.map((value,idx)=>{
                            return(
                               <FavouriteCard
                               
                               key={idx}
                               id={value.id}
                               description={value.description}
                              name={value.name}
                               title={value.title}
                               image_id={value.image_id}
                               deleteFavs={this.deleteFavs}
                               showUpdateForm={this.showUpdateForm}
                               
                               
                               
                               
                               />

                            )
                        })
                    }
                </CardGroup>
                
                }
                
            </div>
        )
    }
}

export default Favourite
