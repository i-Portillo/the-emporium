export type Product = {
    id: number;
    name: string;
    price: {
        cp?: number;
        sp?: number;
        gp: number;
    };
    description: string;
};
