import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StyleManagerService } from './style-manager.service';

describe('StyleManagerService', () => {
  let service: StyleManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(StyleManagerService);
  });

  afterEach(() => {
    const links = document.head.querySelectorAll('link');
    for (const link of Array.prototype.slice.call(links)) {
      if (link.className.includes('style-manager-')) {
        document.head.removeChild(link);
      }
    }
  });

  it('should add stylesheet to head', () => {
    service.setStyle('style-manager-test', 'test.css');
    const styleEl = document.head.querySelector(
      '.app-style-manager-test'
    ) as HTMLLinkElement;
    expect(styleEl).not.toBeNull();
    expect(styleEl.href.endsWith('test.css')).toBe(true);
  });

  it('should change existing stylesheet', () => {
    service.setStyle('style-manager-test', 'test.css');
    const styleEl = document.head.querySelector(
      '.app-style-manager-test'
    ) as HTMLLinkElement;
    expect(styleEl).not.toBeNull();
    expect(styleEl.href.endsWith('test.css')).toBe(true);

    service.setStyle('style-manager-test', 'new.css');
    expect(styleEl.href.endsWith('new.css')).toBe(true);
  });

  it('should remove existing stylesheet', () => {
    service.setStyle('style-manager-test', 'test.css');
    let styleEl = document.head.querySelector(
      '.app-style-manager-test'
    ) as HTMLLinkElement;
    console.log(document.head.querySelectorAll('link[rel="stylesheet"]'));
    expect(styleEl).not.toBeNull();
    expect(styleEl.href.endsWith('test.css')).toBe(true);

    service.removeStyle('style-manager-test');
    styleEl = document.head.querySelector(
      '.app-style-manager-test'
    ) as HTMLLinkElement;
    expect(styleEl).toBeNull();
  });
});
