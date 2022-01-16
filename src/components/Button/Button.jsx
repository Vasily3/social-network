import React from "react";
import cn from "classnames"

const Button = ({onClick, className, color, button, text}) => {
    return (
        <button onClick={onClick}
                className={
                    cn(className, "button",
                    color === "red" ? "button--red" : null,
                    color === "green" ? "button--green" : null,
                )}
                type={button? "button" : "submit"}
        >{text}
        </button>
    );
};

export default Button;
