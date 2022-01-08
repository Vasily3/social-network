import React from "react";
import cn from "classnames"

const Button = (props) => {
    return (
        <button onClick={props.onClick}
                className={
                    cn(props.className, "button",
                    props.color === "red" ? "button--red" : null,
                    props.color === "green" ? "button--green" : null,
                )}
                type={props.button? "button" : "submit"}
        >{props.text}
        </button>
    );
};

export default Button;
