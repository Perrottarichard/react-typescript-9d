import React from 'react'
import { HeaderProps } from './types'

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div>
            <h1>{props.courseName}</h1>
        </div>
    );
};
export default Header;