exports.resolvers = {
    Query: {
      hello: () => 'Hello, world!',
      getUser: async (_, { username }) => {
        try {
          const response = await axios.get(`https://api.github.com/users/${username}`);
          return response.data;
        } catch (error) {
          throw new Error('User not found');
        }
      },
    },
  };