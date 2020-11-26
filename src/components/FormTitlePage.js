import React from 'react';
import FormTitleHeadline from './FormTitleHeadline';
import TrialInfo from './TrialInfo';
import FormTitleText from './FormTitleText';

const FormTitlePage = () => {
  const year = new Date().getFullYear();
  const competitionYear = Date() > "Dec 31 2019" ? year + 1 : year;

  return (
    <div className="form-title-page">
        <FormTitleHeadline year={competitionYear} />
        <TrialInfo />
        <FormTitleText />
    </div>
  )
};

export default FormTitlePage;