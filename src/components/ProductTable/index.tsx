import useCartStore from '@/store/useCartStore';
import {
    Table,
    TableRow,
    TableHeader,
    TableHead,
    TableBody,
} from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types/Product';
import { getAllProducts } from '@/api/products';
import { useQuery } from '@tanstack/react-query';

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
                            <TableHead>Category</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {query.data?.map((item) => (
                            <TableRow key={item.title} className="h-16">
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button onClick={() => addItem(item)}>
                                        Add to Cart
                                    </button>
                                </td>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
