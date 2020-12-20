import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class LeftMenu extends Component {
  state = {
    categories: [],
  };
  componentDidMount() {
    this.getCategories();
  }
  //test
  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          categories: data,
        })
      );
  };
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((c) => (
            <ListGroupItem
              active={
                c.categoryName === this.props.currentCategory ? true : false
              }
              action
              onClick={() => this.props.changeCategory(c)}
              key={c.id}
            >
              {c.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
