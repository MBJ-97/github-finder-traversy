import axios from "axios";

const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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";

// instance of axios so we can do github.get github.post etc...
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `${GITHUB_TOKEN}` },
});

// get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const res = await github.get(`search/users?${params}`);
  return res.data.items;
};

// getUser and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return {
    user: user.data,
    repos: repos.data,
  };
};
