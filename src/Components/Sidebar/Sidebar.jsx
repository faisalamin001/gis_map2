import React from "react";
import { IoMdSearch } from "react-icons/io";
import "./sidebar.css";
import Search from "./Search";

function Sidebar({
  setGovt,

  govt,

  setAutonomus,
  setGenPublic,
  setMinority,
  setSpecial,
  setRetired,
  setOverseas,
  setMedia,
  setOthers,
  autonomus,
  genPublic,
  minority,
  special,
  retired,
  overseas,
  media,
  others,
}) {
  return (
    <div className='side'>
      {/*  <div className='form'>
        <div className='icon'>
          <IoMdSearch />
        </div>
        <input type='text' placeholder='Search...' />
      </div>
      <br /> */}
      <Search />
      <br />

      <div className='filter'>
        <h2>Property Filters</h2>
        <br />
        <div className='filters'>
          <div className='filter1'>
            <div className='select'>
              <input
                type='checkbox'
                defaultChecked
                id='govt'
                onChange={() => setGovt(!govt)}
                name='govt'
              />
              <label for='govt'>Government</label>
            </div>

            <div className='select'>
              <input
                type='checkbox'
                defaultChecked
                onChange={() => setAutonomus(!autonomus)}
                id='auto'
                name='auto'
              />
              <label for='auto'> Autonomous</label>
            </div>

            <div className='select'>
              <input
                type='checkbox'
                defaultChecked
                onChange={() => setGenPublic(!genPublic)}
                id='public'
                name='public'
              />
              <label for='public'> G Public</label>
            </div>

            <div className='select'>
              <input
                type='checkbox'
                defaultChecked
                onChange={() => setMinority(!minority)}
                id='min'
                name='min'
              />
              <label for='min'> Minority</label>
            </div>

            <div className='select'>
              <input
                type='checkbox'
                defaultChecked
                onChange={() => setSpecial(!special)}
                id='special'
                name='special'
              />
              <label for='special'> Special</label>
            </div>
          </div>
          <div className='filter2'>
            <div className='select'>
              <input
                type='checkbox'
                defaultChecked
                onChange={() => setRetired(!retired)}
                id='ret'
                name='ret'
              />
              <label for='ret'> Retired</label>
            </div>

            <div className='select'>
              <input
                type='checkbox'
                defaultChecked
                onChange={() => setOverseas(!overseas)}
                id='over'
                name='over'
              />
              <label for='over'> Overseas </label>
            </div>
            <div className='select'>
              <input
                type='checkbox'
                defaultChecked
                onChange={() => setMedia(!media)}
                id='media'
                name='media'
              />
              <label for='media'> Media</label>
            </div>

            <div className='select'>
              <input
                type='checkbox'
                defaultChecked
                onChange={() => setOthers(!others)}
                id='other'
                name='other'
              />
              <label for='other'> Others</label>
            </div>
          </div>
        </div>
      </div>
      {/* FILTER ENDS */}
      <div className='legend-sec'>
        <h2>Legends</h2>
        <br />
        <div className='legends'>
          <div className='leg1'>
            <p>
              <span className='blu1' style={{ background: "#2F8F9D" }}></span>{" "}
              Parking
            </p>
            <p>
              <span className='blu1' style={{ background: "#3BACB6" }}></span>{" "}
              Educational
            </p>
            <p>
              <span className='blu1' style={{ background: "#F32424" }}></span>{" "}
              Residential
            </p>
            <p>
              <span className='blu1' style={{ background: "#82DBD8" }}></span>{" "}
              Commercial
            </p>
            <p>
              <span className='blu1' style={{ background: "#F66B0E" }}></span>{" "}
              Religious
            </p>
          </div>
          <div className='leg2'>
            <p>
              <span className='gre1' style={{ background: "#242F9B" }}></span>{" "}
              Public
            </p>
            <p>
              <span className='gre1' style={{ background: "#646FD4" }}></span>{" "}
              Buildings
            </p>
            <p>
              <span className='gre1' style={{ background: "#EC994B" }}></span>{" "}
              Grave yard
            </p>
            <p>
              <span className='gre1' style={{ background: "#F806CC" }}></span>{" "}
              Health
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
