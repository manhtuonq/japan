import React, { useState } from 'react';
import { validInput } from '@/utils/validInput';
import { register } from '@/api/auth.api';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const isEmailValid = validInput.email(email);
    const isPasswordValid = validInput.password(password);
    const isUsernameValid = validInput.username(username);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Reset messages
        setErrorMessage('');
        setSuccessMessage('');

        // Validate inputs
        if (!isUsernameValid) {
            setErrorMessage('ユーザー名は6文字以上である必要があります。');
            return;
        }
        if (!isEmailValid) {
            setErrorMessage('有効なメールアドレスを入力してください。');
            return;
        }
        if (!isPasswordValid) {
            setErrorMessage('パスワードは8文字以上で、大文字、小文字、数字、特殊文字（@#$%^&）を含む必要があります。');
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('パスワードが一致していません。');
            return;
        }

        try {
            await register(username, password, email);
            setSuccessMessage('登録が完了しました。ログインしてください。');
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message || '登録に失敗しました。再度お試しください。');
        }
    };

    return (
        <div className='bg-white flex flex-col items-center justify-center min-h-screen p-4 relative'>
            {/* Decorative circles */}
            <div
                className='absolute'
                style={{
                    width: '60px',
                    height: '60px',
                    top: '-10px',
                    left: '-25px',
                    backgroundColor: '#FE724C',
                    borderRadius: '50%'
                }}
            ></div>
            <div
                className='absolute'
                style={{
                    width: '120px',
                    height: '120px',
                    top: '-50px',
                    left: '-10px',
                    backgroundColor: '#FFECE7',
                    borderRadius: '50%'
                }}
            ></div>
            <div
                className='absolute'
                style={{
                    width: '130px',
                    height: '130px',
                    top: '-70px',
                    left: '180px',
                    backgroundColor: '#FE724C',
                    borderRadius: '50%'
                }}
            ></div>

            {/* Form container */}
            <div className='bg-white p-6 rounded-xl shadow-xl w-[280px] z-10'>
                <h2 className='text-center text-xl font-bold text-[#4e4f50] mb-5'>アカウント登録</h2>

                {errorMessage && <p className='text-red-500 text-sm mb-4'>{errorMessage}</p>}
                {successMessage && <p className='text-green-500 text-sm mb-4'>{successMessage}</p>}

                <form onSubmit={handleSubmit} id='registration-form'>
                    <div className='mb-4'>
                        <label htmlFor='username' className='block text-sm font-medium text-[#4e4f50]'>
                            ユーザー名
                        </label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            className='w-full p-3 mt-2 border-2 border-[#d1d5db] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE724C]'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email input */}
                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-sm font-medium text-[#4e4f50]'>
                            メール
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='w-full p-3 mt-2 border-2 border-[#d1d5db] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE724C]'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password input */}
                    <div className='mb-4'>
                        <label htmlFor='password' className='block text-sm font-medium text-[#4e4f50]'>
                            パスワード
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            className='w-full p-3 mt-2 border-2 border-[#d1d5db] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE724C]'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Confirm password input */}
                    <div className='mb-4'>
                        <label htmlFor='confirm-password' className='block text-sm font-medium text-[#4e4f50]'>
                            パスワード確認
                        </label>
                        <input
                            type='password'
                            id='confirm-password'
                            name='confirm-password'
                            className='w-full p-3 mt-2 border-2 border-[#d1d5db] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE724C]'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Account login link */}
                    <div className='text-center mb-4'>
                        <span className='text-sm text-gray-600'>すでにアカウントをお持ちですか？</span>
                        <a href='/login' className='text-sm text-[#FE724C] hover:underline'>
                            ログイン
                        </a>
                    </div>

                    {/* Register button */}
                    <div className='mt-4'>
                        <button
                            type='submit'
                            className='w-[60%] py-2 bg-[#FE724C] text-black rounded-full text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#FE724C] hover:bg-[#e55d3c] mx-auto block'
                        >
                            登録
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
