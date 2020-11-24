import React from 'react';
import FormTitleText from './FormTitleText';
import FormTitleHeadline from './FormTitleHeadline';

const FormTitlePage = () => {
  const year = new Date().getFullYear();
  const competitionYear = Date() > "Dec 31 2019" ? year + 1 : year;

  return (
    <div className="form-title-page">
        <FormTitleHeadline year={competitionYear} />
        <FormTitleText />
        
        <style>
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