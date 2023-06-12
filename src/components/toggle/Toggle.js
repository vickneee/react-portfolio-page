import React from 'react';

const Toggle = ({ checked, onChange }) => {
    return (
        <label className="toggle-switch">
            <input
                type="button"
                checked={checked}
                onChange={onChange}
            />
            <span className="toggle-slider"></span>
        </label>
    );
};

export default Toggle;



