import React from 'react';

const NavButton = (props) => {
    return (
        <button
            onClick={() => props.handleButtonClick(props.id)}
            className="bg-white text-gray-400 hover:bg-blue-900 hover:text-white hover:shadow-md px-3 py-2 m-2 rounded-full text-sm font-medium" aria-current="page">
            {props.children}
        </button>
    )
}

export default NavButton;