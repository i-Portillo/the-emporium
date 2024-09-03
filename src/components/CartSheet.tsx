import useCartStore from '@/store/useCartStore';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import { FaShoppingCart } from 'react-icons/fa';
import { Button } from './ui/button';

export default function CartSheet() {
    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearItems = useCartStore((state) => state.clearItems);

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon">
                    <FaShoppingCart />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Cart</SheetTitle>
                </SheetHeader>

                <ul>
                    {items.map((item) => (
                        <li key={item.title} className="flex justify-between">
                            <span>{item.title}</span>
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
