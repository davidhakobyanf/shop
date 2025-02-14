import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import NoPage from './components/NoPage/NoPage';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/:name' element={<Home />} />
                    <Route path='*' element={<NoPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
