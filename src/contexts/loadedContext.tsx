import { ReactNode, createContext, useState } from "react";

interface LoadedContextType {
    loaded: boolean;
    page: number;
    setLoaded: (value: boolean) => void;
    setPage: (value: number) => void;
}

export const LoadedContext = createContext<LoadedContextType>({
    loaded: false,
    page: 1,
    setLoaded: (value: boolean) => { },
    setPage: (value: number) => { },
});

interface ProviderProps {
    children: ReactNode;
}

export function LoadedContextProvider({ children }: ProviderProps) {
    const [loaded, setLoaded] = useState(false);
    const [page, setPage] = useState(1);

    return (
        <LoadedContext.Provider
            value={{
                loaded,
                page,
                setLoaded,
                setPage,
            }}
        >
            {children}
        </LoadedContext.Provider>
    );
}
