import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService | null;

  beforeEach(() => {
    //TestBed.configureTestingModule({});
    //service = TestBed.inject(AuthService);
    service = new AuthService();
  });
  afterEach(()=>{
    service = null;
    localStorage.removeItem('token');
  });

  it('should return true from isAuthnticated when there is a token', () => {
    localStorage.setItem('token','1234');
    expect(service?.isAuthenticated()).toBeTruthy();
  });

  it('should return false from isAuthnticated when there is no token', () => {
    expect(service?.isAuthenticated()).toBeFalsy();
  });
});