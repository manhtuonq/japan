'use client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import { login } from '@/api/auth.api';
import { validInput } from '@/utils/validInput';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const isEmailValid = validInput.email(email);
    const isPasswordValid = validInput.password(password);
    const isFormValid = isEmailValid && isPasswordValid;

    const handleLogin = async () => {
        try {
            await login(email, password);
            navigate('/homepage');
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message || 'ログインに失敗しました。もう一度お試しください。');
        }
    };

    const handleRegister = () => navigate('/register');
    const handleForgotPassword = () => navigate('/forgot-password');

    return (
        <div className='bg-white flex flex-col items-center justify-between min-h-screen p-4'>
            <div className='flex flex-col items-center justify-center flex-grow relative'>
                {/* Circles Background */}
                <div className='absolute w-24 h-24 top-0 left-10 bg-orange-400 rounded-full'></div>
                <div className='absolute w-36 h-36 -top-20 right-5 bg-orange-200 rounded-full'></div>

                <div className='bg-white p-8 rounded-lg shadow-md z-10'>
                    <h1 className='text-center text-2xl text-black font-bold mb-4'>ログイン</h1>

                    {errorMessage && <p className='text-red-500 text-sm mb-4'>{errorMessage}</p>}

                    {/* Username */}
                    <div className='mb-4'>
                        <label className='block text-gray-500 mb-2'>ユーザー名</label>
                        <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full py-2 px-3 rounded border ${!isEmailValid && email ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
                        />
                        {!isEmailValid && email && (
                            <p className='text-red-500 text-xs'>有効なメールアドレスを入力してください。</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className='mb-4'>
                        <label className='block text-gray-500 mb-2'>パスワード</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full py-2 px-3 rounded border ${!isPasswordValid && password ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
                            />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-2 top-2'
                            >
                                {showPassword ? <EyeSlashIcon className='w-5 h-5' /> : <EyeIcon className='w-5 h-5' />}
                            </button>
                        </div>
                        {!isPasswordValid && password && (
                            <p className='text-red-500 text-xs'>
                                パスワード: 8文字以上 (大文字、小文字、数字、記号を含む)
                            </p>
                        )}
                    </div>

                    {/* Buttons */}
                    <button
                        onClick={handleLogin}
                        disabled={!isFormValid}
                        className={`w-full py-2 px-4 rounded text-white ${isFormValid ? 'bg-orange-500' : 'bg-gray-300'} transition`}
                    >
                        ログイン
                    </button>
                </div>

                {/* Navigation */}
                <div className='mt-8 text-center'>
                    <p className='text-gray-500'>
                        アカウントが必要ですか？{' '}
                        <span onClick={handleRegister} className='text-orange-500 cursor-pointer'>
                            登録
                        </span>
                    </p>
                    <p className='text-orange-500 mt-2 cursor-pointer' onClick={handleForgotPassword}>
                        パスワードを忘れた？
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
