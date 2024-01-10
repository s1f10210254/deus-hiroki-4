import { gameService } from '$/service/gameService';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async () => ({
    status: 201,
    body: await gameService.createGame(),
  }),
}));
