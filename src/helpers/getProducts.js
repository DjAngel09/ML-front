export const getProducts = async( name ) => {

    const url = `http://localhost:3001/api/items?q=:${name}`;
    const resp = await fetch( url );
    const data = await resp.json();
    
    return {items: data.items, categories: data.categories};
}