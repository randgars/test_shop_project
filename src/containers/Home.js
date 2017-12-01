import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  addShop
} from '../actions/';
import Main from '../components/Home';

class Home extends Component {
  render() {
    const { shops, actions } = this.props;
    return <Main actions={actions} shops={shops}/>;
  }
}

Home.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  const props = {
    shops: state.shops.shops
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {
    addShop
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
