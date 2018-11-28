import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
/* import geolocation from "react-geolocation"; */
import { geolocated } from "react-geolocated";
import config from "../config";

class HomePage extends Component {
  state = {
    locations: [], //vs. Location?? "locations" makes it show up on console
    searchTerm: "",
    plastics: false,
    paper: false,
    glass: false,
    cardboard: false,
    metal: false,
    electronics: false,
    aluminum_cans: false,
    chemicals: false,
    yard_waste: false
  };

  componentDidMount() {
    let _url = `${config.API_URL}`;
    console.log({ props: this.props });
    if (this.props.match.params.searchTerm) {
      _url += `/search`;
    } else {
      _url += `/locations`;
    }
    console.log("GETTING");

    axios
      .get(_url, {
        searchTerm: this.props.match.params.searchTerm,
        plastics: this.state.plastics,
        paper: this.state.paper,
        metal: this.state.metal,
        electronics: this.state.electronics,
        glass: this.state.glass,
        chemicals: this.state.chemicals,
        yard_waste: this.state.yard_waste,
        cardboard: this.state.cardboard,
        aluminum_cans: this.state.aluminum_cans
      })
      .then(json => {
        console.log({ json });
        this.setState({
          locations: json.data
        });
      });
  }

  handleMaterialChoice = e => {
    this.setState({ [e.target.value.toLowerCase()]: e.target.checked }, () => {
      // TODO: we need some logic to determine which endpoint to hit
      // track which button was clicked last
      if (this.state.lastButtonClicked === "nearby") {
        this.getNearby();
      } else if (this.state.lastButtonClicked === "searchTerm") {
        this.search();
      }
    });
    console.log(
      `Setting ${e.target.value.toLowerCase()} to ${e.target.checked}`
    );
  };

