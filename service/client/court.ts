import { Court } from '@/model';

const postCourt = (data: Court) =>
  fetch('/api/court', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

export { postCourt };
