import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

interface CustomNextApiRequest extends NextApiRequest {
    body: {
        email: string;
        password: string;
    };
}

export default async function loginHandler(
    request: CustomNextApiRequest, 
    response: NextApiResponse
) {
    const MIDGARD_API_URL = process.env.MIDGARD_API_URL;
    const COOKIE_LIFETIME = process.env.COOKIE_LIFETIME!;

    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email, password } = request.body;

    try {
        const backendResponse = await fetch(`${MIDGARD_API_URL}/v1/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login: email, password }),
        });

        const data = await backendResponse.json();
        const token = data.token;

        response.setHeader(
            'Set-Cookie',
            cookie.serialize('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                maxAge: parseInt(COOKIE_LIFETIME),
                path: '/',
            })
        );

        return response.status(200).json({ success: true });

    } catch (error) {
        console.error('Login error:', error);
        return response.status(500).json({ success: false, message: 'Ocorreu um erro interno' });
    }
}
