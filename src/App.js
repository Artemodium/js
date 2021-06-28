import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                < Header/>
                < Navbar friends={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} component={() =>
                        <Dialogs messageData={props.state.messagesPage.messagesData}
                                 dialogsData={props.state.messagesPage.dialogsData}
                                 message={props.state.messagesPage.newMessageText}
                                 dispatch={props.dispatch}/>}/>
                    <Route path={'/profile'} component={() =>
                        <Profile postsData={props.state.profilePage.postsData}
                                 dispatch={props.dispatch}
                                 newPostText={props.state.profilePage.newPostText} />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;