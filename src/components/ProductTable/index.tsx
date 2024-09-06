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
import { Button } from '../ui/button';
import { Plus, Search } from 'lucide-react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import ProductDetails from './ProductDetails';

export default function ProductTable({
    products,
}: {
    products: Array<Product>;
}) {
    const { addItem } = useCartStore();

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
                        {products.map((item) => (
                            <TableRow key={item.name} className="h-16">
                                <TableCell>{item.name}</TableCell>
                                {/* <TableCell>{item.category}</TableCell> */}
                                <TableCell className="text-center">
                                    {item.price.gp}gp
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
