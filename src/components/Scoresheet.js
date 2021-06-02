import React, {useEffect, useState} from 'react';
import Score from './Score';
import {ScoreSectionHeader, ScoreOpenClose, ScoreSection, Comments, ScoreBoardItem} from './Score';
import '../styles/Scoresheet.css';

const Scoresheet = (props) => {
    // TODO: create a score/setScore for each score input.
    // E.g., const [pOpenScore, setPOpenScore] = useState('')
    const [pOpen, setPOpen] = useState(0);
    const [pOpenComment, setPOpenComment] = useState('');
    const [dOpen, setDOpen] = useState(0);
    const [dOpenComment, setDOpenComment] = useState('');

    const [pW1Direct, setPW1Direct] = useState(0);
    const [pW1Cross, setPW1Cross] = useState(0);
    const [pW1Performance, setPW1Performance] = useState(0);
    const [pW1DirectComment, setPW1DirectComment] = useState('');
    const [pW1CrossComment, setPW1CrossComment] = useState('');
    const [pW1PerformanceComment, setPW1PerformanceComment] = useState('');

    const [pTotal, setPTotal] = useState(0);

    useEffect(() => {
        setPTotal(parseInt(pOpen) + parseInt(pW1Direct));
    }, [pOpen, pW1Direct]);

    return (
        <div className="big-container">
            <div className="score-card">
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Opening Statements" />
                    <ScoreOpenClose>
                        <Score score={pOpen} storeScore={value => setPOpen(value)} party="p" id="open" label="Plaintiff Opening"/>
                        <Score score={dOpen} storeScore={value => setDOpen(value)} party="d" id="open" label="Defense Opening"/>
                        <Comments comment={pOpenComment} storeComment={value => setPOpenComment(value)} party="p" id="open" label="Plaintiff Opening Comments" />
                        <Comments comment={dOpenComment} storeComment={value => setDOpenComment(value)} party="d" id="open" label="Defense Opening Comments" />
                    </ScoreOpenClose>
                </div>
                <div>
                    <h2 style={{backgroundColor: "LightBlue"}}>Plaintiff Case</h2>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Plaintiff First Witness" />
                    <ScoreSection>
                        <Score score={pW1Direct} storeScore={setPW1Direct} party="p" id="w-1-direct" label="Direct Examination" />
                        <Score score={pW1Cross} storeScore={setPW1Cross} party="d" id="w-1-cross" label="Cross Examination" />
                        <Score score={pW1Performance} storeScore={setPW1Performance} party="p" id="w-1-performance" label="Witness Performance" />
                        <div></div>
                        <Comments comment={pW1DirectComment} storeComment={setPW1DirectComment} party="p" id="w-1-direct" label="Direct Examination Comments" />
                        <Comments comment={pW1CrossComment} storeComment={setPW1CrossComment} party="d" id="w-1-cross" label="Cross Examination Comments" />
                        <Comments comment={pW1PerformanceComment} storeComment={setPW1PerformanceComment} party="p" id="w-1-performance" label="Witness Performance Comments" />
                    </ScoreSection>
                </div>
                {/* <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Plaintiff Second Witness" />
                    <ScoreSection>
                        <Score party="p" id="w-2-direct" label="Direct Examination" />
                        <Score party="d" id="w-2-cross" label="Cross Examination" />
                        <Score party="p" id="w-2-performance" label="Witness Performance" />
                        <div></div>
                        <Comments party="p" id="w-2-direct" label="Direct Examination Comments" />
                        <Comments party="d" id="w-2-cross" label="Cross Examination Comments" />
                        <Comments party="p" id="w-2-performance" label="Witness Performance Comments" />
                    </ScoreSection>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Plaintiff Third Witness" />
                    <ScoreSection>
                        <Score party="p" id="w-3-direct" label="Direct Examination" />
                        <Score party="d" id="w-3-cross" label="Cross Examination" />
                        <Score party="p" id="w-3-performance" label="Witness Performance" />
                        <div></div>
                        <Comments party="p" id="w-3-direct" label="Direct Examination Comments" />
                        <Comments party="d" id="w-3-cross" label="Cross Examination Comments" />
                        <Comments party="p" id="w-3-performance" label="Witness Performance Comments" />
                    </ScoreSection>
                </div>
                <div>
                    <h2 style={{backgroundColor: "LightBlue"}}>Defense Case</h2>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Defense First Witness" />
                    <ScoreSection>
                        <Score party="p" id="w-1-cross" label="Cross Examination" />
                        <Score party="d" id="w-1-direct" label="Direct Examination" />
                        {<div className="p-input"></div>}
                        <Score party="d" id="w-1-performance" label="Witness Performance" />
                        <Comments party="p" id="w-1-cross" label="Cross Examination Comments" />
                        <Comments party="d" id="w-1-direct" label="Direct Examination Comments" />
                        {<div className="p-input"></div>}
                        <Comments party="d" id="w-1-performance" label="Witness Performance Comments" />
                    </ScoreSection>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Defense Second Witness" />
                    <ScoreSection>
                    <Score party="p" id="w-2-cross" label="Cross Examination" />
                        <Score party="d" id="w-2-direct" label="Direct Examination" />
                        {<div className="p-input"></div>}
                        <Score party="d" id="w-2-performance" label="Witness Performance" />
                        <Comments party="p" id="w-2-cross" label="Cross Examination Comments" />
                        <Comments party="d" id="w-2-direct" label="Direct Examination Comments" />
                        {<div className="p-input"></div>}
                        <Comments party="d" id="w-2-performance" label="Witness Performance Comments" />
                    </ScoreSection>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Defense Third Witness" />
                    <ScoreSection>
                    <Score party="p" id="w-3-cross" label="Cross Examination" />
                        <Score party="d" id="w-3-direct" label="Direct Examination" />
                        {<div className="p-input"></div>}
                        <Score party="d" id="w-3-performance" label="Witness Performance" />
                        <Comments party="p" id="w-3-cross" label="Cross Examination Comments" />
                        <Comments party="d" id="w-3-direct" label="Direct Examination Comments" />
                        {<div className="p-input"></div>}
                        <Comments party="d" id="w-3-performance" label="Witness Performance Comments" />
                    </ScoreSection>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Closing Arguments" />
                    <ScoreOpenClose>
                        <Score party="p" id="close" label="Plaintiff Closing"/>
                        <Score party="d" id="close" label="Defense Closing"/>
                        <Comments party="p" id="close" label="Plaintiff Closing Comments" />
                        <Comments party="d" id="close" label="Defense Closing Comments" />
                    </ScoreOpenClose>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Deductions" />
                    <ScoreOpenClose>
                        <Score party="p" id="deductions" label="Plaintiff Deductions"/>
                        <Score party="d" id="deductions" label="Defense Deductions"/>
                        <Comments party="p" id="deductions" label="Explanation" />
                        <Comments party="d" id="deductions" label="Explanation" />
                    </ScoreOpenClose>
                </div> */}
                <div className="totals">
                    <h2>Totals</h2>
                    <span>P Total: {pTotal}</span>
                </div>
            </div>
            <div className="score-board">
                <ScoreBoardItem
                    pOpen={pOpen}
                    dOpen={dOpen}
                    pW1Direct={pW1Direct}
                    pW1Cross={pW1Cross}
                    pW1Performance={pW1Performance}
                    pTotal={pTotal}
                />
            </div>
        </div>
    );
}

export default Scoresheet;



