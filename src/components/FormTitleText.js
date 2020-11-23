import React from 'react';

const FormTitleText = (props) => {

    return (
        <div>
            <br/>
            <p className="title-text">Score the little darlings</p>
            <br/>

            <style jsx>
                {
                    `.title-text {
                        font-size: 20px;
                        margin: 0 20%;
                        text-align: left;
                      }`
                }
            </style>
        </div>
    )
};

export default FormTitleText;