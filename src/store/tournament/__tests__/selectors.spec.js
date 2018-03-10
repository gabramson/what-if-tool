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
        Selector(uut.getGameLines).expect(state, props).toReturn(result);
    });

    it('should get winner from state', () => {
        const state = { tournament: [1, 2, 2]};
        const result = 2;
        Selector(uut.getWinnerLine).expect(state).toReturn(result);
    });

    it('should get games from state', () => {
        const state = { tournament: [1, 2, 3, 4, 0, 0, 0]};
        const result = 3;
        Selector(uut.getGames).expect(state).toReturn(result);
    });
});