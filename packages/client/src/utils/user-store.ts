import { create } from "zustand";

type User = {
  id: string;
  email?: string;
  access_token: string;
};

type State = {
  user: User | null;
};

type Actions = {
  setUser: (user: User | null) => void;
  logout: () => void;
};

export const userStore = create<State & Actions>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
