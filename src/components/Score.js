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
    const [score, setScore] = useState('');

    const handleChange = e => {
        e.preventDefault();
        setScore(e.target.value);
    }

    const scores = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const scoreOptions = scores.map(score => {
        return <option key={score} value={score}>{score}</option>
    });

    return (
        <Fragment>
            <div className={"input " + party + "-input"}>
                <label htmlFor={party + "-" + id} className={party + "-label"}>{label}</label>
                <select className="select" value={score} onChange={handleChange} id={party + "-" + id}>
                    {scoreOptions}
                </select>
            </div>
        </Fragment>
    )
}

export const Comments = ({label}) => {
    return (
        <div className="comments">
            <div>
                <label className="comment-label" htmlFor="1234">{label}</label>
                <textarea className="text-area" id="1234"></textarea>
            </div>
        </div>
    )
}

export default Score;