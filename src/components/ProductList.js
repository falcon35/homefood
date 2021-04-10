import React, { Component } from 'react'
import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap'
import ProductDetail from './ProductDetail'

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
   
    render() {
        const productlist=this.props.foods.map(food=>{
            return(
        <div key={food.id} className="col-12 col-md-5 m-1">
           <Card onClick={()=>this.onFoodSelect(food)}>
               <CardImg src={food.img} width="100%"/>
               <CardImgOverlay>
                   <CardTitle><b>{food.name.toUpperCase()}</b></CardTitle>
               </CardImgOverlay>
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
            <div className="col-12 col-md-5 m-1">
                <ProductDetail selectedFood={this.state.selectedFood} />
            </div>
            </div>
            </div>
        )
    }
}
