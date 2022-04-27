

function fetchItems(): Promise<string[]> {
    const items = ['a', 'b', 'c'];
    return new Promise(function (resolve) {
        resolve(items);
    });
}