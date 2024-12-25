export const validInput = {
    email: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    password: (password: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&]).{8,}$/.test(password),
    username: (username: string) => username.length >= 6
};
