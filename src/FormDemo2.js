import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      this.state.email +
        " " +
        this.state.password +
        " " +
        this.state.city +
        " " +
        this.state.description
    );
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email"  name="email" placeholder="enter email"  onChange={this.handleChange}></Input>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password"  name="password" placeholder="enter password"  onChange={this.handleChange}></Input>
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input type="select" name="city"  onChange={this.handleChange}>
                  <option>İzmir</option>
                  <option>Manisa</option>
                  <option>Bursa</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="textarea"  name="description" placeholder="enter description"  onChange={this.handleChange}></Input>
            </FormGroup>
            <Button type="submit" className="btn btn-success">Post</Button>
        </Form>
      </div>
    );
  }
}
