import './App.css';

import TopBar from './components/TopBar';
import ProductTable from './components/ProductTable';

function App() {
    return (
        <>
            <header>
                <TopBar />
            </header>
            <main className="flex flex-col">
                <ProductTable />
            </main>
        </>
    );
}

export default App;
