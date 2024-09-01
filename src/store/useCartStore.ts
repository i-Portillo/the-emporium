import { create } from 'zustand';
import { Equipment } from '@/types/Equipment';

interface CartStore {
    items: Equipment[];
    addItem: (item: Equipment) => void;
    removeItem: (item: Equipment) => void;
    clearItems: () => void;
}

const useCartStore = create<CartStore>((set) => ({
    items: [],
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    removeItem: (item) =>
        set((state) => ({ items: state.items.filter((i) => i !== item) })),
    clearItems: () => set({ items: [] }),
}));

export default useCartStore;
