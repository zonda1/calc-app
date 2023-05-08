const NUMS_LIMIT=10;

export const makeNums=()=> {
    const arr=[];
    for (let index = 1; index < NUMS_LIMIT; index++) {
        arr.push(index);
    }
    return arr;
}