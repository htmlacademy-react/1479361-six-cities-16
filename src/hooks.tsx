import { AuthorizationStatus } from './const';

export const useAuth = (authorizationStatus: AuthorizationStatus) => authorizationStatus === AuthorizationStatus.Auth;
