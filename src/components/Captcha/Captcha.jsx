import React from 'react';
import Input from "../Input/Input";

const Captcha = (props) => {
    return (
        <div className="captcha">
            <img src={props.image} alt="captcha"/>
            <Input
                labelText="Enter captcha"
                id="captcha"
                name="captcha"
                type="text"
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    );
};

export default Captcha;
