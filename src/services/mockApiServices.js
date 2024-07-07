import axios from "axios";

const MOCK_API_URL = "https://jsonplaceholder.typicode.com";

export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${MOCK_API_URL}/posts?_limit=5`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching transactions");
  }
};
