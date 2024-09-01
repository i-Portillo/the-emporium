import './App.css';

import { Button } from './components/ui/button';
import TopBar from './components/TopBar';
import { useStore } from './store/useStore';
import PokemonList from './components/PokemonList';

function App() {
    const { count, increment } = useStore();

    return (
        <>
            <header>
                <TopBar />
            </header>
            <main className="flex flex-col">
                <PokemonList />
            </main>
        </>
    );
}

export default App;
