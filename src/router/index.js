import Vue from 'vue';
import Router from 'vue-router';
import IDE from '@/components/IDE';
import Help from '@/components/Help';

Vue.use(Router);

export default new Router({

    mode: 'history',

    routes: [{
        path: '/',
        name: 'Ide',
        component: IDE
    },
    {
        path: '/help',
        name: 'Help',
        component: Help
    }]
});
