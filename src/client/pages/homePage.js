import React, {Component} from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import {Link, NavLink} from 'react-router-dom';

class HomePage extends Component {

    head(){
      return (
        <Helmet bodyAttributes={{class: "homePage"}}>
          <title>{`Home Page - React Starter Kit`}</title>
        </Helmet>
      );
    }

    render() {
        return (
            <div>hello world!!!!</div>
      );
    }
  }

export default {
  component: HomePage
};