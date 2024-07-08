export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favoriets = '/favoriets',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
