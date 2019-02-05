import { User } from './user';

describe('Info', () => {
  it('should create an instance', () => {
    expect(new User("")).toBeTruthy();
  });
});
