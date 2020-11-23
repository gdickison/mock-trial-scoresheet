import React, { Fragment, useState } from 'react';

export const ScoreSectionHeader = ({sectionHeaderText}) => {
    return (
        <div className="section-header">
            <h2>{sectionHeaderText}</h2>
        </div>
    )
}

export const ScoreOpenClose = (props) => {
    return (
        <div className="score-container score-open-close">
            {props.children}
        </div>
    )
}

export const ScoreSection = (props) => {
    return (
        <div className="score-container">
            {props.children}
        </div>
    )
}

const Score = ({party, id, label}) => {
    const [score, setScore] = useState(null);

    const handleChange = e => {
        e.preventDefault();
        setScore(e.target.value);
    }

    console.log(score);
    return (
        <Fragment>
            <div className={"input " + party + "-input"}>
                <label for={party + "-" + id} className={party + "-label"}>{label}</label>
                <select value={score} onChange={handleChange} id={party + "-" + id}>
                    <option value="null"></option>
                    <option value="10">10</option>
                    <option value="9">9</option>
                    <option value="8">8</option>
                    <option value="7">7</option>
                    <option value="6">6</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </div>
        </Fragment>
    )
}

export default Score;