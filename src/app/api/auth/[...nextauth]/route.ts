import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6";

const handler = NextAuth({
  providers: [
    DuendeIDS6Provider({
      clientId: "interactive.confidential",
      clientSecret: "secret",
      issuer: "https://demo.duendesoftware.com",
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch("/your/endpoint", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
    {
      id: "playground",
      name: "playground",
      type: "oauth",
      version: "2.0",
      authorization: {
        url: "https://samples.auth0.com/authorize",
        params: {
          scope: "openid profile email phone address",
          redirect_uri: "https://openidconnect.net/callback",
          type: "code",
        },
      },
      token: "https://samples.auth0.com/oauth/token",
      // scope: "openid profile email phone address",
      // params: { grant_type: "authorization_code" },
      //   wellKnown: "https://openidconnect.net/callback",
      //accessTokenUrl: process.env.IdentityServer4_URL + "/connect/token",
      //requestTokenUrl: process.env.IdentityServer4_URL + "/connect/token",
      // authorizationUrl: process.env.IdentityServer4_URL + "/connect/authorize?response_type=code",
      // profileUrl: process.env.IdentityServer4_URL + "/connect/userinfo",
      profile: (profile) => {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        };
      },
      clientId: "kbyuFDidLLm280LIwVFiazOqjO3ty8KH",
      clientSecret: "60Op4HFM0I8ajz0WdiStAbziZ-VFQttXuxixHHs2R7r7-CW8GR79l-mmLqMhc-Sa",
    },
  ],
});

export { handler as GET, handler as POST };
