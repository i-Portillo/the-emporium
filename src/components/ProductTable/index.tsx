import useCartStore from '@/store/useCartStore';
import {
    Table,
    TableRow,
    TableHeader,
    TableHead,
    TableBody,
    TableCell,
} from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types/Product';
import { getAllProducts } from '@/api/products';
import { useQuery } from '@tanstack/react-query';
import { Button } from '../ui/button';
import { Plus, Search } from 'lucide-react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import ProductDetails from './ProductDetails';

export default function ProductTable() {
    const { addItem } = useCartStore();

    const query = useQuery<Array<Product>>({
        queryKey: ['products'],
        queryFn: getAllProducts,
        staleTime: Infinity,
    });

    const parsePrice = (price: number) => {
        const gold = Math.floor(price / 100);
        const silver = Math.floor((price % 100) / 10);
        const copper = price % 10;
        const result = [];
        if (gold) {
            result.push(`${gold}g`);
        }
        if (silver) {
            result.push(`${silver}s`);
        }
        if (copper) {
            result.push(`${copper}c`);
        }
        return result.join(' ') || '0c';
    };

    return (
        <Card>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            {/* <TableHead>Category</TableHead> */}
                            <TableHead className="text-center">Price</TableHead>
                            <TableHead></TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {query.data?.map((item) => (
                            <TableRow key={item.name} className="h-16">
                                <TableCell>{item.name}</TableCell>
                                {/* <TableCell>{item.category}</TableCell> */}
                                <TableCell className="text-center">
                                    {parsePrice(item.price)}
                                </TableCell>
                                <TableCell>
                                    <Dialog>
                                        <DialogTrigger>
                                            <Search />
                                        </DialogTrigger>
                                        <ProductDetails product={item} />
                                    </Dialog>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant={'ghost'}
                                        size={'icon'}
                                        onClick={() => addItem(item)}
                                    >
                                        <Plus />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
