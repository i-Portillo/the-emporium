import useCartStore from '@/store/useCartStore';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';

export default function CartSheet() {
    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearItems = useCartStore((state) => state.clearItems);

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon">
                    <ShoppingCart />
                </Button>
            </SheetTrigger>
            <SheetContent>
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
