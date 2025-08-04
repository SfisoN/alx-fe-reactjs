import axios from "axios";

// Fetch GitHub users based on advanced search criteria
export async function fetchAdvancedUsers({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`;

  const headers = {};
  if (import.meta.env.VITE_APP_GITHUB_API_KEY) {
    headers.Authorization = `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`;
  }

  const response = await axios.get(url, { headers });
  return response.data; // Returns { total_count, items: [] }
}

// Fetch detailed GitHub user profile by username
export async function fetchUserData(username) {
  if (!username) throw new Error("Username is required to fetch user data");

  const url = `https://api.github.com/users/${username}`;

  const headers = {};
  if (import.meta.env.VITE_APP_GITHUB_API_KEY) {
    headers.Authorization = `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`;
  }

  const response = await axios.get(url, { headers });
  return response.data; // Returns user profile object
}
