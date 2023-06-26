const getCourt = () =>
  fetch(process.env.NEXTAUTH_URL + '/api/court', {
    method: 'GET',
  });

export { getCourt };
