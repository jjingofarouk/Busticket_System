import React from 'react';
import './Sidebar.css'; // Create this CSS file for Sidebar specific styles

const Sidebar = () => {
  return (
    <div className="left_section">
      <h6 id="p">FILTER</h6>
      <hr />
      <div id="heading_line" className="filter_div">
        <p id="p1">Live Tracking (15)</p>
      </div>
      <hr />
      <div className="filter_div">
        <p id="p2">DEPARTURE TIME</p>
        <label>
          <input type="checkbox" value="" id="before-6am" />
          Before 6 am (<span id="span1">0</span>)
        </label>
        <label>
          <input type="checkbox" value="" id="morning" />
          6 am to 12 pm (<span id="span2">0</span>)
        </label>
        <label>
          <input type="checkbox" value="" id="evening" />
          12 pm to 6 pm (<span id="span3">0</span>)
        </label>
        <label>
          <input type="checkbox" value="" />
          After 6 pm (0)
        </label>
      </div>
      <div className="filter_div">
        <p id="p2">BUS TYPES</p>
        <label>
          <input type="checkbox" value="" id="seater" />
          SEATER (<span id="span4">0</span>)
        </label>
        <label>
          <input type="checkbox" value="" id="sleeper" />
          SLEEPER (<span id="span5">0</span>)
        </label>
        <label>
          <input type="checkbox" value="" id="ac" />
          AC (23)
        </label>
      </div>
      <div className="filter_div">
        <p id="p2">SEAT AVAILABILITY</p>
        <label>
          <input type="checkbox" value="" />
          Single Seats (9)
        </label>
      </div>
      <div className="filter_div">
        <p id="p2">ARRIVAL TIME</p>
        <label>
          <input type="checkbox" value="" />
          Before 6 am (5)
        </label>
        <label>
          <input type="checkbox" value="" />
          6 am to 12 pm (18)
        </label>
        <label>
          <input type="checkbox" value="" />
          12 pm to 6 pm (0)
        </label>
        <label>
          <input type="checkbox" value="" />
          After 6 pm (0)
        </label>
      </div>
      <div className="points_div">
        <p id="p3">BOARDING POINT</p>
        <label>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="BOARDING POINT" />
        </label>
      </div>
      <div className="points_div">
        <p id="p3">DROPPING POINT</p>
        <label>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="DROPPING POINT" />
        </label>
      </div>
      <div className="points_div">
        <p id="p3">OPERATOR</p>
        <label>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="OPERATOR" />
        </label>
      </div>
      <div className="points_div">
        <p id="p3">AMENITIES</p>
        <ul className="amenties">
          <li>WIFI (23)</li>
          <li>Water Bottle (23)</li>
          <li>Blankets (4)</li>
          <li>Charging Point (4)</li>
          <li>Movie (0)</li>
          <li>Track My Bus (4)</li>
          <li>Emergency Contact Nu... (1)</li>
          <li>Toilet (1)</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
