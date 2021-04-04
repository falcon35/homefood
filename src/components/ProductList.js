import React, { Component } from 'react'
import {Card,CardImg,CardImgOverlay,CardText,CardTitle} from 'reactstrap'

export default class ProductList extends Component {
    constructor(props) {
        super(props)
       this.state={
           selectedFood:null
       }
    }
     onFoodSelect(food){
        this.setState({
            selectedFood:food
        })
    }
    renderFood(food){
       if(food!=null){
       return(
           <Card>
            <CardImg top width="100%" src={food.img}/>
            <CardTitle><b>{food.name.toUpperCase()}</b></CardTitle>
            <CardText><p>{food.description}</p></CardText>
            <CardText><b>{food.price} USD</b></CardText>
           </Card>
       )
            } else{
                <div></div>
            }
        
    }
    render() {
        const productlist=this.props.foods.map(food=>{
            return(
        <div key={food.id} className="col-12 col-md-5 m-1">
           <Card onClick={()=>this.onFoodSelect(food)}>
               <CardImg src={food.img} width="100%"/>
               <CardImgOverlay>
                   <CardTitle><b>{food.name.toUpperCase()}</b></CardTitle>
               </CardImgOverlay>
            <CardText><p>{food.description}</p></CardText>
           </Card>  
        </div>
            )
        })
        return (
            <div className="container">
            <div className="row">
                {productlist}
            </div>
            <div className="row">
            <div className="col-12">
            {this.renderFood(this.state.selectedFood)}
            </div>
            </div>
            </div>
        )
    }
}
