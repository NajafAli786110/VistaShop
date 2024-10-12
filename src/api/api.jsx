import axios from "axios";

const BASE_API_URL = "https://fakestoreapi.com";

export const FetchProducts = async () => {
  try {
    const responseProductData = await axios.get(`${BASE_API_URL}/products`);
    const extractedProductData = responseProductData.data.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: {
        rate: product.rating.rate,
        count: product.rating.count,
      },
    }));

    return (extractedProductData);
  } catch (err) {
    console.error(err.message);
    return [];
  }
};
