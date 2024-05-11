// routes.js

import Dashboard from './views/dashboard/Dashboard';
import Employee from './views/employee/Employee';
import Product from './views/product/Product';
import User from './views/user/User';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/employee', name: 'Employee', element: Employee },
  { path: '/product', name: 'Product', element: Product },
  { path: '/user', name: 'User', element: User },
];

export default routes;

