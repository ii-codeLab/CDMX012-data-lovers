import { filterDirector, filterFilms } from '../src/data.js';


describe('filterDirector', () => {
  it('is a function', () => {
    expect(typeof filterDirector).toBe('function');
  });

  it('returns `filterDirector`', () => {
    expect(sortData()).toBe('sortData');
  });
});


describe('filterFilms', () => {
  it('is a function', () => {
    expect(typeof filterFilms).toBe('function');
  });

  it('returns `filterFilms`', () => {
    expect(filterFilms()).toBe('OMG');
  });
});
