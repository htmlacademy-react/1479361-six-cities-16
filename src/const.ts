export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favoriets = '/favoriets',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth,
  NoAuth,
  Unknown,
}
