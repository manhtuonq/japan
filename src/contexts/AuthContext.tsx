import { createContext, ReactNode, useState } from 'react';

type Props = {
    children?: ReactNode;
};

type IAuhContext = {
    isAuthenticated: boolean;
    setAuthenticated: (value: boolean) => void;
};

const initialState = {
    isAuthenticated: false,
    setAuthenticated: () => {}
};

const AuthContext = createContext<IAuhContext>(initialState);

const AuthProvider = ({ children }: Props) => {
    const [isAuthenticated, setAuthenticated] = useState(initialState.isAuthenticated);
    return <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
