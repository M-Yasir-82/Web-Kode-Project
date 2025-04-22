
// This file is used to provide documentation of the expected
// shape of data objects throughout the application.
// These were converted from TypeScript interfaces to JSDoc comments

/**
 * @typedef {Object} AppUser
 * @property {string} id - The user ID
 * @property {string} email - User's email address
 * @property {string} name - User's full name
 * @property {'admin' | 'developer'} role - The user's role
 * @property {boolean} isSubscribed - Whether the user has an active subscription
 * @property {string} [subscriptionTier] - The subscription tier (optional)
 * @property {string} [subscriptionEnd] - The subscription end date ISO string (optional)
 */

/**
 * @typedef {Object} LoginCredentials
 * @property {string} email - User's email address
 * @property {string} password - User's password
 */

/**
 * @typedef {Object} RegisterCredentials
 * @property {string} email - User's email address
 * @property {string} password - User's password
 * @property {string} name - User's full name
 * @property {'admin' | 'developer'} role - The user's role
 */

// Export empty object as this is just for documentation
export default {};
