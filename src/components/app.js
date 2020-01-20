import React, { Component } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Icons from "./icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";




export default class App extends Component {
  render() {
    return (
      <div className="app">
        <input type="Phone, email, or username" placeholder="Phone, email, or username"></input>
        <input type="password" placeholder="Password"></input>
        <button>Log in</button>

        <div>
          <FontAwesomeIcon icon={["fab", "twitter"]} />

        </div>
      </div>
    );
  }
}



// create footer element with all keywords
// create login input for username and password $
// login button $
// twitter logo with text
// sign up and login buttons
// font awesome icons and widgets
// left side background