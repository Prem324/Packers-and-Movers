import { Component } from "react";
import React from "react";
import "./index.css";
class MyMoves extends Component {
  state = { dataList: [] };
  componentDidMount() {
    this.getCustomerEstimateFlow();
  }

  getCustomerEstimateFlow = async () => {
    const response = await fetch(
      "https://apis2.ccbp.in/packers-and-movers/packers-and-movers-details"
    );
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      this.setState({ dataList: data.Customer_Estimate_Flow });
    }
  };

  render() {
    const { dataList } = this.state;
    console.log(dataList);
    return (
      <div className="my-moves-container">
        <h1>My Moves</h1>
        <div className="moves-list-container">
          {dataList.map((eachItem) => (
            <div key={eachItem.estimate_id}>
              <div className="address-details-container">
                <p>{eachItem.moving_from}</p>
                <p>{eachItem.moving_to}</p>
                <p>{eachItem.estimate_id}</p>
              </div>
              <div className="move-details-container">
                <p>{eachItem.property_size}</p>
                <p>{eachItem.total_size}</p>
                <p>{eachItem.distance}</p>
                <p>{eachItem.date_created}</p>
                <p>is flexible</p>
                <button>View move details</button>
                <button>Quotes Awaiting</button>
              </div>
              <p>
                Disclaimer:{" "}
                <span>
                  Please update your move date before two days of shifting
                </span>
              </p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MyMoves;
