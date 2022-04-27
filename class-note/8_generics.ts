interface LengthType {
    length: number;
}

// extends를 활용한 제네릭 타입 제한
function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

// logTextLength(100);  // 오류
// logTextLength({ leng: 100 });   // 오류
logTextLength({ length: 100 });


interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// keyof를 활용한 타입 제한 => ShoppingItem의 속성들을 타입으로 받겠다. (item, price, stock)
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

console.log(getShoppingItemOption('price'));