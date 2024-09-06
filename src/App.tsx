import './App.css';

import TopBar from './components/TopBar';
import Shops from './components/Shops';

function App() {
    return (
        <>
            <header>
                <TopBar />
            </header>
            <main className="flex flex-col">
                <Shops />
            </main>
        </>
    );
}

export default App;
