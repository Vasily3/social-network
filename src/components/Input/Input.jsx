import React from "react";
import cn from "classnames"

const Input = (props) => {
    return (
        <div className={cn("field", { "field--checkbox": props.type === "checkbox"} )} >
            <label htmlFor={props.id}>{props.labelText}</label>
            <input
                id={props.id}
                name={props.name}
                type={props.type}
                onChange={props.onChange}
                value={props.value? props.value : null}
                placeholder={props.placeholder? props.placeholder : null}
                checked={props.checked}
                autoFocus={props.autoFocus}
            />
        </div>
    );
};

export default Input;
