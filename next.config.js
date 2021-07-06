module.exports = {
  webpack5: true,
  // env is Required for getStaticProps + next build https://github.com/vercel/next.js/discussions/11493#discussioncomment-14606
  env: {},
  publicRuntimeConfig: {
    // Will be available on both server and client
    BackendGraphQLUrl:
      process.env.BACKEND_GRAPHQL_API || 'https://graphqlcdn.trackfootball.app',
  },
  serverRuntimeConfig: {
    BackendApiUrl: process.env.BACKEND_API,
  },
  images: {
    domains: ['lh3.googleusercontent.com', 's.gravatar.com'],
  },
}
