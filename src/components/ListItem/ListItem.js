import React from 'react';

import './ListItem.scss';

const ListItem = ({ item }) => {
    return <li className='ListItem' key={item.name}>{item.name}</li>;
};

export default ListItem;
