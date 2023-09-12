"use client";
import { useState } from "react";
import { AuthStore, userData, userInfo } from "store/auth";
import PockeBase from "pocketbase";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { login, logout } = AuthStore();
  const pb = new PockeBase(process.env.NEXT_PUBLIC_API);

  const userSignup = async (userData: userData) => {
    setIsLoading(true);
    setError(null);

    const response = await pb
      .collection("users")
      .create(userData)
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });

    if (response && response.id) {
      const logResponse = await pb
        .collection("users")
        .authWithPassword(userData.username, userData.password);

      if (logResponse.token) {
        const info: userInfo = {
          token: logResponse.token,
          username: logResponse.record.username,
          name: logResponse.record.name,
          email: logResponse.record.email,
        };

        login(info);
      } else {
        //@ts-ignore
        setError(logResponse.message);
      }
    }

    setIsLoading(false);
  };

  const userLogin = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await pb
      .collection("users")
      .authWithPassword(username, password)
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });

    //@ts-ignore
    if (response.code === 400) {
      //@ts-ignore
      setError(response.message);
    }

    if (response && response.token) {
      const info: userInfo = {
        token: response.token,
        username: response.record.username,
        email: response.record.email,
        name: response.record.name,
      };

      login(info);
    }

    setIsLoading(false);
  };

  return { isLoading, error, userSignup, userLogin };
};

export default useAuth;
