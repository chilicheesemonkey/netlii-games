// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createContext, useState } from "react";

export const GenresContext = createContext<{
    genres: number | null;
    setGenres: (data: number) => void;
}>({
    genres: null,
    setGenres: () => {},
});

export const GenresProvider = ({children}: {children: React.ReactNode}) => {
    const [genres, setGenres] = useState(null);
    const value = {genres, setGenres};

    return (
        <GenresContext.Provider value={value}>{children}</GenresContext.Provider>
    );
}