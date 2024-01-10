import { userService } from '$/service/user';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params }) => ({
    status: 200,
    body: await userService.getUser(params.userId),
  }),
}));
