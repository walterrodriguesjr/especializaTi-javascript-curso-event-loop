
const getStore = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const store = { id: 1, name: 'Magazine XPTO' };

            resolve(store);

        }, 2000)
    })
}

const getCategory = (idStore) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const category = { id: 1, title: 'Promoções', store_id: idStore };

            resolve(category);
        }, 2000)
    })
}

const getProducts = (idCategory) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = [
                { id: 1, name: 'TV 32', category_id: idCategory },
                { id: 2, name: 'TV 42', category_id: idCategory },
                { id: 3, name: 'TV 50', category_id: idCategory },
            ]
            console.log(products);
        }, 2000);
    })
}

const start = async () => {



    const store = await getStore();
    console.log(store);
    const category = await getCategory(store.id);
    console.log(category);
    const products = await getProducts(category.id);
    console.log(products);
}



