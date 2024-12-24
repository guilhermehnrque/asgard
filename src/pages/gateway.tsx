import { ProfileTypes } from '@/libs/enum/ProfileTypes';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = context.req.headers.cookie || '';

    const token = cookies
        .split('; ')
        .find((cookie) => cookie.startsWith('token='))
        ?.split('=')[1];

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    const ASGARD_URL = process.env.ASGARD_URL;
    const result = await fetch(`${ASGARD_URL}/api/profile`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!result.ok) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }

    const data = await result.json();
    const profileResponse: { profile?: string; message?: string } = data;

    switch (profileResponse.profile) {
        case ProfileTypes.ORGANIZER:
            return {
                redirect: {
                    destination: '/organizer',
                    permanent: false,
                },
            };

        case ProfileTypes.PLAYER:
            return {
                redirect: {
                    destination: '/player',
                    permanent: false,
                },
            };
    }

    return {
        props: {},
    };

};

const GatewayPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>Redirecting you based on your profile...</p>
        </div>
    );
};

export default GatewayPage;
