import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { decreaseByTwo } from "../redux/actions/counterActions";

class DecreaseByTwo extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(decreaseByTwo());
          }}
        >
          -2
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decreaseByTwo, dispatch) };
}

export default connect(mapDispatchToProps)(DecreaseByTwo);
