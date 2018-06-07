import React, { Component } from 'react';
import Menu from './compontents/menu';
import Main from './compontents/main';
import Content from './compontents/content';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import actions from './action/action';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
  }
  static contextTypes = {
      store: PropTypes.object,
  }
  componentDidMount () {
    let state = this.context.store.getState();
    this.setState({ status: state.toggleReducer })
  }
  render() {
    
    return [
      <Menu />,
      <Main />,
      <Content status = {this.props.status} nextAction={this.props.actions}></Content>
    ];
  }
}


const mapStateToProps = state => ({
  status: state.toggleReducer
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);