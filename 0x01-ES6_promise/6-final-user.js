import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, latsName, fileName) {
  const userResponse = signUpUser(firstName, latsName);
  const photoRespionse = uploadPhoto(fileName);

  return Promise.allSettled([userResponse, photoRespionse])
    .then((results) => {
      results.map((result) => {
        if (result.status === 'fulfilled') {
          return {
            status: 'fulfilled',
            value: result.value,
          };
        }
        return {
          status: 'rejected',
          value: result.reason.toString(),
        };
      });
    });
}
