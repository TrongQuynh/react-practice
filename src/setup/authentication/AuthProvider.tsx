// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from 'src/common/models/User.model';

const AuthContext = createContext<User | null>(null);

const fakeUser: User =  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // const token = localStorage.getItem("token");
        const user = fakeUser;
        if (user) {
            setUser(user);
            setIsLoading(false);
        }
    }, [user]);

    if (isLoading) return <div>Loading...</div>;
    
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const user = useContext(AuthContext);
    if (!user) console.log("useAuth","User not found");
    return user;
};