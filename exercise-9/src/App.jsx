import { useState, useEffect } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      console.error('Error fetching GitHub user: ', error);
    }
  }, [error]);

  const handleSearchGitHubUserName = async () => {
    if (!searchTerm) {
      setError("Please enter a GitHub username.");
      return;
    }
    setLoading(true);
    setUserData(null);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch(`https://api.github.com/users/${searchTerm.toLowerCase()}`);
      if (!response.ok) {
        throw new Error("GitHub user not found");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="header">
        <h2>GitHub User Search</h2>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={handleSearchGitHubUserName}>Search</button>
      </div>

      <div className="display">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red", fontSize: "12px" }}>Error: {error}</p>}

        {userData && (
          <div className="info" style={{ marginTop: '1rem' }}>
            <h3>{userData.name || userData.login}</h3>
            <img
              src={userData.avatar_url}
              alt={userData.login}
              width="100"
              style={{ borderRadius: '50%' }}
            />
            <p>Location: {userData.location || 'N/A'}</p>
            <p>Public Repos: {userData.public_repos}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
