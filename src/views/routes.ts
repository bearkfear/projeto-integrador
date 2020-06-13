import { RouteConfig } from "vue-router";
import AboutPage from "./About.vue";
import NotFindPage from "./NotFind.vue";
import DashboardPage from "./Dashboard.vue";
import authRoutes from "./auth/routes";
import cadastroRoutes from "./cadastros/routes";
import apresetacaoRoutes from "./apresentacao/routes";
import Dev from "./dev/Query.vue";

const routes: Array<RouteConfig> = [
	...authRoutes,
	...cadastroRoutes,
	...apresetacaoRoutes,
	{
		path: "/",
		component: DashboardPage
	},
	{
		name: "about",
		path: "/about",
		component: AboutPage
	},
	{
		name: "dev",
		path: "/tools",
		component: Dev
	},
	{
		path: "*",
		component: NotFindPage
	}
];

export default routes;
