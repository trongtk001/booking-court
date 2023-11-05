const login = async (email: string, password: string) =>
  await (
    await fetch(process.env.NEXTAUTH_URL + '/api/Login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
  ).json();

export default login;
