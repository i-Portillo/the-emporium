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
import { Plus } from 'lucide-react';

export default function ProductTable() {
    const { addItem } = useCartStore();

    const query = useQuery<Array<Product>>({
        queryKey: ['products'],
        queryFn: getAllProducts,
        staleTime: Infinity,
    });

    return (
        <Card>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            {/* <TableHead>Category</TableHead> */}
                            <TableHead>Price</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {query.data?.map((item) => (
                            <TableRow key={item.name} className="h-16">
                                <TableCell>{item.name}</TableCell>
                                {/* <TableCell>{item.category}</TableCell> */}
                                <TableCell>${item.price || 0}</TableCell>
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
