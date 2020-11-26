import React from 'react';

const FormTitleText = (props) => {

    return (
        <div>
            <h3>Scoresheet</h3>
            <p className="title-text">On a scale of 1-10 rate each team's performance in each of the 11 scoring categories.</p>
            <br/>

            <style>
                {
                    `.title-text {
                        margin: 0 5%;
                        text-align: center;
                      }`
                }
            </style>
        </div>
    )
};

export default FormTitleText;