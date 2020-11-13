import React, { Component } from "react";
import { connect } from "react-redux";
// import getStarted from '../assets/img/getStarted.svg'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .getStarted-wrap {
    width: 600px;
    background: #2d3142;
    margin: 160px auto;
    padding: 30px 20px;
    color: white;
    border-radius: 10px;
  }

  .button {
    border-radius: 10px;
    display: inline-flex;
    height: 40px;
    width: 150px;
    border: 2px solid #bfc0c0;
    margin: 20px 20px 20px 20px;
    color: #bfc0c0;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.8em;
    letter-spacing: 1.5px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  #button-getStarted {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  #button-getStarted a {
    position: relative;
    left: 0;
    transition: all 0.35s ease-Out;
  }

  #dub-arrow {
    width: 100%;
    height: 100%;
    background: #bfc0c0;
    left: -200px;
    position: absolute;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.35s ease-Out;
    bottom: 0;
  }

  #button-getStarted img {
    width: 20px;
    height: auto;
  }

  #button-getStarted:hover #dub-arrow {
    left: 0;
  }

  #button-getStarted:hover a {
    left: 150px;
  }

  @media screen and (min-width: 1000px) {
    h1 {
      font-size: 2.2em;
    }
    #container {
      width: 50%;
    }
  }
`;

class HomeContainer extends Component {
  render() {
    return (
      <Styles>
        <div className="getStarted-wrap text-center">
          <h1>Contact People</h1>
          <p>This is a simple CRUD by framework ReactJS and Redux.</p>
          <Link to={"/home"}>
            <div class="button" id="button-getStarted">
              <div id="dub-arrow">
                <img
                  src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"
                  alt=""
                />
              </div>
              Let's Go!
            </div>
          </Link>
        </div>
      </Styles>
    );
  }
}

export default connect()(HomeContainer);
