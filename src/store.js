import { create } from "zustand";

export const useOrder = create((set) => ({
  number: null,
  plan: null,
  user: null,

  setNumber: (number) => set({ number }),
  setPlan: (plan) => set({ plan }),
  setUser: (user) => set({ user }),
  reset: () => set({ number: null, plan: null, user: null }),
}));
