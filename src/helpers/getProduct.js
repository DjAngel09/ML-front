export const getProduct = async( id ) => {

    const url = `http://localhost:3001/api/items/${id}`;
    const resp = await fetch( url );
    const data = await resp.json();
    
    return data;
}
   