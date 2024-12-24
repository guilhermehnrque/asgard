import { GetServerSidePropsContext } from 'next';
import { isUserLoggedIn, validateUserProfile } from '../adapter/auth/auth';
import { ProfileTypes } from '../enum/ProfileTypes';

export const validateUser = async (context: GetServerSidePropsContext) => {
  const isLogged = await isUserLoggedIn(context);
  const isUserOrganizer = await validateUserProfile(context, ProfileTypes.ORGANIZER);

  if (!isLogged || !isUserOrganizer) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // Se tudo estiver correto, retorna undefined (sem redirecionamento)
  return undefined;
};
