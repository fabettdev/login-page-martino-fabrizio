import React from "react";
import PropTypes from 'prop-types';
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
            </select>
        </div>
    )
}

Select.propTypes = {
    label: PropTypes.string,
    selectOptions: PropTypes.array.isRequired,
}

export default Select;