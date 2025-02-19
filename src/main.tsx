import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FilterProvider } from './context/FilterContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <FilterProvider>
                <App />
            </FilterProvider>
        </BrowserRouter>
    </StrictMode>,
);
