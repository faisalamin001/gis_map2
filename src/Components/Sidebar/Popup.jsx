import React from "react";
import { Popup } from "react-leaflet";
import "../Map/map.css";

function PopupContainer({ name }) {
  return (
    <div>
      <Popup className='popup'>
        <div className='line'>
          <p className='name'>Id</p>
          <p>place.id</p>
        </div>
        <div className='line'>
          <p className='name'>Name</p>
          <p>{name}</p>
        </div>
        <div className='line'>
          <p className='name'>Size</p>
          <p>place.elevationMeters</p>
        </div>
        <div className='line'>
          <p className='name'>City</p>
          <p>place.address.city</p>
        </div>
        <div className='line'>
          <p className='name'>Street</p>
          <p>place.address.street</p>
        </div>
        <div className='line'>
          <p className='name'>Plot no</p>
          <p>place.address.regionId</p>
        </div>
        <div className='line'>
          <p className='name'>Category</p>
          <p>commercial</p>
        </div>
        <div className='line'>
          <p className='name'>Total Area</p>
          <p>place.powerKilowatt</p>
        </div>
        <div className='line'>
          <p className='name'>cnic</p>
          <p>place.dateOpened</p>
        </div>
      </Popup>
    </div>
  );
}

export default PopupContainer;
