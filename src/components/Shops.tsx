import { getAllProducts } from '@/api/products';
import { Product } from '@/types/Product';
import { useQuery } from '@tanstack/react-query';
import ProductTable from './ProductTable';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';

export default function Shops() {
    const query = useQuery<Record<string, Array<Product>>>({
        queryKey: ['products'],
        queryFn: getAllProducts,
        staleTime: Infinity,
    });

    return (
        <div>
            {query.isLoading && <p>Loading...</p>}
            {query.isError && <p>Error</p>}
            {query.isSuccess && (
                <div>
                    {Object.keys(query.data!).map((key) => (
                        <div className="mb-8">
                            <Collapsible>
                                <CollapsibleTrigger>
                                    <h1 className="text-3xl">{key}</h1>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <ProductTable
                                        key={key}
                                        products={query.data![key]}
                                    />
                                </CollapsibleContent>
                            </Collapsible>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
