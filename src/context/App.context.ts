import { createContext } from "react";
import User from "../models/User.model"

interface AppContextData{
    user?: User;
    setUser: (user: User) => void;
}

const AppContext = createContext<AppContextData>(
    {
        setUser: () => { }
    }
);

export default AppContext;