
import { createRouter, createWebHashHistory } from 'vue-router';


let routes = [
	
		{
			path: '/', 
			alias: '/home',
			name: 'home' , 
			component: () => import('./pages/home/home.vue'),
			props: true
		},
		//Dashboard routes


//about routes
			{
				path: '/about/:index?/:fieldName?/:fieldValue?',
				name: 'aboutlist',
				component: () => import('./pages/about/list.vue'), 
				props: true
			},
			
	
			{ 
				path: '/about/view/:id', 
				name: 'aboutview', 
				component: () => import('./pages/about/view.vue'), 
				props: true
			},
	
			{ 
				path: '/about/add', 
				name: 'aboutadd', 
				component: () => import('./pages/about/add.vue'), 
				props: true
			},
	
			{ 
				path: '/about/edit/:id', 
				name: 'aboutedit', 
				component: () => import('./pages/about/edit.vue'), 
				props: true
			},
		

//blog routes
			{
				path: '/blog/:index?/:fieldName?/:fieldValue?',
				name: 'bloglist',
				component: () => import('./pages/blog/list.vue'), 
				props: true
			},
			
	
			{ 
				path: '/blog/view/:id', 
				name: 'blogview', 
				component: () => import('./pages/blog/view.vue'), 
				props: true
			},
	
			{ 
				path: '/blog/add', 
				name: 'blogadd', 
				component: () => import('./pages/blog/add.vue'), 
				props: true
			},
	
			{ 
				path: '/blog/edit/:id', 
				name: 'blogedit', 
				component: () => import('./pages/blog/edit.vue'), 
				props: true
			},
		

//cliente routes
			{
				path: '/cliente/:index?/:fieldName?/:fieldValue?',
				name: 'clientelist',
				component: () => import('./pages/cliente/list.vue'), 
				props: true
			},
			
	
			{ 
				path: '/cliente/view/:id', 
				name: 'clienteview', 
				component: () => import('./pages/cliente/view.vue'), 
				props: true
			},
	
			{ 
				path: '/cliente/add', 
				name: 'clienteadd', 
				component: () => import('./pages/cliente/add.vue'), 
				props: true
			},
	
			{ 
				path: '/cliente/edit/:id', 
				name: 'clienteedit', 
				component: () => import('./pages/cliente/edit.vue'), 
				props: true
			},
		

//contacto routes
			{
				path: '/contacto/:index?/:fieldName?/:fieldValue?',
				name: 'contactolist',
				component: () => import('./pages/contacto/list.vue'), 
				props: true
			},
			
	
			{ 
				path: '/contacto/view/:id', 
				name: 'contactoview', 
				component: () => import('./pages/contacto/view.vue'), 
				props: true
			},
	
			{ 
				path: '/contacto/add', 
				name: 'contactoadd', 
				component: () => import('./pages/contacto/add.vue'), 
				props: true
			},
	
			{ 
				path: '/contacto/edit/:id', 
				name: 'contactoedit', 
				component: () => import('./pages/contacto/edit.vue'), 
				props: true
			},
		

//reclutamiento routes
			{
				path: '/reclutamiento/:index?/:fieldName?/:fieldValue?',
				name: 'reclutamientolist',
				component: () => import('./pages/reclutamiento/list.vue'), 
				props: true
			},
			
	
			{ 
				path: '/reclutamiento/view/:id', 
				name: 'reclutamientoview', 
				component: () => import('./pages/reclutamiento/view.vue'), 
				props: true
			},
	
			{ 
				path: '/reclutamiento/add', 
				name: 'reclutamientoadd', 
				component: () => import('./pages/reclutamiento/add.vue'), 
				props: true
			},
	
			{ 
				path: '/reclutamiento/edit/:id', 
				name: 'reclutamientoedit', 
				component: () => import('./pages/reclutamiento/edit.vue'), 
				props: true
			},
		

//servicios routes
			{
				path: '/servicios/:index?/:fieldName?/:fieldValue?',
				name: 'servicioslist',
				component: () => import('./pages/servicios/list.vue'), 
				props: true
			},
			
	
			{ 
				path: '/servicios/view/:id', 
				name: 'serviciosview', 
				component: () => import('./pages/servicios/view.vue'), 
				props: true
			},
	
			{ 
				path: '/servicios/add', 
				name: 'serviciosadd', 
				component: () => import('./pages/servicios/add.vue'), 
				props: true
			},
	
			{ 
				path: '/servicios/edit/:id', 
				name: 'serviciosedit', 
				component: () => import('./pages/servicios/edit.vue'), 
				props: true
			},
		

//soporte routes
			{
				path: '/soporte/:index?/:fieldName?/:fieldValue?',
				name: 'soportelist',
				component: () => import('./pages/soporte/list.vue'), 
				props: true
			},
			
	
			{ 
				path: '/soporte/view/:id', 
				name: 'soporteview', 
				component: () => import('./pages/soporte/view.vue'), 
				props: true
			},
	
			{ 
				path: '/soporte/add', 
				name: 'soporteadd', 
				component: () => import('./pages/soporte/add.vue'), 
				props: true
			},
	
			{ 
				path: '/soporte/edit/:id', 
				name: 'soporteedit', 
				component: () => import('./pages/soporte/edit.vue'), 
				props: true
			},
		

//usuario routes
			{
				path: '/usuario/:index?/:fieldName?/:fieldValue?',
				name: 'usuariolist',
				component: () => import('./pages/usuario/list.vue'), 
				props: true
			},
			
	
			{ 
				path: '/usuario/view/:id', 
				name: 'usuarioview', 
				component: () => import('./pages/usuario/view.vue'), 
				props: true
			},
	
			{ 
				path: '/account/edit', 
				name: 'usuarioaccountedit', 
				component: () => import('./pages/account/accountedit.vue'), 
				props: true
			},
	
			{ 
				path: '/account', 
				name: 'usuarioaccountview', 
				component: () => import('./pages/account/accountview.vue'), 
				props: true
			},
	
			{ 
				path: '/usuario/add', 
				name: 'usuarioadd', 
				component: () => import('./pages/usuario/add.vue'), 
				props: true
			},
	
			{ 
				path: '/usuario/edit/:id', 
				name: 'usuarioedit', 
				component: () => import('./pages/usuario/edit.vue'), 
				props: true
			},
		

	
	
	
	
	{ 
		path:  '/error/forbidden', 
		name: 'forbidden', 
		component: () => import('./pages/errors/forbidden.vue'),
		props: true
	},
	{ 
		path: '/error/notfound', 
		name: 'notfound',
		component: () => import('./pages/errors/pagenotfound.vue'),
		props: true
	},
	{
		path: '/:catchAll(.*)', 
		component: () => import('./pages/errors/pagenotfound.vue')
	}
];

export default () => {
	
	
	const router = createRouter({
		history: createWebHashHistory(),
		routes,
		scrollBehavior(to, from, savedPostion){
			//if(savedPostion) return savedPostion;
			return { x:0, y:0 }
		}
	});
	
	return router;
}
