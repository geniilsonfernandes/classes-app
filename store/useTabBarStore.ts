import { create } from "zustand";

type TabBarStore = {
  displayTabBar: boolean;
  hideTabBar: () => void;
  showTabBar: () => void;
};


// Instancia o valor animado uma vez fora do Zustand

export const useTabBarStore = create<TabBarStore>((set) => ({
  displayTabBar: true,
  hideTabBar: () => set({ displayTabBar: false }),
  showTabBar: () => set({ displayTabBar: true }),
}));

