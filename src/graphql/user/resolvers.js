const users = async (_, { input }, { getUsers }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const users = await getUsers('/?' + apiFiltersInput);
  return users.json();
};
const user = async (_, { id, teste }, { getUsers }) => {
  console.log('TESTE', teste);

  const response = await getUsers('/' + id);
  const user = await response.json();
  return user;
};
export const userResolvers = {
  Query: {
    user,
    users,
  },
};
