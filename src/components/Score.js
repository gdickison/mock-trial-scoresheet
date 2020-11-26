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

    const scores = ['', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
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

export const Comments = ({party, id, label}) => {
    const [comment, setComment] = useState('');

    const handleChange = e => {
        e.preventDefault();
        setComment(e.target.value);
    }

    return (
        <div className={"comments " + party + "-input"}>
            <label className="comment-label" htmlFor={party + "-" + id + "-comment"}>{label}</label>
            <textarea className="text-area" value={comment} onChange={handleChange} id={party + "-" + id + "-comment"}></textarea>
        </div>
    )
}

export default Score;