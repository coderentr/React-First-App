import React, { Component } from "react";
import Content from "./Content";
import LeftMenu from "./LeftMenu";
import Navi from "./Navi";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFount from "./NotFount";
import CardDetail from "./CardDetail";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    card: [],
  };
  changeCategory = (cat) => {
    this.getProducts(cat.id);
    this.setState({ currentCategory: cat.categoryName });
  };
  addToCard = (product) => {
    let newCard = this.state.card;
    var addedItem = newCard.find((c) => c.products.id === product.id);
    if (addedItem) {
      addedItem.count += 1;
      alertify.success(product.productName + " quantity plus.");
    } else {
      newCard.push({ products: product, count: 0 });
      this.setState({ card: newCard });
      alertify.success(product.productName + " added to card.");
    }
  };
  removeFromCard = (product) => {
    var newCard = this.state.card.filter((c) => c.products.id !== product.id);
    this.setState({ card: newCard });
    alertify.error(product.productName +" removed from card.")
  };

  componentDidMount() {
    this.getProducts();
  }
  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url += "?categoryId=" + id;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          products: data,
        })
      );
  };

  render() {
    let productInfo = {
      title: "Product List",
      tests: "Test",
    };
    let categoryInfo = {
      title: "Category List",
      cattests: "Cat Test",
    };

    return (
      <div>
        <Container>
          <Navi removeFromCard={this.removeFromCard} card={this.state.card} />
        </Container>
        <Container>
          <Row>
            <Col xs="3">
              <LeftMenu
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Content
                      {...props}
                      addToCard={this.addToCard}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/card"
                  render={(props) => (
                    <CardDetail 
                    {...props} 
                    cards={this.state.card}
                    removeFromCard={this.removeFromCard}
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/form1"
                  component={FormDemo1}
                   ></Route>
                    <Route
                  exact
                  path="/form2"
                  component={FormDemo2}
                   ></Route>
                <Route component={NotFount}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
