import React, { useState, useEffect } from 'react';

import { useMenu } from '../../context/MenuContext';
import { getData } from '../../data/dataApi';
import ListELement from '../ListItem/ListItem';

import './List.scss';

const List = () => {
    const [listItems, setListItems] = useState([]);
    const category = useMenu();

    const getListItems = async () => {
        const data = await getData(category);
        setListItems(data.results);
    };

    useEffect(() => {
        getListItems();
    }, [category]);

    return (
        <section>
            <ul className='List'>
                {listItems.map((item) => (
                    <ListELement key={item.name} item={item}></ListELement>
                ))}
            </ul>
        </section>
    );
};

export default List;
