import React, { VFC } from "react";
import cn from "classnames"

interface TInput {
    type: string,
    id: string,
    labelText?: string,
    name: string,
    onChange?: any
    value?: any,
    placeholder?: string | undefined,
    checked?: boolean,
    autoFocus?: boolean,
    autoComplete?: string | undefined,
}

const Input: VFC<TInput> = ({type, id, labelText, name, onChange, value, placeholder, checked, autoFocus, autoComplete}: TInput) => {
    return (
        <div className={cn("field", {"field--checkbox": type === "checkbox"})}>
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                name={name}
                type={type}
                onChange={onChange}
                value={value ? value : ""}
                placeholder={placeholder ? placeholder : undefined}
                checked={checked}
                autoFocus={autoFocus}
                autoComplete={autoComplete? "on" : "off"}
            />
        </div>
    );
};

export default Input;
