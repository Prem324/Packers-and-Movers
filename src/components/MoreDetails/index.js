import React from "react";
import "./index.css";

const MoreDetails = (props) => {
  const { moreDetails } = props;
  const {
    new_floor_no,
    old_floor_no,
    old_elevator_availability,
    new_elevator_availability,
    old_parking_distance,
    new_parking_distance,
    items,
  } = moreDetails;
  const inventory = items.inventory;
  return (
    <div className="view-more-details-container">
      <div className="additional-info-container">
        <div className="additional-info-section">
          <h1 className="section-heading">Additional Information</h1>
          <p className="data-text">Test Data</p>
        </div>
        <button className="edit-button">Edit Additional Info</button>
      </div>
      <div className="house-details-container">
        <div className="house-details-section">
          <h1 className="section-heading">House Details</h1>
          <button className="edit-button">Edit House Details</button>
        </div>
        <div className="house-details">
          <h1 className="sub-heading">Existing House Details</h1>
          <ul className="house-details-list">
            <li className="house-details-item">
              <p className="data-text-heading">Floor No.</p>
              <p className="data-text">{old_floor_no}</p>
            </li>
            <li className="house-details-item">
              <p className="data-text-heading">Elevator Available</p>
              <p className="data-text">{old_elevator_availability}</p>
            </li>
            <li className="house-details-item">
              <p className="data-text-heading">
                Distance from Elevator / Staircase to truck{" "}
              </p>
              <p className="data-text">{old_parking_distance}</p>
            </li>
          </ul>
        </div>

        <div className="house-details">
          <h1 className="sub-heading">New House Details</h1>
          <ul className="house-details-list">
            <li className="house-details-item">
              <p className="data-text-heading">Floor No.</p>
              <p className="data-text">{new_floor_no}</p>
            </li>
            <li className="house-details-item">
              <p className="data-text-heading">Elevator Available</p>
              <p className="data-text">{new_elevator_availability}</p>
            </li>
            <li className="house-details-item">
              <p className="data-text-heading">
                Distance from Elevator / Staircase to truck{" "}
              </p>
              <p className="data-text">{new_parking_distance}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="inventory-details-container">
        <div className="inventory-details-section">
          <h1 className="section-heading">Inventory Details</h1>
          <button className="edit-button">Edit Inventory</button>
        </div>
        <ul className="inventory-details-list">
          {inventory.map((eachInventory) => (
            <div className="inventory-details-item" key={eachInventory.id}>
              <p className="inventory-name">
                {eachInventory.displayName}
                <span className="category-length">
                  {eachInventory.category.length}
                </span>
              </p>
              <div className="inventories-list">
                {eachInventory.category.map((eachCategory) => (
                  <div key={eachCategory.id}>
                    <p className="category-name">{eachCategory.displayName}</p>
                    <div>
                      {eachCategory.items.map((eachItem) => (
                        <div key={eachItem.id}>
                          {eachItem.qty !== 0 && (
                            <div className="category-item">
                              <div>
                                <p className="item-name">
                                  {eachItem.displayName}
                                </p>
                                {eachItem.type.map((eachType) => (
                                  <div key={eachType.id}>
                                    {eachType.selected === true && (
                                      <p className="item-type">
                                        {eachType.option}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                              <p className="item-quantity">{eachItem.qty}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default MoreDetails;
