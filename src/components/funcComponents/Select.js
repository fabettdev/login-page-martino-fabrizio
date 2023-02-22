import React from "react";
import './select.css';
import "./input.css";

function Select(props) {

    function mapOptions(item, key) {
        return <option value={item} key={`${key}-${Math.random()}`}>{item}</option>
    }

    return (
        <div className="select">
            <span className="label-select">{props.label}</span>
            <select>
                <option defaultValue="">None</option>
                {props.selectOptions.map(mapOptions)}
            </select >
            <span className="focus-input" data-icon={props.icon}></span>
        </div>
    )
}

export default Select;