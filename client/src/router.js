import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import MainContent from './components/MainContent'
import CategoryPhoto from './components/CategoryPhoto'
import PhotoLibrary from './components/PhotoCRUD/PhotoLibrary'
import AddPhoto from './components/PhotoCRUD/AddPhoto'
import UpdatePhoto from './components/PhotoCRUD/UpdatePhoto'

Vue.use(Router)



export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            component: Home
          },
      {
        path: '/main',
        name: 'MainContent',
        component: MainContent
      },
      {
        path: '/CategoryPhoto/:place',
        name: 'PhotoCategory',
        component: CategoryPhoto
      },
      {
        path: '/Admin/PhotoLibrary',
        name: 'PhotoLibrary',
        component: PhotoLibrary
      },
      {
        path: '/Admin/PhotoCreation',
        name: 'PhotoCreation',
        component: AddPhoto
      },
      {
        path: '/Admin/PhotoStudio',
        name: 'PhotoEditing',
        component: UpdatePhoto
      },
    ]
  })