import { create } from "zustand";
import { AuthModel, RecordModel } from "pocketbase";

export type userInfo = {
  token: string;
  username?: string;
  name: string;
  email: string;
};

export type userData = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
};

type Auth = {
  user: userInfo | null;
  login: (userInfo: userInfo) => void;
  logout: () => void;
};

export const AuthStore = create<Auth>()((set) => ({
  user: null,
  // Login Function
  //
  login: (userInfo: userInfo) => {
    set((state) => {
      return { user: userInfo };
    });
  },
  // Logout Function
  //
  logout: () => {
    set((state) => {
      return { user: null };
    });
  },
}));
