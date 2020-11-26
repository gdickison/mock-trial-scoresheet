import React, {Fragment, useState} from 'react';

const TrialInfo = () => {
    const [courtroom, setCourtroom] = useState('');
    const [round, setRound] = useState('');
    const [pcode, setPcode] = useState('');
    const [dcode, setDcode] = useState('');

    const handleCourtroom = e => {
        e.preventDefault();
        setCourtroom(e.target.value);
    };

    const courtrooms = ['', 1, 2, 3, 4, 5, 6, 7, 8];
    const courtroomOptions = courtrooms.map(courtroom => {
        return (<option key={courtroom} value={courtroom}>{courtroom}</option>);
    });
    
    const handleRound = e => {
        e.preventDefault();
        setRound(e.target.value);
    };

    const rounds = ['', 1, 2, 3, 4, 'Semi-Final', 'Final'];
    const roundOptions = rounds.map(round => {
        return (<option key={round} value={round}>{round}</option>);
    });

    const handlePcode = e => {
        e.preventDefault();
        setPcode(e.target.value);
    };

    const handleDcode = e => {
        e.preventDefault();
        setDcode(e.target.value);
    };

    const teamCodes = ['', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR'];
    const teamCodeOptions = teamCodes.map(teamCode => {
        return (<option key={teamCode} value={teamCode}>{teamCode}</option>)
    })

    return (
        <Fragment>
            <div className="trial-info score-container">
                <div className="input info-input">
                    <label className="label" htmlFor="courtroom-code">Courtroom:</label>
                    <select className="select" id="courtroom-code" value={courtroom} onChange={handleCourtroom}>
                        {courtroomOptions}
                    </select>
                </div>
                <div className="input info-input">
                    <label className="label" htmlFor="round-code">Round:</label>
                    <select className="select" id="round-code" value={round} onChange ={handleRound}>
                        {roundOptions}
                    </select>
                </div>
                <div className="input info-input">
                    <label className="label" htmlFor="p-team-code">Plaintiff Team Code:</label>
                    <select className="select" id="p-team-code" value={pcode} onChange ={handlePcode}>
                        {teamCodeOptions}
                    </select>
                </div>
                <div className="input info-input">
                    <label className="label" htmlFor="d-team-code">Defense Team Code:</label>
                    <select className="select" id="d-team-code" value={dcode} onChange ={handleDcode}>
                        {teamCodeOptions}
                    </select>
                </div>
            </div>

        </Fragment>
    )
}

export default TrialInfo;