import Button from '@/Components/button';
import Input from '@/Components/input';
import Label from '@/Components/label';
import Modal from '@/Components/modal';
import { Select } from '@/Components/select';
import { Court } from '@/model';
import { postCourt } from '@/service/client/court';
import uploadImage from '@/service/client/upload-image';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';
import useSWR from 'swr';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

const initValue = {
  courtCode: '',
  imageURI: '',
  description: '',
  totalPerson: 0,
  price: 0,
  availableStatus: '',
  reservationStatus: '',
};

const CreateCourtModal = ({ isOpen, closeModal }: Props) => {
  const [courtData, setCourtData] = useState<Court>(initValue);
  const [image, setImage] = useState<File | null>(null);
  const { mutate } = useSWR('/court');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCourtData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const imageURI = await uploadImage(image);
    if (imageURI) {
      setCourtData((prevData) => ({ ...prevData, imageURI }));
      const response = await postCourt({ ...courtData, imageURI });
      if (response.ok) {
        setCourtData(initValue);
        mutate();
        closeModal();
      }
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="w-full transform overflow-hidden rounded-2xl bg-white py-6 px-10 text-left align-middle shadow-xl transition-all">
          <h3 className="text-xl text-primary mb-2 capitalize my-4">Create new court</h3>
          <div className="flex">
            <div className="basis-1/2">
              <label htmlFor="dropzone-file" className="relative hover:opacity-80 hover:cursor-pointer">
                {!image ? (
                  <div className="flex flex-col items-center justify-center w-[25rem] h-[16rem] m-5 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <CloudArrowUpIcon className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF </p>
                  </div>
                ) : (
                  <Image src={URL.createObjectURL(image)} alt="" className="p-4 w-[25rem] h-[16rem] object-contain " width={400} height={256} />
                )}
                <input onChange={handleImageChange} id="dropzone-file" type="file" accept="image/*" className="absolute inset-0 opacity-0" />
              </label>
              {image && (
                <label htmlFor="dropzone-file" className="rounded-md  p-2 mx-2 hover:opacity-80 hover:text-primary hover:cursor-pointer">
                  change image
                </label>
              )}
            </div>
            <form className="basis-1/2 flex flex-col " onSubmit={handleSubmit}>
              <Label>Court Code:</Label>
              <Input className="w-[30rem]" name="courtCode" value={courtData.courtCode} onChange={handleChange} />
              <Label>Description:</Label>
              <Input className="w-[30rem]" name="description" value={courtData.description} onChange={handleChange} />
              <Label>Total Person:</Label>
              <Input className="w-[30rem]" name="totalPerson" value={courtData.totalPerson} onChange={handleChange} />
              <Label>Price:</Label>
              <Input className="w-[30rem]" name="price" value={courtData.price} onChange={handleChange} />
              <Label>Available Status:</Label>
              <Select className="w-[30rem]" name="availableStatus" value={courtData.availableStatus} onChange={handleChange}>
                <Select.Option value="0">Available</Select.Option>
                <Select.Option value="1">Not Available</Select.Option>
              </Select>
              <Label>Reservation Status:</Label>
              <Select className="w-[30rem]" name="reservationStatus" value={courtData.reservationStatus} onChange={handleChange}>
                <Select.Option value="0">Available</Select.Option>
                <Select.Option value="1">Not Available</Select.Option>
              </Select>
              <Button className="w-full mx-auto mt-4" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateCourtModal;
