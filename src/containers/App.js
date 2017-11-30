import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {} from '../actions/';
import Main from '../components/App';

class App extends Component {
  render() {
    const { actions } = this.props;
    return <Main actions={actions} />;
  }
}

App.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  const props = {};
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
