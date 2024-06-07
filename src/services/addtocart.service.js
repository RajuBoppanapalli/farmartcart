import axios from 'axios';

// Function to add a product to the cart
export async function addToCart(customerid, productid, quantity) {
    try {
        const response = await axios.post('http://localhost:4002/add-to-cart', {
            customerid,
            productid,
            quantity
        });
        return response.data;
    } catch (error) {
        console.error('Error adding product to cart:', error);
        throw error;
    }
}