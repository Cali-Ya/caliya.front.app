import { create } from 'zustand';

const useIsTogglePage = create((set) => ({
  togglePage: false,
  setTogglePage: () => set((state) => ({ togglePage: !state.togglePage })),
}));

export default useIsTogglePage;
