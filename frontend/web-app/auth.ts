import NextAuth, { Profile } from "next-auth";
import { OIDCConfig } from "next-auth/providers";
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6"

export const { handlers, signIn, signOut } = NextAuth({
  providers: [
    DuendeIDS6Provider({
        id: "id-server",
        clientId: "nextApp",
        clientSecret: "secret",
        issuer: "http://localhost:5001",
        idToken: true,
        authorization: { params: { scope: "openid profile auctionApp" } }
    } as OIDCConfig<Profile>),
  ],
});