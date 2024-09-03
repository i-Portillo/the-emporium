import { create } from 'zustand';
import type { Product } from '@/types/Product';

interface CartStore {
    items: Array<Product>;
    addItem: (item: Product) => void;
    removeItem: (item: Product) => void;
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
