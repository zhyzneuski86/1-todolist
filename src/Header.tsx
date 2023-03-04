import React, {FC} from 'react';

export type HeaderType = {
    title: string
}

const Header: FC<HeaderType> = (props) => {
    return <h3>{props.title}</h3>


};

export default Header;