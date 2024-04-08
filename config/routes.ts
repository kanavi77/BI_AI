export default [
  {
    name: 'Login',
    path: '/user',
    layout: false,
    routes: [{ path: '/user/login', component: './User/Login' }],
  },
  {
    name: 'Register',
    path: '/user',
    layout: false,
    routes: [{ path: '/user/register', component: './User/Register' }],
  },
  { name: 'Welcome Page', path: '/welcome', icon: 'smile', component: './Welcome' },

  { icon: 'robot', path: '/add_chart', component: './Chart/addChart', name: 'Chart Generation (Sync)' },
  {
    icon: 'robot',
    path: '/add_chart_async',
    component: './Chart/addChartAsync',
    name: 'Chart Generation (Async)',
  },
  { icon: 'pieChart', path: '/chart', component: './Chart/myChart', name: 'Chart Page' },
  {
    icon: 'pieChart',
    path: '/chartDetail/:id',
    component: './Chart/myChartDetail',
    name: 'Chart Details',
    hideInMenu: true,
  },
  { name: 'Personal Information', path: '/user/manager', icon: 'user', component: './User/Manager' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
