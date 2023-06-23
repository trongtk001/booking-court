import { redirect } from 'next/navigation';

async function proxy(request: Request) {
  const url = request.url;
  const uri = url.substring(url.indexOf('api') + 3);

  redirect('http://localhost:5108/api' + uri);
}

export { proxy as GET, proxy as POST, proxy as PUT, proxy as DELETE, proxy as PATCH, proxy as HEAD, proxy as OPTIONS };
