import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photoResponse = await uploadPhoto();
  const userResponse = await createUser();

  if (!photoResponse || !userResponse) {
    return {
      photo: null,
      user: null,
    };
  }

  return {
    photo: photoResponse,
    user: userResponse,
  };
}
