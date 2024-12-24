import { ProfileResponse } from '@/libs/types/ProfileResponse';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function profileHandler(request: NextApiRequest, response: NextApiResponse<ProfileResponse>) {
    const cookie = request.headers.cookie || '';
    const token = cookie
        .split('; ')
        .find((cookie) => cookie.startsWith('token='))
        ?.split('=')[1];

    const MIDGARD_API_URL = process.env.MIDGARD_API_URL;

    try {
        await fetch(`${MIDGARD_API_URL}/v1/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        response.setHeader('Set-Cookie', 'token=; Max-Age=0; path=/; HttpOnly; SameSite=Strict');
        response.status(200).json({ message: 'Logged out successfully' });

        return response.status(200).json({ message: 'Logout realizado com sucesso' });

    } catch (error) {
        response.setHeader('Set-Cookie', 'token=; Max-Age=0; path=/; HttpOnly; SameSite=Strict');

        console.error("Erro de conexão:", error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }

}