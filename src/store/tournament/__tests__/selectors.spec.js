import _ from 'lodash';
import Immutable from 'seamless-immutable';
import { Selector } from 'redux-testkit';

describe('store/tournament/selectors', () => {

    let uut;

    beforeEach(() => {
      uut = require('../reducer');
    });

    it('should get topics when empty', () => {
        const state = [1, 2, 0];
        const result = [1, 2];
        const props = {
           gameId: 1
        }
        Selector(uut.getLines).expect(state, props).toReturn(result);
    });
});