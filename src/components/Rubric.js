import React, { Fragment } from 'react';

const Rubric = () => {
    return (
        <Fragment>
            <div className="rubric">
                <span>Ineffective</span>
                <span>Fair</span>
                <span>Average</span>
                <span>Excellent</span>
                <span>Superior</span>
                <span>1-2</span>
                <span>3-4</span>
                <span>5-6</span>
                <span>7-8</span>
                <span>9-10</span>
            </div>

            <style>
                {
                    `.rubric {
                          display: grid;
                          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                          grid-template-rows: 20px 20px;
                          text-align: center;
                          background-color: white;
                          margin: 0 4px;
                          position: sticky;
                          top: 0
                      }`
                }
            </style>
        </Fragment>
    )
}

export default Rubric;
