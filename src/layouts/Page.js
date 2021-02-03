import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Page.css";

import HomePage from "../components/HomePage.js";
import PostList from "../components/PostList.js";
import Contact from "../components/Contact.js";
import AboutUs from "../components/AboutUs.js";
import ErrorPage from "../components/ErrorPage.js";
import PostDetails from "../components/PostDetails.js";

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/postlist" component={PostList} />
      <Route path="/contact" component={Contact} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/post/:id" component={PostDetails} />
      <Route path="" component={ErrorPage} />
    </Switch>
  );
};

export default Page;
