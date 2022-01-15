import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increaseByTwo } from "../redux/actions/counterActions";

class IncreaseByTwo extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseByTwo());
          }}
        >
          +2
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwo, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseByTwo);
