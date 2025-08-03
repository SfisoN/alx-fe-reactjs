import axios from "axios";

export async function fetchUserData(username) {
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // Optional: log error details for debugging
    console.error("GitHub API error:", error.response || error.message);
    throw error; // rethrow so the Search component can handle it
  }
}
export default {
  fetchUserData,
};