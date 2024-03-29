import type {NextAuthOptions} from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: 'asgardeo',
      name: 'Asgardeo',
      clientId: process.env.ASGARDEO_CLIENT_ID,
      clientSecret: process.env.ASGARDEO_CLIENT_SECRET,
      type: 'oauth',
      wellKnown:
        'https://api.asgardeo.io/t/' +
        process.env.ASGARDEO_ORGANIZATION_NAME +
        '/oauth2/token/.well-known/openid-configuration',
      authorization: {params: {scope: 'openid email profile internal_login'}},
      idToken: true,
      checks: ['pkce', 'state'],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        };
      },
    },
  ],

  callbacks: {
    async session({session, token, user}) {
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      return session;
    },
    async jwt({token, user, account, profile}) {
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    },
  },
};
