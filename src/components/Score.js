import React, { Fragment } from 'react';

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

const Score = ({party, id, label, score, storeScore}) => {

    const handleScore = e => {
        e.preventDefault();
        storeScore(e.target.value);
    }

    const scores = ['', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const scoreOptions = scores.map(score => {
        return <option key={score} value={score}>{score}</option>
    });

    return (
        <Fragment>
            <div className={"input " + party + "-input"}>
                <label htmlFor={party + "-" + id} className={party + "-label"}>{label}</label>
                <select className="select" value={score} onChange={handleScore} id={party + "-" + id}>
                    {scoreOptions}
                </select>
            </div>
        </Fragment>
    )
}

export const Comments = ({party, id, label, comment, storeComment}) => {

    const handleComment = e => {
        e.preventDefault();
        storeComment(e.target.value);
    }

    return (
        <div className={"comments " + party + "-input"}>
            <label className="comment-label" htmlFor={party + "-" + id + "-comment"}>{label}</label>
            <textarea className="text-area" value={comment} onChange={handleComment} id={party + "-" + id + "-comment"}></textarea>
        </div>
    )
}

export const ScoreBoardItem = (props) => {
    console.log(props);

    return (
        <Fragment>
            <div className="scoreboard-item">
                <span>Plaintiff's Opening: </span>
                <span>{props.pOpen}</span>
            </div>
            <div className="scoreboard-item">
                <span>Defendant's Opening: </span>
                <span>{props.dOpen}</span>
            </div>
            <div className="scoreboard-item">
                <span>P's First Direct: </span>
                <span>{props.pW1Direct}</span>
            </div>
            <div className="scoreboard-item">
                <span>D's First Cross: </span>
                <span>{props.pW1Cross}</span>
            </div>
            <div className="scoreboard-item">
                <span>P Performance: </span>
                <span>{props.pW1Performance}</span>
            </div>
            <div className="scoreboard-item">
                <span>P Total: </span>
                <span>{props.pTotal}</span>
            </div>
        </Fragment>
    )
}

export default Score;