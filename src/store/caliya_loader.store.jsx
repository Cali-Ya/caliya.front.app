import { create } from 'zustand';

const useCaliyaLoader = create((set) => ({
  state_caliya_loader: false,

  setStateCaliyaLoader: (value) => {
    set({ state_caliya_loader: value });
  },
}));

export default useCaliyaLoader;
