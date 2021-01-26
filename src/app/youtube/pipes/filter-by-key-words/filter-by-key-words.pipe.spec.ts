import { FilterByKeyWordsPipe } from './filter-by-key-words.pipe';

describe('FilterByKeyWordsPipe', () => {
  it('create an instance', () => {
    const pipe: FilterByKeyWordsPipe = new FilterByKeyWordsPipe();
    expect(pipe).toBeTruthy();
  });
});
