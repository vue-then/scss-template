import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			redirect: {
				name: "index",
			},
		},
		{
			path: "/index",
			name: "index",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(
					/* webpackChunkName: "index" */ "./views/index/Index.vue"
				),
		},
		{
			path: "/radio",
			name: "radio", // 语音输入
			component: () =>
				import(
					/* webpackChunkName: "index" */ "./views/index/Radio.vue"
				),
		},
		{
			path: "/aes",
			name: "aes", //加解密
			component: () =>
				import(/* webpackChunkName: "index" */ "./views/index/Aes.vue"),
		},
		{
			path: "/base",
			name: "base",
			component: () =>
				import(/* webpackChunkName: "index" */ "./views/base/Base.vue"),
		},
		{
			path: "/gMap",
			name: "gMap",
			component: () =>
				import(/* webpackChunkName: "index" */ "./views/gMap/gMap.vue"),
		},
		{
			path: "/bscroll",
			name: "bscroll",
			component: () =>
				import(
					/* webpackChunkName: "index" */ "./views/better-scroll/linkage-column.vue"
				),
		},
		// 字母导航列表vue、react的实现
		{
			path: "/pinying",
			name: "pinying",
			component: () =>
				import(/* webpackChunkName: "index" */ "./views/base/pinying.vue"),
		},
		{
			path: "/baseon",
			name: "baseon",
			component: () =>
				import(/* webpackChunkName: "index" */ "./views/base/Baseon.vue"),
		},

		{
			path: "/notify",
			name: "notify",
			component: () =>
				import(/* webpackChunkName: "index" */ "./views/base/notify.vue"),
		},
		{
			path: "/svgs",
			name: "svgs",
			component: () =>
				import(/* webpackChunkName: "index" */ "./views/base/svgs.vue"),
		},
		{
			path: "/svg",
			name: "svg",
			component: () =>
				import(/* webpackChunkName: "index" */ "./views/base/svg/svg.vue"),
		},
		
	],
});
