import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink
} from "reactstrap";
export default class CardSummary extends Component {
  cardDiv() {
    return (
      <UncontrolledDropdown right nav inNavbar>
        <DropdownToggle nav caret>
          Sepet {this.props.card.length}
        </DropdownToggle>
        <DropdownMenu color="red" right>
          {this.props.card.map((c) => (
            <DropdownItem key={c.products.id}>
                <Badge onClick={()=>this.props.removeFromCard(c.products)} color="danger">-</Badge>
              {c.products.productName}-
              <Badge color="primary">{c.count}</Badge>
            </DropdownItem>
          ))}
            <DropdownItem>
          <Link to="card">Go to card</Link>
        </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  emptyCardDiv(){
      return (
        <NavItem>
        <NavLink>Sepet Boş</NavLink>
      </NavItem>
      )
  }

  render() {
    return <div>{this.props.card.length>0?this.cardDiv():this.emptyCardDiv()}</div>;
  }
}
