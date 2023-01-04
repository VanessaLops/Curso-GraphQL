const posts = () => {
  return [
    {
      id: '1',
      title: 'post 1',
    },
    {
      id: '2',
      title: 'post 2',
    },
    {
      id: '3',
      title: 'post 3',
    },
  ];
};

const post = () => {
  return {
    id: '1',
    title: 'Minha primeira postagem',
  };
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
