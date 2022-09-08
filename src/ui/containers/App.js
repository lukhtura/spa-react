//Core
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeContext, theme } from '../_helpers/context/theme';
import { routers } from "../../core/config";
//Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
//Pages
import Main from "../pages/Main/Main";
import Contacts from "../pages/Contacts/Contacts";
import Todo from "../pages/Todo";

function App() {
    const [value, setValue] = useState(theme.color.first);
    return (
        <ThemeContext.Provider value={[value, setValue]}>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path={routers.main} element={<Main/>}/>
                        <Route path={routers.todo} element={<Todo/>}/>
                        <Route path={routers.about} element={<Contacts/>}/>
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </ThemeContext.Provider>
    )
};

export default App;