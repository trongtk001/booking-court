import Button from '@/Components/button';
import { Court } from '@/model';
import React from 'react';
import useSWR from 'swr';

async function getCourtDetail(courtId: number) {
  const res = await fetch('http://localhost:3000/api/court/' + courtId);

  return res.json();
}

type CourtDetailPageProps = {
  params: { courtId: number };
};

const CourtDetailPage: React.FC<CourtDetailPageProps> = async ({ params }) => {
  const res = await getCourtDetail(params.courtId);
  const court: Court = res.result;

  if (!court) {
    return <>Not thing to display</>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Court Details</h1>

      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img className="w-full rounded-lg shadow-lg" src={court.imageURI} alt={court.courtCode} />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 flex flex-col ">
          <p className="text-2xl font-bold mb-4">Court code: {court.courtCode}</p>
          <p className="text-lg mb-4">Description: {court.description}</p>
          <p className="text-lg mb-4">Total Persons: {court.totalPerson}</p>
          <p className="text-lg mb-4">Price: ${court.price}</p>
          <Button className="px-6 py-3 text-white rounded-md shadow-md ">Reserve</Button>
        </div>
      </div>
    </div>
  );
};

export default CourtDetailPage;
