/* eslint-disable */
// @ts-nocheck

import { Route as rootRouteImport } from './routes/__root'
import { Route as AuthRouteImport } from './routes/auth'
import { Route as AdminRouteImport } from './routes/admin'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AdminIndexRouteImport } from './routes/admin.index'
import { Route as AdminUsersRouteImport } from './routes/admin.users'
import { Route as AdminForumRouteImport } from './routes/admin.forum'
import { Route as AdminAuditRouteImport } from './routes/admin.audit'

const AuthRoute = AuthRouteImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRouteImport,
} as any)

const AdminRoute = AdminRouteImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => rootRouteImport,
} as any)

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

const AdminIndexRoute = AdminIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminUsersRoute = AdminUsersRouteImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => AdminRoute,
} as any)

const AdminForumRoute = AdminForumRouteImport.update({
  id: '/forum',
  path: '/forum',
  getParentRoute: () => AdminRoute,
} as any)

const AdminAuditRoute = AdminAuditRouteImport.update({
  id: '/audit',
  path: '/audit',
  getParentRoute: () => AdminRoute,
} as any)

const AdminRouteChildren = {
  AdminAuditRoute,
  AdminForumRoute,
  AdminUsersRoute,
  AdminIndexRoute,
}

const AdminRouteWithChildren =
  AdminRoute._addFileChildren(AdminRouteChildren)

const rootRouteChildren = {
  IndexRoute,
  AdminRoute: AdminRouteWithChildren,
  AuthRoute,
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)

import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'

declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}
