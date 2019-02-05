import { Repository } from './repository';

describe('Repository', () => {
  it('should create an instance', () => {
    expect(new Repository("","",0,0,0,"","",new Date(2019, 2, 5))).toBeTruthy();
  });
});
