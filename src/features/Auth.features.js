// src/features/auth.features.js

/**
 * Authentication utilities
 * These functions handle storing, retrieving, and removing authentication tokens,
 * as well as checking if a user is authenticated.
 */

/**
 * Save authentication token
 * @param {string} token - JWT or access token
 */
export const setAuthToken = (token) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("auth_token", token);
  }
};

/**
 * Get authentication token
 * @returns {string|null} - Saved token or null if not found
 */
export const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("auth_token");
  }
  return null;
};

/**
 * Remove authentication token (logout)
 */
export const removeAuthToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_token");
  }
};

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export const isAuthenticated = () => {
  const token = getAuthToken();
  return !!token;
};

/**
 * Example: Authenticated API request
 * @param {string} url - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise<any>}
 */
export const authFetch = async (url, options = {}) => {
  const token = getAuthToken();

  const headers = {
    ...(options.headers || {}),
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": "application/json",
  };

  const response = await fetch(url, { ...options, headers });
  
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }

  return response.json();
};
