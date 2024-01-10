import { defineController } from './$relay';
import { gameService } from '$/service/gameService';

export default defineController(() => ({
  post: async () => ({
    status: 201,
    body: await gameService.createGame(),
  }),
}));
