import { AttendanceStatus } from '@/model';
import httpMethods from '@/service/client/fetcher';
import useSWR from 'swr';

const key = '/UserSlot';

const useUserSlot = () => {
  const { data, error, isLoading, mutate } = useSWR(key);

  const getUserSlotById = (id?: number) => {
    const res = httpMethods.get(key + `?id=${id}`);
    return res;
  };

  const deleteUserSlot = (id?: number) => {
    const res = httpMethods.delete(key + `?id=${id}`);
    mutate();
    return res;
  };

  const getUserSlotByUserId = (userId?: number) => {
    const res = httpMethods.get(key + `/${userId}`);
    mutate(res);
    return res;
  };

  const checkAttendance = async (userId: number, workingSlotId: number) => {
    const res = await httpMethods.put(key + `/${userId}/${workingSlotId}/${AttendanceStatus.Present}`);
    return res;
  };

  return { data, error, isLoading, getUserSlotById, deleteUserSlot, checkAttendance };
};

export const useUserSlotByUserId = (userId?: number) => {
  const res = useSWR(key + '/GetAllUserSlotByUserId' + `/${userId}`);

  return res;
};

export default useUserSlot;
