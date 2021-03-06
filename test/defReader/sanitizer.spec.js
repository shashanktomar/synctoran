/* @flow */
import reader from '../../src/defReader/reader';
import sanitizer from '../../src/defReader/sanitizer';

describe('defSanitizer test', () => {
  describe('typeFilter validator test', () => {
    it('should add default typeFilter if missing', () => {
      const defPromise = reader('test/testDefs/minimalDefs').then(sanitizer);
      return defPromise.then(defs => {
        expect(defs.task.typeFilter).toEqual('defaultTypeFilter');
        return true;
      });
    });

    it('should keep typeFilter if typeFilter is present', () => {
      const defPromise = reader('test/testDefs/minimalDefs').then(sanitizer);
      return defPromise.then(defs => {
        expect(defs['task-list'].typeFilter).toEqual('customFilter');
        return true;
      });
    });
  });

  describe('channels validator test', () => {
    it('should add default prefix if missing', () => {
      const defPromise = reader('test/testDefs/minimalDefs').then(sanitizer);
      return defPromise.then(defs => {
        expect(defs.task.channels.prefix).toEqual('$type+$_id');
        return true;
      });
    });

    it('should keep prefix if present', () => {
      const defPromise = reader('test/testDefs/minimalDefs').then(sanitizer);
      return defPromise.then(defs => {
        expect(defs['task-list'].channels.prefix).toEqual('customPrefix');
        return true;
      });
    });

    it('should add default suffix if missing', () => {
      const defPromise = reader('test/testDefs/minimalDefs').then(sanitizer);
      return defPromise.then(defs => {
        expect(defs.task.channels.suffix).toEqual('readWrite');
        return true;
      });
    });

    it('should keep suffix if present', () => {
      const defPromise = reader('test/testDefs/minimalDefs').then(sanitizer);
      return defPromise.then(defs => {
        expect(defs['task-list'].channels.suffix).toEqual('customSuffix');
        return true;
      });
    });
  });
});
