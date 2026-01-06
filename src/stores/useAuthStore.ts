import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { User } from '@/types/api/user';

interface AuthState {
  accessToken: string | null;
  user: User | null;
  rehydrated: boolean;

  setAuth: (payload: { accessToken: string; user: User }) => void;
  setUser: (user: User | null) => void;
  setShop: (
    shop: {
      item: {
        id: string;
        name: string;
        category: string;
        address1: string;
        address2: string;
        description: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
    } | null
  ) => void;
  setRehydrated: () => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      accessToken: null,
      user: null,
      rehydrated: false,

      setAuth: ({ accessToken, user }) =>
        set({
          accessToken,
          user,
        }),

      setUser: user => set({ user }),

      setShop: shop => set(pre => ({ ...pre, ...shop })),

      setRehydrated: () => set({ rehydrated: true }),

      clearAuth: () =>
        set({
          accessToken: null,
          user: null,
        }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: s => ({
        accessToken: s.accessToken,
        user: s.user,
      }),
      onRehydrateStorage: () => (state, error) => {
        if (!error) state?.setRehydrated();
      },
    }
  )
);

export default useAuthStore;
