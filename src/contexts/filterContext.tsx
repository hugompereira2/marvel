import { ReactNode, createContext, useEffect, useState } from "react";
import { Character } from "@/types/types";
import { getCharacters, getCharactersByName } from "@/api/api";

interface FilterContextProps {
    loaded: boolean;
    page: number;
    characterList: Character[];
    totalItems: number,
    searchWord: string,
    setSearchWord: (value: string) => void,
    setTotalItems: (value: number) => void,
    setLoaded: (value: boolean) => void;
    setCharacterList: (value: Character[]) => void;
    setPage: (value: number) => void;
}

export const FilterContext = createContext<FilterContextProps>({
    loaded: false,
    page: 1,
    characterList: [],
    totalItems: 0,
    searchWord: "",
    setSearchWord: (value: string) => { },
    setTotalItems: (value: number) => { },
    setLoaded: (value: boolean) => { },
    setCharacterList: (value: Character[]) => { },
    setPage: (value: number) => { },
});

interface ProviderProps {
    children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
    const [loaded, setLoaded] = useState(false);
    const [searchWord, setSearchWord] = useState("");
    const [page, setPage] = useState(1);
    const [characterList, setCharacterList] = useState<Character[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);

    const fetchCharacters = async () => {
        setLoaded(false);
        let resp;

        if (searchWord.length > 1) {
            resp = await getCharactersByName(searchWord, page);
        } else {
            resp = await getCharacters(page);
        }

        if (resp.code === 200) {
            setTotalItems(resp.data.total!);
            setCharacterList(resp.data.results);
        }
        setLoaded(true);
    };

    useEffect(() => {
        fetchCharacters();
    }, [page, searchWord]);

    return (
        <FilterContext.Provider
            value={{
                loaded,
                page,
                characterList,
                totalItems,
                searchWord,
                setSearchWord,
                setTotalItems,
                setLoaded,
                setCharacterList,
                setPage,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
}
