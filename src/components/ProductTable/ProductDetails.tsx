import { useState } from 'react';
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import translate from 'translate';

export default function ProductDetails({ product }) {
    translate.engine = 'google';

    const [desc, setDesc] = useState(product.summary);

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{product.name}</DialogTitle>
            </DialogHeader>
            <Button
                onClick={async () =>
                    setDesc(await translate(product.summary, 'es'))
                }
                disabled={desc !== product.summary}
            >
                Translate
            </Button>
            <DialogDescription>{desc}</DialogDescription>
        </DialogContent>
    );
}
