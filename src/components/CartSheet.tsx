import useCartStore from '@/store/useCartStore';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from './ui/button';
import { ShoppingCart, X } from 'lucide-react';

export default function CartSheet() {
    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearItems = useCartStore((state) => state.clearItems);

    const handleBuy = () => {
        localStorage.setItem('cart', JSON.stringify(items));
    };

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
                        <li
                            key={item.product.name}
                            className="flex justify-between items-center"
                        >
                            <span>{item.product.name}</span>
                            <span>{item.quantity}</span>
                            <Button
                                size={'icon'}
                                variant={'ghost'}
                                onClick={() => removeItem(item.product)}
                            >
                                <X />
                            </Button>
                        </li>
                    ))}
                </ul>
                <div>
                    Total:{' '}
                    {items.reduce(
                        (acc, item) =>
                            acc + item.product.price.gp * item.quantity,
                        0
                    )}
                </div>
                <div className="flex justify-between">
                    <Button variant={'destructive'} onClick={clearItems}>
                        Clear Cart
                    </Button>
                    <Button onClick={handleBuy}>Buy</Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}
