import { createMocks } from 'node-mocks-http';
import MarketsApiHandler from '../pages/api/markets';

describe('/api/markets', () => {
    test('returns data', async () => {

        const { req, res } = createMocks({
            method: 'GET'
        });

        await MarketsApiHandler(req, res);

        expect(res._getStatusCode()).toBe(200);

        const data = JSON.parse(res._getData());

        expect(Array.isArray(data.markets)).toBe(true);

    });
});