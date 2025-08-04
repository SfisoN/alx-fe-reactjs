import { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      // If no extra filters, do a simple user search
      if (!location && !minRepos) {
        const data = await fetchUserData(username);
        setUsers([data]); // Wrap in array so UI works
      } else {
        // Advanced search with filters
        const data = await fetchAdvancedUsers({ username, location, minRepos });
        setUsers(data.items);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Advanced GitHub User Search</h2>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded p-2"
          required
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded p-2"
        />
        <button 
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">Looks like we cant find the user</p>}

      {/* Results */}
      {users.length > 0 && (
        <div className="mt-6 space-y-4">
          {users.map((user) => (
            <div 
              key={user.id} 
              className="bg-gray-100 p-4 rounded-lg shadow flex items-center gap-4"
            >
              <img 
                src={user.avatar_url} 
                alt={user.login} 
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">{user.name || user.login}</h3>
                <a 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
