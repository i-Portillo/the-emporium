import { create } from 'zustand';
import type { Product } from '@/types/Product';

interface CartStore {
    items: Array<{ product: Product; quantity: number }>;
    addItem: (item: Product) => void;
    removeItem: (item: Product) => void;
    clearItems: () => void;
}

const useCartStore = create<CartStore>((set) => {
    // Check if there is a cart object in the localstorage
    const storedCart = localStorage.getItem('cart');
    const initialItems = storedCart ? JSON.parse(storedCart) : [];

    return {
        items: initialItems,
        addItem: (item) =>
            set((state): CartStore | Partial<CartStore> => {
                const index = state.items.findIndex(
                    (i) => i.product.id === item.id
                );

                if (index === -1) {
                    return {
                        items: [...state.items, { product: item, quantity: 1 }],
                    };
                }

                const newItems = [...state.items];
                newItems[index].quantity += 1;

                return { items: newItems };
            }),
        removeItem: (item) =>
            set((state) => {
                const index = state.items.findIndex(
                    (i) => i.product.id === item.id
                );
                if (index !== -1) {
                    const newItems = [...state.items];
                    newItems.splice(index, 1);
                    return { items: newItems };
                }
                return state;
            }),
        clearItems: () => {
            localStorage.removeItem('cart');
            set({ items: [] });
        },
    };
});

export default useCartStore;
