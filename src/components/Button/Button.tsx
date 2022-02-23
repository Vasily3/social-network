import React, {VFC} from "react";
import cn from "classnames"

interface TButton {
    onClick?: any,
    className?: string,
    color?: string,
    button?: string,
    text?: string,
    type?: string
}

const Button: VFC<TButton> = ({onClick, className, color, button, text}: TButton) => {
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
