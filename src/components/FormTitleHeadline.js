import React from 'react';
import '../styles/Headline.css';

const FormTitleHeadline = (props) => (
    <div>
        <img src="/images/ilf-logo.png" alt="ilf logo"></img>
        <hr/>
        <h2>{props.year} Idaho High School Mock Trial Competition</h2>
        <h3>Scoresheet</h3>
        <hr/>
    </div>
);

export default FormTitleHeadline;