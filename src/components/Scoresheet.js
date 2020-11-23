import React from 'react';
import Score from './Score';
import {ScoreSectionHeader, ScoreOpenClose, ScoreSection} from './Score';
import '../styles/Scoresheet.css';

const Scoresheet = (props) => {
    return (
        <div>
            <div className="score-card">
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Opening Statements" />
                    <ScoreOpenClose>
                        <Score party="p" id="open" label="Plaintiff Opening"/>
                        <Score party="d" id="open" label="Defense Opening"/>
                    </ScoreOpenClose>
                </div>
                <div>
                    <h2 style={{backgroundColor: "LightBlue"}}>Plaintiff Case</h2>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Plaintiff First Witness" />
                    <ScoreSection>
                        <Score party="p" id="p-w-1-direct" label="Direct Examination" />
                        <Score party="d" id="p-w-1-cross" label="Cross Examination" />
                        <Score party="p" id="p-w-1-performance" label="Witness Performance" />
                    </ScoreSection>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Plaintiff Second Witness" />
                    <ScoreSection>
                        <Score party="p" id="p-w-2-direct" label="Direct Examination" />
                        <Score party="d" id="p-w-2-cross" label="Cross Examination" />
                        <Score party="p" id="p-w-2-performance" label="Witness Performance" />
                    </ScoreSection>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Plaintiff Third Witness" />
                    <ScoreSection>
                        <Score party="p" id="p-w-3-direct" label="Direct Examination" />
                        <Score party="d" id="p-w-3-cross" label="Cross Examination" />
                        <Score party="p" id="p-w-3-performance" label="Witness Performance" />
                    </ScoreSection>
                </div>
                <div>
                    <h2 style={{backgroundColor: "LightBlue"}}>Defense Case</h2>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Defense First Witness" />
                    <ScoreSection>
                        <Score party="p" id="d-w-1-cross" label="Cross Examination" />
                        <Score party="d" id="d-w-1-direct" label="Direct Examination" />
                        <div></div>
                        <Score party="d" id="d-w-1-performance" label="Witness Performance" />
                    </ScoreSection>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Defense Second Witness" />
                    <ScoreSection>
                        <Score party="p" id="d-w-2-cross" label="Cross Examination" />
                        <Score party="d" id="d-w-2-direct" label="Direct Examination" />
                        <div></div>
                        <Score party="d" id="d-w-2-performance" label="Witness Performance" />
                    </ScoreSection>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Defense Third Witness" />
                    <ScoreSection>
                        <Score party="p" id="d-w-3-cross" label="Cross Examination" />
                        <Score party="d" id="d-w-3-direct" label="Direct Examination" />
                        <div></div>
                        <Score party="d" id="d-w-3-performance" label="Witness Performance" />
                    </ScoreSection>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Closing Arguments" />
                    <ScoreOpenClose>
                        <Score party="p" id="close" label="Plaintiff Closing"/>
                        <Score party="d" id="close" label="Defense Closing"/>
                    </ScoreOpenClose>
                </div>
                <div className="score-sheet-section">
                    <ScoreSectionHeader sectionHeaderText="Deductions" />
                    <ScoreOpenClose>
                        <Score party="p" id="deductions" label="Plaintiff Deductions"/>
                        <Score party="d" id="deductions" label="Defense Deductions"/>
                    </ScoreOpenClose>
                </div>
                <div>
                    <h2>Totals</h2>
                </div>
            </div>
        </div>
    );
}

export default Scoresheet;



