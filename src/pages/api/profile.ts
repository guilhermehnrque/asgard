import { ProfileResponse } from '@/libs/types/ProfileResponse';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function profileHandler(request: NextApiRequest, response: NextApiResponse<ProfileResponse>) {
    const MIDGARD_API_URL = process.env.MIDGARD_API_URL;

    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
        return response.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const res = await fetch(`${MIDGARD_API_URL}/v1/auth/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!res.ok) {
            return response.status(401).json({ message: 'Unauthorized' });
        }

        const data = await res.json();
        const profile = data.data

        return response.status(200).json({ profile });

    } catch (error) {
        console.error("Erro de conexão:", error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }

}