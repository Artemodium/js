import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
            <div className="app-wrapper">
                < Header />
                < Navbar />
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} component={() =>
                        <DialogsContainer />}/>
                    <Route path={'/profile'} component={() =>
                        <Profile />}/>
                    <Route path={'/news'} component = {News} />
                    <Route path={'/music'} component = {Music} />
                    <Route path={'/settings'} component = {Settings} />
                    <Route path={'/users'} render = { ()=> <UsersContainer /> } />
                </div>
            </div>
    );
}

export default App;