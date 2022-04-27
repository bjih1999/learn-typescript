

function getB(b): number {
    return b;
}

interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<T>{
    description; string;
    tag: K;
}

const detailedItem: DetailedDropdown<string> = {
    value
}


const arr = [1, 2, true, 'string'];