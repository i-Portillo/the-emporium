import useCartStore from '@/store/useCartStore';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import { FaShoppingCart } from 'react-icons/fa';

export default function CartSheet() {
    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearItems = useCartStore((state) => state.clearItems);

    return (
        <Sheet>
            <SheetTrigger>
                <FaShoppingCart />
            </SheetTrigger>
            <SheetContent className="bg-gradient-blueish-gray text-white border-l-2">
                <SheetHeader>
                    <SheetTitle>Cart</SheetTitle>
                </SheetHeader>
                <ul>
                    {items.map((item) => (
                        <li key={item.name} className="flex justify-between">
                            <span>{item.name}</span>
                            <button onClick={() => removeItem(item)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <button onClick={clearItems}>Clear Cart</button>
            </SheetContent>
        </Sheet>
    );
}
