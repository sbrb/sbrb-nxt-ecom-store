export const getCollections = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching collections:', error);
    return null; 
  }
};

export const getCollectionDetails = async (collectionId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching collection details for ${collectionId}:`, error);
    return null; // or throw error if you prefer
  }
};

// Similarly update other functions...

export const getProducts = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};


export const getProductDetails = async (productId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product details for ${productId}:`, error);
    return null; // or throw error if you prefer
  }
};

export const getSearchedProducts = async (query: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error searching products for query ${query}:`, error);
    return null; // or throw error if you prefer
  }
};

export const getOrders = async (customerId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching orders for customer ${customerId}:`, error);
    return null; // or throw error if you prefer
  }
};

export const getRelatedProducts = async (productId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching related products for ${productId}:`, error);
    return null; 
  }
};