  handleSearchTermUpdate = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  search = e => {
    if (e) {
      e.preventDefault();
    }
    axios
      .get(`${config.API_URL}/search`, {
        params: {
          searchTerm: this.state.searchTerm,
          plastics: this.state.plastics,
          paper: this.state.paper,
          metal: this.state.metal,
          electronics: this.state.electronics,
          glass: this.state.glass,
          chemicals: this.state.chemicals,
          yard_waste: this.state.yard_waste,
          cardboard: this.state.cardboard,
          aluminum_cans: this.state.aluminum_cans
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          locations: response.data,
          lastButtonClicked: "searchTerm"
        });
      });
  };

  getNearby = () => {
    console.log("getting nearby");
    axios
      .get(`${config.API_URL}/search/nearby`, {
        params: {
          lat: this.props.coords.latitude,
          lng: this.props.coords.longitude,
          plastics: this.state.plastics,
          paper: this.state.paper,
          metal: this.state.metal,
          electronics: this.state.electronics,
          glass: this.state.glass,
          chemicals: this.state.chemicals,
          yard_waste: this.state.yard_waste,
          cardboard: this.state.cardboard,
          aluminum_cans: this.state.aluminum_cans
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          locations: response.data,
          lastButtonClicked: "nearby"
        });
      });
  };
  popupFunction = () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  };

  render() {
    return (
      <div>
        {/* <h1>{this.state.lastButtonClicked}</h1> */}
        <form onSubmit={this.search}>
          <div className="more-info">
            For more information about Pinellas County Recycling, {"  "}
            <a target="_blank" href="https://www.stpete.org/recycle">
              {"  "}
              <u>click here</u>
            </a>
          </div>
          <div className="field has-addons">
            <div className="control">
              <strong>
                <input
                  className="searchBar"
                  type="search"
                  onChange={this.handleSearchTermUpdate}
                  placeholder="Find a recycling center..."
                />{" "}
              </strong>
            </div>
            {/*  <div className="control" /> */}
          </div>{" "}
          <div className="looking-to-recycle">
            <strong>
              <u>I'm looking to recycle:</u>
            </strong>
          </div>
          <br />
          <div className="checkbox-filter">
            <div className="checkbox">
              <input
                type="checkbox"
                value="plastics"
                id="plasticsCheckbox"
                /* checked={this.state.plastics} */
                onChange={this.handleMaterialChoice}
              />{" "}
              <label htmlFor="plasticsCheckbox">Plastics</label>
              <br />
              <input
                type="checkbox"
                value="paper"
                id="paperCheckbox"
                /* checked={this.state.paper} */
                onChange={this.handleMaterialChoice}
              />{" "}
              <label htmlFor="paperCheckbox">Paper</label>
              <br />
              <input
                type="checkbox"
                value="glass"
                id="glassCheckbox"
                /* checked={this.state.glass} */
                onChange={this.handleMaterialChoice}
              />{" "}
              <label htmlFor="glassCheckbox"> Glass</label>
              <br />
              <input
                type="checkbox"
                value="cardboard"
                id="cardboardCheckbox"
                /* checked={this.state.cardboard} */
                onChange={this.handleMaterialChoice}
              />{" "}
              <label htmlFor="cardboardCheckbox">Cardboard</label>
              <br />
              <input
                type="checkbox"
                value="aluminum_cans"
                id="aluminumCansCheckbox"
                /* checked={this.state.aluminum_cans} */
                onChange={this.handleMaterialChoice}
              />{" "}
              <label htmlFor="aluminumCansCheckbox">Aluminum Cans</label>
              <br />
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                value="electronics"
                id="electronicsCheckbox"
                /* checked={this.state.electronics} */
                onChange={this.handleMaterialChoice}
              />{" "}
              <label htmlFor="electronicsCheckbox">Electronics</label>
              <br />
              <input
                type="checkbox"
                value="metal"
                id="metalCheckbox"
                /* checked={this.state.metal} */
                onChange={this.handleMaterialChoice}
              />{" "}
              <label htmlFor="metalCheckbox">Metal</label>
              <br />
              <input
                type="checkbox"
                value="chemicals"
                id="chemicalsCheckbox"
                /*  checked={this.state.chemicals} */
                onChange={this.handleMaterialChoice}
              />{" "}
              <label htmlFor="chemicalsCheckbox">Chemicals</label>
              <br />
              <input
                type="checkbox"
                value="yard_waste"
                id="yardWasteCheckbox"
                /* checked={this.state.yard_waste} */
                onChange={this.handleMaterialChoice}
              />{" "}
              <label htmlFor="yardWasteCheckbox">Yard Waste</label>
            </div>
          </div>
          <div className="button-div">
            {/* <img
              className="info-img"
              id="myPopup"
              onClick="popupFunction()"
              src="./info.png"
              alt=""
            /> */}
            <button className="search-button button is-info">
              Get Recycling!
            </button>
            <img
              className="compass-img"
              onClick={this.getNearby}
              src="./compass.png"
              alt="Recycling centers near me"
            />
          </div>
        </form>
        <section className="recycle-me-list">
          <header className="results">
            Found <u>{this.state.locations.length}</u> recycling centers
          </header>
          <div className="card">
            {this.state.locations.map(center => {
              return (
                <div className="card-content" key={center.id}>
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src="./pinellas.png" alt="Placeholder" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{center.centerName}</p>
                      <p className="subtitle is-6">
                        {/*<PhoneNumber number="(727)-464-7500" />*/}
                        <a
                          onClick={this._hideMenu}
                          className="linkContact"
                          href="tel://17276199736"
                        >
                          <li className="menu-contact">{center.phoneNumber}</li>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="content">
                    <ul>
                      <li className="addresses">
                        <a
                          onClick={this._hideMenu}
                          className="linkContact"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://www.google.com/maps/search/?api=1&query=${
                            center.address
                          }+${center.city}+${center.state}+${center.zip}`}
                        >
                          <p>{center.address}</p>

                          <p>
                            {center.city}, {center.state} {center.zip}
                          </p>
                        </a>
                      </li>
                      {/* hyperlinking this address out to Google Maps */}
                      {/* ..adding city to search?? */}
                      <li>{center.weekdayHours}</li>
                      <li>{center.weekendHours}</li>
                      <li>
                        {""}
                        <strong>This center recycles:</strong>
                        {center.locationMaterials.map(material => {
                          return (
                            <div key={material.id}>
                              {material.material.materialType}
                            </div>
                          );
                        })}
                      </li>
                    </ul>
                    <br />
                    {/* <a href="/details">More details</a> */}
                    <Link to={`/location/${center.id}`}>More Details</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(HomePage);
