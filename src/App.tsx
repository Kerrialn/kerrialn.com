import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Blogs } from "./components/blogs/blogs";
import { Contact } from "./components/contact/contact";
import Blog from "./components/blog/blog";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' render={(props) => <Blogs {...props} />} />
          </Switch>
          <Switch>
            <Route
              exact
              path='/blog/:slug'
              render={(props) => <Blog {...props} />}
            />
          </Switch>
          <Switch>
            <Route
              exact
              path='/contact'
              render={(props) => <Contact {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
