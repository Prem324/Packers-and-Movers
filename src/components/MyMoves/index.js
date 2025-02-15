import { Component } from "react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { GiPathDistance } from "react-icons/gi";
import { FaBoxes } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";
import { TiPencil } from "react-icons/ti";
import { IoWarning } from "react-icons/io5";
import MoreDetails from "../MoreDetails";
import Loader from "../Loader";
import "./index.css";

class MyMoves extends Component {
  state = { dataList: [], expandedId: null, isChecked: true, isLoading: true };
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
      this.setState({
        dataList: data.Customer_Estimate_Flow,
        isLoading: false,
      });
    }
  };

  onViewMore = (id) => {
    const { expandedId } = this.state;
    if (expandedId === id) {
      this.setState({ expandedId: null });
    } else {
      this.setState({ expandedId: id });
    }
  };

  onChecked = () => {
    this.setState({ isChecked: false });
  };

  render() {
    const { dataList, expandedId, isChecked, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="my-moves-container">
            <h1 className="my-moves-heading">My Moves</h1>
            <div className="moves-list-container">
              {dataList.map((eachItem) => (
                <div key={eachItem.estimate_id}>
                  <ul className="address-details-container">
                    <li className="from-address-item">
                      <p className="address-item-title">From</p>
                      <p className="from-address">{eachItem.moving_from}</p>
                    </li>
                    <li className="address-item">
                      <FaArrowRightLong className="arrow-icon" />
                    </li>
                    <li className="to-address-item">
                      <p className="address-item-title">To</p>
                      <p className="to-address">{eachItem.moving_to}</p>
                    </li>
                    <li className="request-id-item">
                      <p className="address-item-title">Request#</p>
                      <p className="request-id">{eachItem.estimate_id}</p>
                    </li>
                  </ul>
                  <ul className="move-details-container">
                    <li className="detail-item">
                      <IoMdHome className="icon" />
                      <p className="detail-text">{eachItem.property_size}</p>
                    </li>
                    <li className="detail-item">
                      <FaBoxes className="icon" />
                      <p className="detail-text">{eachItem.total_items}</p>
                    </li>
                    <li className="detail-item">
                      <GiPathDistance className="icon" />
                      <p className="detail-text">{eachItem.distance}</p>
                    </li>
                    <li className="detail-item">
                      <TbCalendarTime className="icon" />
                      <p className="detail-text">{eachItem.date_created}</p>
                      <TiPencil className="pencil-icon" />
                    </li>
                    <li className="detail-item">
                      <input
                        type="checkbox"
                        onChange={this.onChecked}
                        value={isChecked}
                        checked
                      />
                      Is flexible
                    </li>
                    <li className="buttons-container">
                      <button
                        className="view-more-button"
                        onClick={() => this.onViewMore(eachItem.estimate_id)}
                      >
                        View move details
                      </button>
                      <button className="quotes-button">Quotes Awaiting</button>
                    </li>
                  </ul>
                  <p className="disclaimer-container">
                    <IoWarning className="disclaimer-icon" />
                    Disclaimer:{" "}
                    <span className="disclaimer-text">
                      Please update your move date before two days of shifting
                    </span>
                  </p>
                  {eachItem.estimate_id !== expandedId && <hr />}
                  {eachItem.estimate_id === expandedId && (
                    <MoreDetails moreDetails={eachItem} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default MyMoves;
