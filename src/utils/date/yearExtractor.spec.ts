import {yearExtractor} from './yearExtractor';

describe('Extract year from ISO date string', () => {
  it('should return correct date in YYYY format', () => {
    const isoDate = '2008-07-16T00:00:00';
    const extractedYear = yearExtractor(isoDate);

    expect(extractedYear).toEqual('2008');
  });
});
