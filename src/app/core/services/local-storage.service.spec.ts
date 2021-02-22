import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  let spySetItem: jasmine.Spy;
  let spyGetItem: jasmine.Spy;
  let spyClear: jasmine.Spy;
  let spyRemoveItem: jasmine.Spy;

  const dummyReturn = 'testValue';

  beforeEach(() => {
    spySetItem = spyOn(localStorage, 'setItem').and.returnValue();
    spyGetItem = spyOn(localStorage, 'getItem').and.returnValue(dummyReturn);
    spyClear = spyOn(localStorage, 'clear').and.returnValue();
    spyRemoveItem = spyOn(localStorage, 'removeItem').and.returnValue();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set item in local storage', () => {
    const key = 'testKey';
    const value = 'testValue';

    service.setItem(key, value);
    expect(spySetItem).toHaveBeenCalledWith(key, value);
  });

  it('should get item in local storage', () => {
    const getKey = 'getByKey';
    const res = service.getItem(getKey);
    expect(res).toEqual(dummyReturn);
    expect(spyGetItem).toHaveBeenCalledWith(getKey);
  });

  it('should remove item in local storage', () => {
    const removeKey = 'removeKey';
    service.removeItem(removeKey);
    expect(spyRemoveItem).toHaveBeenCalledWith(removeKey);
  });

  it('should clear local storage', () => {
    service.clear();
    expect(spyClear).toHaveBeenCalled();
  });
});
