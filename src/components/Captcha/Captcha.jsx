import React from 'react';
import Input from "../Input/Input";

const Captcha = (image, onChange, value) => {
    return (
        <div className="captcha">
            <img src={image} alt="captcha"/>
            <Input
                labelText="Enter captcha"
                id="captcha"
                name="captcha"
                type="text"
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default Captcha;
