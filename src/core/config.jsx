//Pages
import About from '../ui/pages/About/About';
import Todo from '../ui/pages/Todo/Todo';
import Contacts from '../ui/pages/Contacts/Contacts';
// import LoginForm from '../ui/components/LoginForm/LoginForm';
import MaterialReactFinalForm from '../ui/components/LoginForm/MaterialReactFinalForm';

export const routers = {
    about: '/',
    todo: '/todo',
    login: '/login',
    contacts: '/contacts',
}

const routesList = [
    {
        path: routers.about,
        component: <About/>
    },
    {
        path: routers.todo,
        component: <Todo/>,
    },
    {
        path: routers.contacts,
        component: <Contacts/>
    },
    // {
    //     path: routers.login,
    //     component: <LoginForm/>
    // }
    {
        path: routers.login,
        component: <MaterialReactFinalForm/>
    }

]

export default routesList;