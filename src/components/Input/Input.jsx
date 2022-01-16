import React from "react";
import cn from "classnames"

const Input = ({type, id, labelText, name, onChange, value, placeholder, checked, autoFocus}) => {
    return (
        <div className={cn("field", {"field--checkbox": type === "checkbox"})} >
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                name={name}
                type={type}
                onChange={onChange}
                value={value? value : null}
                placeholder={placeholder? placeholder : null}
                checked={checked}
                autoFocus={autoFocus}
            />
        </div>
    );
};

export default Input;
