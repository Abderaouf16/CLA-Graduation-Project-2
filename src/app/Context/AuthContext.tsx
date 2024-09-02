"use client";

import { createContext, useContext, useState, useEffect, useMemo } from "react";
import checkAuth from './../Components/CheckAuth/CheckAuth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Rehydrate user state from localStorageA
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    async function fetchAuth() {
      try {
        const result = await checkAuth();
        if (result.error) {
          console.log(result.error);
        } else {
          // Persist user state in localStorage
          localStorage.setItem('user', JSON.stringify(result.data.user.role));
          setUser(result.data.user.role)
        }
      } catch (error) {
        console.log(error);
      }
    }

    // Fetch the current auth state
    fetchAuth();
  }, [user]);

  const memoizedUser = useMemo(() => user, [user]);
  
  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
