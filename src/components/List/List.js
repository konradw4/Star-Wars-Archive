import React, { useState, useEffect } from 'react';

import { useMenu } from '../../context/MenuContext';
import { getData } from '../../data/dataApi';

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
            <ul>
                {listItems.map((element) => (
                    <li key={element.name}>{element.name}</li>
                ))}
            </ul>
        </section>
    );
};

export default List;
