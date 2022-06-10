import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  FeatureGroup,
} from "react-leaflet";
import "./map.css";
import { jalozaiData as data } from "./jalozaiData";

function Map({
  govt,
  autonomus,
  genPublic,
  minority,
  special,
  retired,
  overseas,
  media,
  others,
  allLayers,
  setAllLayers,
}) {
  const purpleOptions = { color: "purple" };
  const redOptions = { color: "red" };
  const greenOptions = { color: "green" };
  const blueOptions = { color: "blue" };
  const yellowOptions = { color: "yellow" };
  const orangeOptions = { color: "orange" };
  const pinkOptions = { color: "pink" };
  const blackOptions = { color: "black" };
  const greyOptions = { color: "grey" };

  /*   const key =
    "pk.eyJ1IjoiZmFpc2FsYW1pbjAwMSIsImEiOiJjbDN0dG43bnIwMGJlM2pxbDE2aWNhd3VhIn0.Db70DDLg73yQ-lx2b94JkA";

  const openStreet = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const esriMap =
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
 */

  /*   var newArray = [];

  customPolygon.map((e) => {
    newArray.push([e[1], e[0]]);
  });
  console.log(newArray);
 mapbox://styles/faisalamin001/
  */
  const token1 = "cl3tutfan000f14o94ytiz9o6";
  const token2 = "cl3tvluho000n16ofkm1smjho";
  const apikey =
    "pk.eyJ1IjoiZmFpc2FsYW1pbjAwMSIsImEiOiJjbDN0dG43bnIwMGJlM2pxbDE2aWNhd3VhIn0.Db70DDLg73yQ-lx2b94JkA";

  useEffect(() => {
    localStorage.setItem("token", "cl3tutfan000f14o94ytiz9o6");
  }, []);

  const layerHandler = () => {
    if (layer === "cl3tutfan000f14o94ytiz9o6") {
      localStorage.setItem("token", "cl3tvluho000n16ofkm1smjho");
    } else {
      localStorage.setItem("token", "cl3tutfan000f14o94ytiz9o6");
    }
    window.location.reload();
  };
  const layer = localStorage.getItem("token");

  /*  for (let j = 0; j < data.features.length; j++) {
    var coordinates = data.features[j].geometry.coordinates;
    var stringCoordinates = JSON.stringify(coordinates);
    var sliceCoordinates1 = stringCoordinates.slice(3);
    var sliceCoordinates2 = sliceCoordinates1.slice(0, -3);
    var array = JSON.parse("[" + sliceCoordinates2 + "]");
    var a = array;
    var b = [];
    for (var i = 0; i < a.length; i++) {
      b.push([a[i][1], a[i][0]]);
    }
  } */
  return (
    <div>
      <MapContainer className='map' center={[33.9356812, 71.7964263]} zoom={10}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/faisalamin001/${layer}/tiles/256/{z}/{x}/{y}@2x?access_token=${apikey}`}
        />

        {/* Actual Data goes here */}
        {allLayers &&
          govt &&
          data.features
            .filter((item) => item.properties.QUOTA === "GOVT EMPLOYEES")
            .map((item, index) => (
              <FeatureGroup key={index} pathOptions={purpleOptions}>
                <Popup className='popup'>
                  <div className='line'>
                    <p className='name'>cnic</p>
                    <p>{item.properties.NIC}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Name</p>
                    <p>{item.properties.OWNER_NAME}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>FId</p>
                    <p>{item.properties.fid}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Land use</p>
                    <p>{item.properties.Land_Use}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>AREA in</p>
                    <p>{item.properties.Area_In}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Plot</p>
                    <p>{item.properties.plot}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Total area</p>
                    <p>{item.properties.Total_Area}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>status</p>
                    <p>{item.properties.Total_Legal_Status}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Size</p>
                    <p>{item.properties.Size_LxW_Feet}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Street</p>
                    <p>{item.properties.Street}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Category</p>
                    <p>{item.properties.Category}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>QUOTA</p>
                    <p>{item.properties.QUOTA}</p>
                  </div>
                </Popup>
                <Polygon
                  pathOptions={purpleOptions}
                  positions={item.geometry.coordinates}
                ></Polygon>
              </FeatureGroup>
            ))}

        {allLayers &&
          autonomus &&
          data.features
            .filter((item) => item.properties.QUOTA === "AUTONMOUS")
            .map((item, index) => (
              <FeatureGroup key={index} pathOptions={redOptions}>
                <Popup className='popup'>
                  <div className='line'>
                    <p className='name'>cnic</p>
                    <p>{item.properties.NIC}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Name</p>
                    <p>{item.properties.OWNER_NAME}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>FId</p>
                    <p>{item.properties.fid}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Land use</p>
                    <p>{item.properties.Land_Use}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>AREA in</p>
                    <p>{item.properties.Area_In}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Plot</p>
                    <p>{item.properties.plot}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Total area</p>
                    <p>{item.properties.Total_Area}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>status</p>
                    <p>{item.properties.Total_Legal_Status}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Size</p>
                    <p>{item.properties.Size_LxW_Feet}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Street</p>
                    <p>{item.properties.Street}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Category</p>
                    <p>{item.properties.Category}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>QUOTA</p>
                    <p>{item.properties.QUOTA}</p>
                  </div>
                </Popup>
                <Polygon
                  pathOptions={purpleOptions}
                  positions={item.geometry.coordinates}
                ></Polygon>
              </FeatureGroup>
            ))}

        {allLayers &&
          genPublic &&
          data.features
            .filter((item) => item.properties.QUOTA === "GENERAL PUBLIC")
            .map((item, index) => (
              <FeatureGroup key={index} pathOptions={greenOptions}>
                <Popup className='popup'>
                  <div className='line'>
                    <p className='name'>cnic</p>
                    <p>{item.properties.NIC}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Name</p>
                    <p>{item.properties.OWNER_NAME}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>FId</p>
                    <p>{item.properties.fid}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Land use</p>
                    <p>{item.properties.Land_Use}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>AREA in</p>
                    <p>{item.properties.Area_In}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Plot</p>
                    <p>{item.properties.plot}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Total area</p>
                    <p>{item.properties.Total_Area}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>status</p>
                    <p>{item.properties.Total_Legal_Status}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Size</p>
                    <p>{item.properties.Size_LxW_Feet}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Street</p>
                    <p>{item.properties.Street}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Category</p>
                    <p>{item.properties.Category}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>QUOTA</p>
                    <p>{item.properties.QUOTA}</p>
                  </div>
                </Popup>
                <Polygon
                  pathOptions={purpleOptions}
                  positions={item.geometry.coordinates}
                ></Polygon>
              </FeatureGroup>
            ))}

        {allLayers &&
          minority &&
          data.features
            .filter((item) => item.properties.QUOTA === "MINORITY")
            .map((item, index) => (
              <FeatureGroup key={index} pathOptions={blueOptions}>
                <Popup className='popup'>
                  <div className='line'>
                    <p className='name'>cnic</p>
                    <p>{item.properties.NIC}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Name</p>
                    <p>{item.properties.OWNER_NAME}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>FId</p>
                    <p>{item.properties.fid}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Land use</p>
                    <p>{item.properties.Land_Use}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>AREA in</p>
                    <p>{item.properties.Area_In}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Plot</p>
                    <p>{item.properties.plot}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Total area</p>
                    <p>{item.properties.Total_Area}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>status</p>
                    <p>{item.properties.Total_Legal_Status}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Size</p>
                    <p>{item.properties.Size_LxW_Feet}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Street</p>
                    <p>{item.properties.Street}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Category</p>
                    <p>{item.properties.Category}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>QUOTA</p>
                    <p>{item.properties.QUOTA}</p>
                  </div>
                </Popup>
                <Polygon
                  pathOptions={purpleOptions}
                  positions={item.geometry.coordinates}
                ></Polygon>
              </FeatureGroup>
            ))}

        {allLayers &&
          special &&
          data.features
            .filter((item) => item.properties.QUOTA === "SPECIAL PERSON")
            .map((item, index) => (
              <FeatureGroup key={index} pathOptions={yellowOptions}>
                <Popup className='popup'>
                  <div className='line'>
                    <p className='name'>cnic</p>
                    <p>{item.properties.NIC}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Name</p>
                    <p>{item.properties.OWNER_NAME}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>FId</p>
                    <p>{item.properties.fid}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Land use</p>
                    <p>{item.properties.Land_Use}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>AREA in</p>
                    <p>{item.properties.Area_In}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Plot</p>
                    <p>{item.properties.plot}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Total area</p>
                    <p>{item.properties.Total_Area}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>status</p>
                    <p>{item.properties.Total_Legal_Status}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Size</p>
                    <p>{item.properties.Size_LxW_Feet}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Street</p>
                    <p>{item.properties.Street}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Category</p>
                    <p>{item.properties.Category}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>QUOTA</p>
                    <p>{item.properties.QUOTA}</p>
                  </div>
                </Popup>
                <Polygon
                  pathOptions={purpleOptions}
                  positions={item.geometry.coordinates}
                ></Polygon>
              </FeatureGroup>
            ))}

        {allLayers &&
          retired &&
          data.features
            .filter((item) => item.properties.QUOTA === "RETIRED GOV EM")
            .map((item, index) => (
              <FeatureGroup key={index} pathOptions={orangeOptions}>
                <Popup className='popup'>
                  <div className='line'>
                    <p className='name'>cnic</p>
                    <p>{item.properties.NIC}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Name</p>
                    <p>{item.properties.OWNER_NAME}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>FId</p>
                    <p>{item.properties.fid}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Land use</p>
                    <p>{item.properties.Land_Use}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>AREA in</p>
                    <p>{item.properties.Area_In}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Plot</p>
                    <p>{item.properties.plot}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Total area</p>
                    <p>{item.properties.Total_Area}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>status</p>
                    <p>{item.properties.Total_Legal_Status}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Size</p>
                    <p>{item.properties.Size_LxW_Feet}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Street</p>
                    <p>{item.properties.Street}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Category</p>
                    <p>{item.properties.Category}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>QUOTA</p>
                    <p>{item.properties.QUOTA}</p>
                  </div>
                </Popup>
                <Polygon
                  pathOptions={purpleOptions}
                  positions={item.geometry.coordinates}
                ></Polygon>
              </FeatureGroup>
            ))}

        {allLayers &&
          overseas &&
          data.features
            .filter((item) => item.properties.QUOTA === "OVERSEAS")
            .map((item, index) => (
              <FeatureGroup key={index} pathOptions={pinkOptions}>
                <Popup className='popup'>
                  <div className='line'>
                    <p className='name'>cnic</p>
                    <p>{item.properties.NIC}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Name</p>
                    <p>{item.properties.OWNER_NAME}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>FId</p>
                    <p>{item.properties.fid}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Land use</p>
                    <p>{item.properties.Land_Use}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>AREA in</p>
                    <p>{item.properties.Area_In}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Plot</p>
                    <p>{item.properties.plot}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Total area</p>
                    <p>{item.properties.Total_Area}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>status</p>
                    <p>{item.properties.Total_Legal_Status}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Size</p>
                    <p>{item.properties.Size_LxW_Feet}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Street</p>
                    <p>{item.properties.Street}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Category</p>
                    <p>{item.properties.Category}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>QUOTA</p>
                    <p>{item.properties.QUOTA}</p>
                  </div>
                </Popup>
                <Polygon
                  pathOptions={purpleOptions}
                  positions={item.geometry.coordinates}
                ></Polygon>
              </FeatureGroup>
            ))}

        {allLayers &&
          media &&
          data.features
            .filter((item) => item.properties.QUOTA === "MEDIA")
            .map((item, index) => (
              <FeatureGroup key={index} pathOptions={greyOptions}>
                <Popup className='popup'>
                  <div className='line'>
                    <p className='name'>cnic</p>
                    <p>{item.properties.NIC}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Name</p>
                    <p>{item.properties.OWNER_NAME}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>FId</p>
                    <p>{item.properties.fid}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Land use</p>
                    <p>{item.properties.Land_Use}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>AREA in</p>
                    <p>{item.properties.Area_In}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Plot</p>
                    <p>{item.properties.plot}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Total area</p>
                    <p>{item.properties.Total_Area}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>status</p>
                    <p>{item.properties.Total_Legal_Status}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Size</p>
                    <p>{item.properties.Size_LxW_Feet}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Street</p>
                    <p>{item.properties.Street}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Category</p>
                    <p>{item.properties.Category}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>QUOTA</p>
                    <p>{item.properties.QUOTA}</p>
                  </div>
                </Popup>
                <Polygon
                  pathOptions={purpleOptions}
                  positions={item.geometry.coordinates}
                ></Polygon>
              </FeatureGroup>
            ))}

        {allLayers &&
          others &&
          data.features
            .filter((item) => item.properties.QUOTA === null)
            .map((item, index) => (
              <FeatureGroup key={index} pathOptions={blackOptions}>
                <Popup className='popup'>
                  <div className='line'>
                    <p className='name'>cnic</p>
                    <p>{item.properties.NIC}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Name</p>
                    <p>{item.properties.OWNER_NAME}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>FId</p>
                    <p>{item.properties.fid}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Land use</p>
                    <p>{item.properties.Land_Use}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>AREA in</p>
                    <p>{item.properties.Area_In}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Plot</p>
                    <p>{item.properties.plot}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Total area</p>
                    <p>{item.properties.Total_Area}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>status</p>
                    <p>{item.properties.Total_Legal_Status}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Size</p>
                    <p>{item.properties.Size_LxW_Feet}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>Street</p>
                    <p>{item.properties.Street}</p>
                  </div>

                  <div className='line'>
                    <p className='name'>Category</p>
                    <p>{item.properties.Category}</p>
                  </div>
                  <div className='line'>
                    <p className='name'>QUOTA</p>
                    <p>{item.properties.QUOTA}</p>
                  </div>
                </Popup>

                <Polygon
                  pathOptions={purpleOptions}
                  positions={item.geometry.coordinates}
                ></Polygon>
              </FeatureGroup>
            ))}
        {/* Actual Data goes here */}

        <Marker position={[34, 71]}>
          <Popup className='popup'>
            <div className='line'>
              <p className='name'>id</p>
              <p>007</p>
            </div>
            <div className='line'>
              <p className='name'>Name</p>
              <p>John doe</p>
            </div>
            <div className='line'>
              <p className='name'>Size</p>
              <p>7890</p>
            </div>
            <div className='line'>
              <p className='name'>Road</p>
              <p>Main road</p>
            </div>
            <div className='line'>
              <p className='name'>Street</p>
              <p>St 007</p>
            </div>
            <div className='line'>
              <p className='name'>Plot no</p>
              <p>95</p>
            </div>
            <div className='line'>
              <p className='name'>Category</p>
              <p>commercial</p>
            </div>
            <div className='line'>
              <p className='name'>Total Area</p>
              <p>1,007</p>
            </div>
            <div className='line'>
              <p className='name'>cnic</p>
              <p>123457-21</p>
            </div>
          </Popup>
        </Marker>
        <div className='btns'>
          <button onClick={() => setAllLayers(!allLayers)}>Toggle Layer</button>
          <br />
          <button onClick={layerHandler}>Change Basemap</button>
        </div>
      </MapContainer>
    </div>
  );
}

export default Map;
