import React from 'react/addons'

import {Link} from 'react-router'

var LinkTo = React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    target: React.PropTypes.string.isRequired
  },
  render: function() {
    var cx = React.addons.classSet;
    var target = this.props.target;
    return (
      <Link
        className={cx("ns-LinkTo", "ns-LinkTo--" + this.props.target)}
        to={target}>
        {this.props.children}
      </Link>
    );
  }
});

var Home = React.createClass({
  render: function() {
    var linkName = this.props.children || "Home";
    return <LinkTo target="home">{linkName}</LinkTo>;
  }
});

var Portfolio = React.createClass({
  render: function() {
    var linkName = this.props.children || "Portfolio";
    return <LinkTo target="portfolio">{linkName}</LinkTo>;
  }
});

var HealthFitness = React.createClass({
  render: function() {
    var linkName = this.props.children || "Health Fitness";
    return <LinkTo target="healthfitness">{linkName}</LinkTo>;
  }
});

var Mindfulness = React.createClass({
  render: function() {
    var linkName = this.props.children || "Mindfulness";
    return <LinkTo target="mindfulness">{linkName}</LinkTo>;
  }
});

var Chess = React.createClass({
  render: function() {
    var linkName = this.props.children || "Chess";
    return <LinkTo target="chess">{linkName}</LinkTo>;
  }
});

var Background = React.createClass({
  render: function() {
    var linkName = this.props.children || "Professional Background";
    return <LinkTo target="background">{linkName}</LinkTo>;
  }
});

var External = React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    href: React.PropTypes.string.isRequired
  },
  render: function() {
    var linkName = this.props.children || this.props.href;
    return <a href={this.props.href}>X::{linkName}</a>;
  }
});

export default {
  LinkTo: LinkTo,
  Home: Home,
  Background: Background,
  Portfolio: Portfolio,
  HealthFitness: HealthFitness,
  Mindfulness: Mindfulness,
  Chess: Chess,
  External: External
};
