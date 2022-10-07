//Core
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routersList from "../../core/config";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
//Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
//Helpers
import { ThemeContext, theme } from '../_helpers/context/theme';

function App() {
    const [value, setValue] = useState(theme.color.first);
    // const [error, setError] = useState(false);

    // const handleError = () => {
    //     setError(true)
    // }
    return (
        <ErrorBoundary>
            <ThemeContext.Provider value={[value, setValue]}>
                <BrowserRouter>
                {/* <button onClick={handleError}>Set error</button> */}
                    <Header />
                    {/* {error && { test: 'qwertyui'}} */}
                    <main>
                        <Routes>
                            {routersList.map(item => (
                                <Route key={item.path} path={item.path} element={item.component}></Route>
                            ))}
                        </Routes>
                    </main>
                    <Footer />
                </BrowserRouter>
            </ThemeContext.Provider>
        </ErrorBoundary>
    );
};

export default App;