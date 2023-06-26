const fetcher = async (url: string) => {
  const res = await fetch(`/api${url}`);

  if (!res.ok) {
    const error = new Error();
    error.message = await res.json();

    throw error;
  }

  return res.json();
};

export default fetcher;
