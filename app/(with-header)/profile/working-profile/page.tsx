'use client';
import { role } from '@/model';
import httpMethods from '@/service/client/fetcher';
import { useSession } from 'next-auth/react';
import React from 'react';
import useSWR from 'swr';

type Props = {};

const WorkingProfile = (props: Props) => {
  const user = useSession().data?.user;

  const res = useSWR(`/StaffWorkingProfile/GetStaffWowrkingProfileByUserId/${user?.id}`);

  const workingProfile = res.data?.result;

  return (
    user &&
    workingProfile && (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Employee Information</h1>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">User Information</h2>
          <p className="text-lg mb-4">Email: {user.email}</p>
          <p className="text-lg mb-4">User Name: {user.userName}</p>
          <p className="text-lg mb-4">Role: {role[user.role]}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-10">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Attendance</h2>
            <p className="text-lg mb-4">Total Present: {workingProfile.totalPresent}</p>
            <p className="text-lg mb-4">Total Absent: {workingProfile.totalAbsent}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Salary</h2>
            <p className="text-lg mb-4">Total Salary: {workingProfile.totalSalary} VND</p>
          </div>
        </div>
      </div>
    )
  );
};

export default WorkingProfile;
