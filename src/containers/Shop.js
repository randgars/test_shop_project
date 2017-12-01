import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  getShop,
  editShop,
  editProduct
} from '../actions/';
import Main from '../components/Shop';

import history from '../sources/history';

class Shop extends Component {
  componentDidMount() {
    const {match, shops, actions, location} = this.props;
    if (!shops || shops.length === 0) {
      return history.push('/');
    }
    const shopId = +match.params.id;
    actions.getShop(shops, shopId);
  }
  render() {
    const {shop, actions, shops} = this.props;
    return <Main shop={shop} shops={shops} actions={actions}/>;
  }
}

Shop.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  const props = {
    shops: state.shops.shops,
    shop: state.shops.shop
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {
    getShop,
    editShop,
    editProduct
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shop));
