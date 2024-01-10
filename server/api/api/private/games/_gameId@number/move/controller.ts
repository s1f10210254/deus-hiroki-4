import { gameService } from '$/service/game';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ params, body }) => ({
    status: 200,
    body: await gameService.makeMove(params.gameId, body),
  }),
}));
