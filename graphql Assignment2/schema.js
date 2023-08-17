const {gql} =require("@apollo/server")
exports.typeDefs = gql`
  type Query {
    hello: String
    getUser(username: String!): GitHubUser
  }

  type GitHubUser {
    login: String
    name: String
    avatarUrl: String
    bio: String
  }
`;