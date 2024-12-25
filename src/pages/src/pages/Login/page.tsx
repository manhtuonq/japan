'use client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';

export default function Login() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/homepage'); // edit this line later to navigate to homepage after successful login
    };
    const handleRegister = () => {
        navigate('/homepage'); // edit this line later to navigate to register page
    };
    const handleForgotPassword = () => {
        navigate('/homepage'); // edit this line later to navigate to forgot password page
    };

    const isUsernameValid = username.length >= 6;
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&]).{8,}$/.test(password);
    const isFormValid = isUsernameValid && isPasswordValid;

    return (
        <div className='bg-white flex flex-col items-center justify-between min-h-screen p-4'>
            <div className='flex flex-col items-center justify-center flex-grow relative'>
                <div
                    className='absolute'
                    style={{
                        width: '96px',
                        height: '96px',
                        top: '-21px',
                        left: '-46px',
                        backgroundColor: '#FE724C',
                        borderRadius: '50%'
                    }}
                ></div>
                <div
                    className='absolute'
                    style={{
                        width: '165px',
                        height: '165px',
                        top: '-99px',
                        left: '-5px',
                        backgroundColor: '#FFECE7',
                        borderRadius: '50%'
                    }}
                ></div>
                <div
                    className='absolute'
                    style={{
                        width: '181px',
                        height: '181px',
                        top: '-109px',
                        left: '298px',
                        backgroundColor: '#FE724C',
                        borderRadius: '50%'
                    }}
                ></div>
                <div className='bg-white p-8 rounded-lg shadow-md z-10'>
                    <h1 className='text-center text-2xl text-black font-bold mb-4'>ログイン</h1>
                    <div className='mb-4'>
                        <label className='block text-gray-500 mb-2"='>ユーザー名</label>
                        <div className='relative'>
                            <input
                                type='text'
                                id='username'
                                name='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!isUsernameValid && username.length > 0 ? 'border-red-500' : ''}`}
                                style={{ width: '280px', height: '40px', borderRadius: '10px' }}
                            />
                        </div>
                        {!isUsernameValid && username.length > 0 && (
                            <p className='text-red-500 text-xs italic' style={{ width: '280px' }}>
                                ユーザー名: 6文字以上
                            </p>
                        )}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-500 mb-2'>パスワード</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!isPasswordValid && password.length > 0 ? 'border-red-500' : ''}`}
                                style={{ width: '280px', height: '40px', borderRadius: '10px' }}
                            />
                            <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='ml-2 focus:outline-none'
                                >
                                    {showPassword ? (
                                        <EyeSlashIcon className='h-5 w-5 text-gray-500' />
                                    ) : (
                                        <EyeIcon className='h-5 w-5 text-gray-500' />
                                    )}
                                </button>
                            </div>
                        </div>
                        {!isPasswordValid && password.length > 0 && (
                            <p className='text-red-500 text-xs italic' style={{ width: '280px' }}>
                                パスワード: 8文字以上（大文字、小文字、数字、特殊文字「@#$%^&」をそれぞれ1文字以上含む）
                            </p>
                        )}
                    </div>
                </div>
                <div className='mt-8 text-center'>
                    <p className='text-gray-500'>
                        アカウントをお持ちでないですか？{' '}
                        <a href='#' className='text-orange-500' onClick={handleRegister}>
                            登録
                        </a>
                    </p>
                    <p className='text-black font-bold mt-2'>
                        <a href='#' onClick={handleForgotPassword}>
                            パスワードを忘れた？
                        </a>
                    </p>
                </div>
                <div className='mt-16 flex items-center justify-between'>
                    <button
                        className={`text-white py-2 px-4 rounded shadow-md ${isFormValid ? 'bg-orange-500 hover:bg-red-500' : 'bg-gray-400 cursor-not-allowed'} transition duration-300`}
                        style={{ borderRadius: '28.5px' }}
                        onClick={handleLogin}
                        disabled={!isFormValid}
                    >
                        ログイン
                    </button>
                </div>
            </div>
        </div>
    );
}
