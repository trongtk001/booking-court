interface option {
  data?: any;
  prefix?: string;
  subfix?: string;
}

const fetcher = async (url: string, method = 'GET', option?: option) => {
  let body;
  //create url
  if (option) {
    if (option.prefix) {
      url = option.prefix + url;
    }
    if (option.subfix) {
      url = url + option.subfix;
    }
    body = option.data ? JSON.stringify(option.data) : undefined;
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  try {
    const res = await fetch(`/api${url}`, {
      method,
      headers,
      body,
    });

    if (!res.ok) {
      const error = new Error('Network response was not ok');
      error.message = await res.json();
      throw error;
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
};

const httpMethods = {
  get: async (url: string, option?: option) => fetcher(url, 'GET', option),
  post: async (url: string, option?: option) => fetcher(url, 'POST', option),
  put: async (url: string, option?: option) => fetcher(url, 'PUT', option),
  delete: async (url: string, option?: option) => fetcher(url, 'DELETE', option),
};

export default httpMethods;
