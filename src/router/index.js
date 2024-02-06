import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import PodcastsView from "../views/PodcastsView.vue";
import ContactView from "../views/ContactView.vue";
import Page404View from "../views/Page404View.vue";
import IdrView from "../views/IdrView.vue";

import PremierView from "../views/article/PremierView.vue";
import CestQuoiView from "../views/article/CestQuoiView.vue";
import CommentMaimerView from "../views/article/CommentMaimerView.vue";
import LGBTView from "../views/article/LGBTView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Test",
      name: "Test",
      component: IdrView,
    },
    {
      path: "/Articles",
      name: "Articles",
      component: ArticlesView,
    },
    {
      path: "/Podcasts",
      name: "Podcasts",
      component: PodcastsView,
    },
    {
      path: "/Contact",
      name: "Contact",
      component: ContactView,
    },
    {
      path: "/Premier",
      name: "PremierPas",
      component: PremierView,
    },
    {
      path: "/CestQuoiView",
      name: "CestQuoi",
      component: CestQuoiView,
    },
    {
      path: "/CommentMaimer",
      name: "CommentMaimerPas",
      component: CommentMaimerView,
    },
    {
      path: "/LGBT",
      name: "LGBT",
      component: LGBTView,
    },
    //page 404
    {
      path: "/:catchAll(.*)",
      name: "Page404View",
      component: Page404View,
    },
  ],
});

export default router;
