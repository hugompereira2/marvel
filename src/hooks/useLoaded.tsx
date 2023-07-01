import { LoadedContext } from "@/contexts/loadedContext";
import { useContext } from "react";

export function useLoaded(){
    return useContext(LoadedContext)
}