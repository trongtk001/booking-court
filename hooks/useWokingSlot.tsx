import httpMethods from '@/service/client/fetcher';
import useSWR from 'swr';

const key = '/WorkingSlotInAMonth';

const useWokingSlot = (startDate: string, endDate: string) => {
  const { data, error, isLoading, mutate } = useSWR(key + `?start=${startDate}&end=${endDate}`, httpMethods.get);

  const postWokingSlot = async (data: any) => {
    const res = await httpMethods.post(key, { data });
    mutate();
    return res;
  };

  const putWokingSlot = async (data: any) => {
    const res = await httpMethods.put(key, { data });
    mutate();
    return res;
  };

  const deleteWokingSlot = async (id?: number) => {
    const res = await httpMethods.delete(key + `?id=${id}`);
    mutate();
    return res;
  };

  return { data, error, isLoading, mutate, postWokingSlot, putWokingSlot, deleteWokingSlot };
};

export default useWokingSlot;
