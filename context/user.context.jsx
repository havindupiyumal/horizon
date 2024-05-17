"use client";
import { getLoggedInUser } from "@/lib/server/actions/user.actions";
import { redirect } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

const INITIAL_STATE = {
  currentUser: null,
  setCurrentUser: () => null,
  isLoading: false,
  setIsLoading: () => null,
};

export const UserContext = createContext(INITIAL_STATE);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadLoggedInUser = async () => {
      try {
        setIsLoading(true);
        const user = await getLoggedInUser();
        console.log("loadLoggedInUser", user);
        setCurrentUser(user);
      } catch (error) {
        console.log("Error loadLoggedInUser", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadLoggedInUser();
  }, []);

  const values = {
    currentUser,
    setCurrentUser,
    isLoading,
    setIsLoading,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
