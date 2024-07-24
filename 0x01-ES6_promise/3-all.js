import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoResponse = uploadPhoto();
  const userResponse = createUser();

  return Promise.all([photoResponse, userResponse])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
}
