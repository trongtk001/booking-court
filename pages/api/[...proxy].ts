import httpProxy from 'http-proxy';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

const proxy = httpProxy.createProxyServer({});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const handleProxy = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req, secret });
  req.headers.cookie = '';

  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: false,
  });
  proxy.once('error', () => {
    res.status(500).end();
  });
};

export default handleProxy;
