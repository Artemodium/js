import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import NewsContainer from "./components/News/NewsContainer";

const App = (props) => {
    return (
            <div className="app-wrapper">
                < HeaderContainer />
                < Navbar />
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} component={() =>
                        <DialogsContainer />}/>
                    <Route path={'/profile/:userId?'} component={() =>
                        <ProfileContainer />}/>
                    <Route path={'/news'} component = {() => <NewsContainer />} />
                    <Route path={'/music'} component = {Music} />
                    <Route path={'/settings'} component = {Settings} />
                    <Route path={'/users'} render = { ()=> <UsersContainer /> } />
                    <Route path={'/login'} render = { ()=> <Login /> } />
                </div>
            </div>
    );
}

export default App;