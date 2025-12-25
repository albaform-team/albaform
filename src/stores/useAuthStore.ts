import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  setAccessToken: (t: string | null) => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      accessToken: null,
      setAccessToken: t => set({ accessToken: t }),
      clearAuth: () => set({ accessToken: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: s => ({ accessToken: s.accessToken }),
    }
  )
);

export default useAuthStore;
