import axios from "../../axios-orders";
import { Component } from "react";
import Order from "../../components/Order/Order";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    axios.get("/orders.json")
      .then(res => {
        const fetchedOrder = [];
        for (let key in res.data) {
          fetchedOrder.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, orders: fetchedOrder });
        console.log(this.state.orders);
      })
      .catch((err) => {
          console.log("Fail");
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order key={order.id} 
                  ingredients={order.ingredients}
                  price={order.parice}/>
        ))}
      </div>
    );
  }
}

export default Orders;
