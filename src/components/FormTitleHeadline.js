import React, { Fragment } from 'react';
import '../styles/Headline.css';

const FormTitleHeadline = (props) => (
    <Fragment>
        <div className="form-title-headline">
            <img src="/images/ilf-logo.png" alt="ilf logo"></img>
            <hr/>
            <h2>{props.year} Idaho High School Mock Trial Competition</h2>
            <hr/>
        </div>

        <style>
            {
            `.form-title-headline {
                text-align: center;
            }`
            }
        </style>
    </Fragment>
);

export default FormTitleHeadline;