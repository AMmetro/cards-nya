import React from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import ProfilePage from "./Pages/ProfilePage";
import NotFoundPage from "./Pages/NotFoundPage";
import RestorePassPage from "./Pages/RestorePassPage";
import NewPassPage from "./Pages/NewPassPage";
import TestPage from "./Pages/TestPage";
import RestorePassCheckEmailPage from "./Pages/RestorePassCheckEmailPage";
import Loading from "./common/c7-Progress/Loading";
import Packs from "./Pages/Pack/Packs";
import Cards from "./Pages/Cards/Packs";
import SignupPage from "./Pages/SignupPage";
import CardTable from "./Pages/Cards/CardTable";
import CardPage from "./Pages/Cards/CardPage";
import LearnPage from './Pages/Pack/LearnPage';
import VideoPage from './Pages/VideoPage';
import ReadData from './Pages/ReadData';



export const PATH = {
    LOGIN: '/login',
    SIGNUP: '/signup',
    PROFILE: '/profile',
    NOTFOUND: '/404',
    RESTORE_PASS: '/restore',
    RESTORE_PASS_CHECK_EMAIL: '/check_email',
    NEW_PASS: '/set-new-password',
    PACK: '/pack',
    CARDS: '/cards',
    TEST_PAGE: '/test_page',
    VIDEO_PAGE: '/video_page',
    READ_DATA: '/read_data',
    ALL_ROUTES : '*',
    LEARN : '/learn',
}

const  Routes : React.FC = ()  => {

    console.log('Routes App' )
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PROFILE*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>

                <Route path={PATH.LOGIN} exact render={() => <LoginPage/>}/>
                <Route path={PATH.SIGNUP} exact render={() => <SignupPage/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfilePage/>}/>
                <Route path={PATH.RESTORE_PASS} render={() => <RestorePassPage/>}/>
                <Route path={PATH.RESTORE_PASS_CHECK_EMAIL} render={() => <RestorePassCheckEmailPage/>}/>
                <Route path={PATH.VIDEO_PAGE} render={() => <VideoPage/>}/>
                <Route path={PATH.READ_DATA} render={() => <ReadData/>}/>
                <Route path={PATH.NEW_PASS + '/:token'} component={NewPassPage}/>
                {/*<Route path={PATH.DESTINATION_LIST_PAGE + '/:id'} exact={true} component={DestinationProfileContainer} />*/}
                <Route path={PATH.TEST_PAGE} render={() => <Loading message={"Wait a minute please"}/>}/>
                <Route path={PATH.PACK} render={() => <Packs/>}/>
                <Route path={PATH.CARDS + '/:packId'}  component={CardPage}/>
                <Route path={PATH.LEARN + '/:packId'}  component={LearnPage}/>
                <Route path={"/NotFoundPage"} render={() => <NotFoundPage/>}/>
                <Redirect from={PATH.ALL_ROUTES} to={"NotFoundPage"}/>
                {/*<Route render={() => <LoginPage/>}/>*/}
            </Switch>


                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                {/*если бы не было path={PATH.ALL_ROUTES} render={() => */}


        </div>
    )
}

export default Routes
