import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
//Pages
import Main from "../pages/Main";
import About from "../pages/About";



import { ThemeContext, theme } from '../_helpers/context/theme';
import { routers } from "../../core/config";



function App() {
    const [value, setValue] = useState(theme.color.second);
    return (
        <ThemeContext.Provider value={[value, setValue]}>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path={routers.main} element={<Main/>}/>
                        <Route path={routers.about} element={<About/>}/>
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </ThemeContext.Provider>
    )
};

export default App;