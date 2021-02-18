import React, { Component } from "react";
import axios from "../../../axios-orders";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    const order = {
      ingredients: this.props.ingredients,
      parice: this.props.price,
      costumer: {
        name: "Bahadir Omer",
        address: {
          street: "Teststreet 1",
          zipCode: "32442",
          country: "Germany",
        },
        email: "bahadir0646@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={classes.Input}
            type="text"
            name="email"
            placeholder="Your Mail"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Your Name"
          />
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="Postal Code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}
export default ContactData;
