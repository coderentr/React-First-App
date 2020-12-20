import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class Content extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table dark>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Stok</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => this.props.addToCard(product)}
                    color="info"
                  >
                    Add To Card
                  </Button>{""}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
