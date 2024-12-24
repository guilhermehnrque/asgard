import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {

	const [email, setEmail] = useState('guiro.player');
	const [password, setPassword] = useState('guidoguiroguiro');
	const [error, setError] = useState('');
	const router = useRouter();

	const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError('');

		try {
			const result = await fetch(`/api/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password })

			});

			if (result.ok) {
				router.push('/gateway');
				return;
			}

			const errorData = await result.json();
			console.log("Erro no login:", errorData);
			setError('Error, verifique os dados');

		} catch (error) {
			console.error("Erro de conexão:", error);
			setError('Ocorreu um error interno');
		}

	};

	const handleResetPassword = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		router.push('/forgot-password');
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
				<h2 className="text-2xl font-bold text-center text-gray-700">Acessar Conta</h2>

				{error && <p className="text-red-500 text-center">{error}</p>}

				<form className="mt-8 space-y-4" onSubmit={handleLogin}>
					<div>
						<label htmlFor="login" className="block text-sm font-medium text-gray-600">Login</label>
						<input
							type="text"
							id="login"
							name="login"
							placeholder="Digite seu login"
							required
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-600">Senha</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Digite sua senha"
							required
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className="flex flex-col items-center justify-between mt-6 space-y-4">
						<button
							type="submit"
							className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Acessar
						</button>
						<button
							type="button"
							onClick={handleResetPassword}
							className="text-blue-500 hover:underline focus:outline-none"
						>
							Esqueci minha senha
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
