import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '9b2b5617e30b5588a431',
            clientSecret: 'b5e79645d76752d19100eab075420410a1671b5d',
        })
    ]
}
export default NextAuth(authOptions);