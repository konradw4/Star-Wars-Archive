import { URL } from "../consts/apiConst";

export const getData = async (category) => {
    const result = await fetch(`${URL}/${category}/`);
    return result.json();
};