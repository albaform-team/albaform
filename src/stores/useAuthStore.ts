import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { LoginUser } from '@/types/api/auth';

interface AuthState {
  accessToken: string | null;
  user: LoginUser | null;

  setAuth: (payload: { accessToken: string; user: LoginUser }) => void;
  setUser: (user: LoginUser | null) => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      accessToken: null,
      user: null,

      setAuth: ({ accessToken, user }) =>
        set({
          accessToken,
          user,
        }),

      setUser: user => set({ user }),

      clearAuth: () =>
        set({
          accessToken: null,
          user: null,
        }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: AuthStore => ({
        accessToken: AuthStore.accessToken,
        user: AuthStore.user,
      }),
    }
  )
);

export default useAuthStore;
