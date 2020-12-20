import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {Table, Button} from 'reactstrap'

class CardDetail extends Component {
    
    renderCard(){
        return(
            <Table dark>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Stok</th>
                <th>Count</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cards.map((card) => (
                <tr key={card.products.id}>
                  <td>{card.products.productName}</td>
                  <td>{card.products.unitPrice}</td>
                  <td>{card.products.unitsInStock}</td>
                  <td>{card.products.length}</td>
                  <td><Button onClick={()=>this.props.removeFromCard(card.products)} className="btn btn-danger">x
                      </Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        )
    }
    emptyCard(){
        return (
            <div>
                <h1>Sepetinizde ürün bulunmamaktadır.</h1><Link to="/">Alışverişe devam et.</Link>
            </div>
        )
    }
       
    render() {
        return (
            <div>
               {this.props.cards.length>0?this.renderCard():this.emptyCard()}
            </div>
        );
    }
}

export default CardDetail;