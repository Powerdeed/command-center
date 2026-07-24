# Powerdeed Command Center

Internal operating shell for launching Powerdeed apps, viewing activity, and
governing access.

## Authentication

Command Center uses the same auth model as CMS:

- auth-app starts Keycloak login
- identity-service creates the HttpOnly session cookie
- Command Center loads the current user from identity-service
- API calls use `withCredentials: true`
- logout revokes the identity-service session and redirects to Keycloak logout

Command Center does not own password login or forgot-password routes.

## Environment

```txt
NEXT_PUBLIC_COMMAND_API_BASE_URL=http://localhost:5500
NEXT_PUBLIC_IDENTITY_API_BASE_URL=http://localhost:3000
NEXT_PUBLIC_AUTH_URL=http://localhost:3001/login
NEXT_PUBLIC_KEYCLOAK_URL=http://localhost:8081
NEXT_PUBLIC_KEYCLOAK_REALM=powerdeed
NEXT_PUBLIC_KEYCLOAK_CLIENT_ID=command-center
```

`NEXT_PUBLIC_IDENTITY_API_BASE_URL` must point to identity-service.

## API Clients

```txt
lib/api/axios.ts
  Command/domain API client. Uses NEXT_PUBLIC_COMMAND_API_BASE_URL.

lib/api/identityAxios.ts
  Identity/session API client. Uses NEXT_PUBLIC_IDENTITY_API_BASE_URL.
```

## Important Areas

```txt
app/auth
  Shared user/session hooks, permission helpers, logout, identity API calls.

features/app-launcher
  Internal app launcher and app visibility controls.

features/security&access
  Access governance screens.

globals/context
  App-wide UI and user state.
```
