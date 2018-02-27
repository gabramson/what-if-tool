import _ from 'lodash';
import Immutable from 'seamless-immutable';
import { Selector } from 'redux-testkit';

describe('store/tournament/selectors', () => {

    let uut;

    beforeEach(() => {
      uut = require('../reducer');
    });

    it('should get lines from state and props', () => {
        const state = { tournament: [1, 2, 0]};
        const result = [1, 2];
        const props = {
           gameId: 1
        }
        Selector(uut.getLines).expect(state, props).toReturn(result);
    });
});