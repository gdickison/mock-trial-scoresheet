import React from 'react';
import FormTitleText from './FormTitleText';
import FormTitleHeadline from './FormTitleHeadline';
import NavButton from './NavButton';

const FormTitlePage = () => {
  const year = new Date().getFullYear();
  const competitionYear = Date() > "Dec 31 2019" ? year + 1 : year;

  return (
    <div className="form-title-page">
        <FormTitleHeadline year={competitionYear} />
        <FormTitleText year={competitionYear} />
        
        <style jsx>
        {
          `.form-title-page {
            text-align: center;
          }`
        }
      </style>
    </div>
  )
};

export default FormTitlePage;