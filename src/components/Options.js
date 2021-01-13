import React from "react";
import Option from "./Option";
const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button onClick={props.handleDeleteOptions} className="button--link">
        Remove All
      </button>
    </div>

    {props.options.length === 0 && (
      <p className="widget__message">Please Add Options to get start.</p>
    )}
    {props.options.map((e, i) => (
      <Option
        key={i}
        optionText={e}
        handleDeleteOption={props.handleDeleteOption}
        count={i + 1}
      />
    ))}
  </div>
);
export default Options;
