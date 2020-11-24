import React from 'react';

const NavButton = (props) => (
    <div>
        <button className="button-next">
            {props.children}
        </button>
        <style jsx>
        {
          `.button-next {
            font-size: 20px;
            color: #ffffff;
            padding: 9px 15px;
            background-color: #398ef1;
            border: 1px solid #0d4aab;
            border-radius: .5em;
          }`
        }
      </style>
    </div>
);

export default NavButton;