import { useState } from 'react';
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import translate from 'translate';
import { Product } from '@/types/Product';

export default function ProductDetails({ product }: { product: Product }) {
    translate.engine = 'google';

    const [desc, setDesc] = useState(product.description);
    const [translated, setTranslated] = useState(false);

    // Give me a function that gets html as string as input and returns a parsed html
    // code as output
    const parseHtml = (html: string) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const div = doc.createElement('div');
        div.innerHTML = doc.body.innerHTML;
        return div as HTMLElement;
    };

    return (
        <DialogContent>
            <DialogHeader className="flex flex-row items-center justify-between">
                <DialogTitle>{product.name}</DialogTitle>
                <Button
                    onClick={async () => {
                        if (!translated) {
                            setDesc(await translate(product.description, 'es'));
                        } else {
                            setDesc(product.description);
                        }
                        setTranslated((prev) => !prev);
                    }}
                    size={'icon'}
                    variant={'ghost'}
                >
                    {translated ? '🇬🇧' : '🇪🇸'}
                </Button>
            </DialogHeader>
            <DialogDescription>
                <div
                    dangerouslySetInnerHTML={{
                        __html: parseHtml(desc).innerHTML,
                    }}
                />
            </DialogDescription>
        </DialogContent>
    );
}
