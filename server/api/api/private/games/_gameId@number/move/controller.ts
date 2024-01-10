import { defineController } from './$relay';
import { gameService } from '$/service/gameService';

export default defineController(() => ({
  post: async ({ params, body }) => ({
    status: 200,
    body: await gameService.makeMove(params.gameId, body),
  }),
}));
