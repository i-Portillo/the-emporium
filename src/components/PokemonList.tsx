import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import useCartStore from '@/store/useCartStore';

export default function PokemonList() {
    const [pokemon, setPokemon] = useState<Array<{ name: string }>>([]);

    const { addItem } = useCartStore();

    useEffect(() => {
        const fetchPokemon = async () => {
            const res = await fetch(
                'https://pokeapi.co/api/v2/pokemon?limit=10'
            );
            const data = await res.json();
            setPokemon(data.results);
        };

        fetchPokemon();
    }, []);

    const handleAddToCart = (pokemonName: string) => {
        addItem({ name: pokemonName });
    };

    return (
        <div>
            {pokemon.map((p, index) => (
                <div key={index} className="flex w-64 justify-between ml-10">
                    <p>{p.name}</p>
                    <Button
                        variant={'ghost'}
                        onClick={() => handleAddToCart(p.name)}
                    >
                        +
                    </Button>
                </div>
            ))}
        </div>
    );
}
