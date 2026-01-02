import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { LoginUser } from '@/types/api/auth';

interface AuthState {
  accessToken: string | null;
  user: LoginUser | null;
  rehydrated: boolean;

  setAuth: (payload: { accessToken: string; user: LoginUser }) => void;
  setUser: (user: LoginUser | null) => void;
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
