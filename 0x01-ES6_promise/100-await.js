import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const userPhoto = await uploadPhoto();
  const userCreate = await createUser();
  return ({ photo: userPhoto, user: userCreate });
}
