import { ProfileTypes } from '@/libs/enum/ProfileTypes';
import { GetServerSidePropsContext } from 'next';

export const isUserLoggedIn = async (context: GetServerSidePropsContext) => {
    const token = await getCookie(context);

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    const MIDGARD_API_URL = process.env.MIDGARD_API_URL;

    try {
        const res = await fetch(`${MIDGARD_API_URL}/v1/auth/validate-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        return res.ok
    } catch (error) {
        console.error('[IntegrationError] Error na integração com Midgard:', error);
        return false
    }

};

export const validateUserProfile = async (context: GetServerSidePropsContext, profileType: ProfileTypes) => {
    const token = await getCookie(context);
    console.log(token)

    const ASGARD_URL = process.env.ASGARD_URL;

    const result = await fetch(`${ASGARD_URL}/api/profile`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!result.ok) {
        return;
    }

    const data = await result.json();

    const profileResponse: { profile?: string; message?: string } = data;

    return profileResponse.profile === profileType

}

const getCookie = async (context: GetServerSidePropsContext) => {
    const cookies = context.req.headers.cookie || '';
    const token = cookies
        .split('; ')
        .find((cookie) => cookie.startsWith('token='))?.split('=')[1];

    return token;
}