import { storage } from '@/configs/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

const uploadImage = async (image: File | null) => {
  if (!image) return null;

  const imageRef = ref(storage, `images/${image.name}-${v4()}`);
  await uploadBytes(imageRef, image);
  const imageUrl = await getDownloadURL(imageRef);
  return imageUrl;
};

export default uploadImage;
