module.exports = () => {
  const data = {
    friends: [],
  };
  for (let i = 0; i < 500; i++) {
    data.friends.push({
      id: i + 1,
      likes: Math.round(Math.random() * 5),
      name: `friend ${i + 1}`,
    });
  }

  return data;
};
