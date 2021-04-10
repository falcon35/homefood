import React, { Component } from 'react'
import {Card,CardImg,CardText,CardTitle} from 'reactstrap'
export default class ProductDetail extends Component {
    renderFood(food){
        if(this.props.food!=null){
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
     renderComments(comments){
         <h4>Comments</h4>
       if (comments!=null){
        return(
            <ul className="list-unstyled">
           {comments.map((comment)=>{
               return(
                <div>
<li>
               {comment.comment}
            </li>
            <li>
                <i>{comment.author}</i>   {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            </li>
                </div>
                 
               )
           })     
            
        }
        </ul>
         )
       }
       else{
           <div></div>
       }     
    
                    
                    
               
                 
     }
    render() {
        
        return (
            <div>
                {this.renderFood(this.props.selectedFood)}
                {this.renderComments(this.props.selectedFood.comments)}
            </div>
        )
    }
}
