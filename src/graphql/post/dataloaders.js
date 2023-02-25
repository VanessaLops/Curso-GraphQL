import DataLoader from 'dataloader';

export const makePostDataLoader = (getUsers) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join('&id=');
    const response = await getUsers('?id=' + urlQuery);
    const posts = await response.json();
    return ids.map((id) => posts.find((user) => user.id === id));
  });
};
