import {
    createRouter,
    createWebHashHistory
} from "vue-router";

import BuildingPage from "../pages/BuildingPage.vue";
import LandshaftPage from "../pages/LandshaftPage.vue";
import InteriorPage from "../pages/InteriorPage.vue";
import ArchitecturePage from "../pages/ArchitecturePage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/architecture',
            name: 'architecture',
            component: ArchitecturePage,
        },

        {
            path: '/landshaft',
            name: 'landshaft',
            component: LandshaftPage,
        },

        {
            path: '/interior',
            name: 'interior',
            component: InteriorPage,
        },

        {
            path: '/building',
            name: 'building',
            component: BuildingPage,
        },
    ],
});

export default router;