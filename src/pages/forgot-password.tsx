import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage('Se um e-mail estiver cadastrado, você receberá as instruções para redefinir a senha em breve.');
  };

  const handleGoBack = () => {
    router.back()
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Recuperar Senha</h2>
        
        {message && (
          <p className="text-sm text-center text-green-500">
            {message}
          </p>
        )}

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Digite seu e-mail" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          
  
          <div className="flex flex-col items-center justify-between mt-6 space-y-4">
            <button 
              type="submit" 
              className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Resetar
            </button>
            <button 
              type="button" 
              onClick={handleGoBack}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
