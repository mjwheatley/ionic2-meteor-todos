import {NgModule, ErrorHandler} from "@angular/core";
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {TranslateModule} from "ng2-translate";
import {TodoAddComponent} from "./components/todo-add/todo-add.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {HomePage} from "./pages/home/home";

@NgModule({
    // Components/Pages, Pipes, Directive
    declarations: [
        AppComponent,
        TodoAddComponent,
        TodoListComponent,
        PageNotFoundComponent,
        HomePage
    ],
    // Pages
    entryComponents: [
        AppComponent,
        HomePage
    ],
    // Providers
    providers: [
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        },
        SplashScreen,
        StatusBar
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot(),
        // RouterModule.forRoot([
        //     {
        //         path: 'todoList',
        //         component: TodoListComponent,
        //         data: {
        //             title: 'Todo List'
        //         }
        //     },
        //     {
        //         path: 'todoAdd',
        //         component: TodoAddComponent,
        //         data: {
        //             title: 'Add Todo'
        //         }
        //     },
        //     // Home Page
        //     {
        //         path: '',
        //         redirectTo: '/todoList',
        //         pathMatch: 'full'
        //     },
        //     // 404 Page
        //     {
        //         path: '**',
        //         component: PageNotFoundComponent,
        //         data: {
        //             title: '404 Page Not Found'
        //         }
        //     }
        // ])
        IonicModule.forRoot(AppComponent, {
            //// http://ionicframework.com/docs/v2/api/config/Config/
            //mode: Constants.STYLE.MD,
            //pageTransition: Constants.STYLE.IOS,
            //swipeBackEnabled: false,
            //tabbarPlacement: 'top'
        })
    ],
    bootstrap: [
        IonicApp
    ]
})
export class AppModule {
}
