import { defineController } from './$relay';
import { userService } from '$/service/userService';

export default defineController(() => ({
  get: async ({ params }) => ({
    status: 200,
    body: await userService.getUser(params.userId),
  }),
}));
