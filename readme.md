# Extension of Base

Added server-side Node/Express middleware for a protected route. This middleware validates the token supplised by auth0. Doing this requires that this server knows the `client Secret` auth0 used to encrypt the token signature.
