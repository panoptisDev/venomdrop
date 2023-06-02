import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Account } from '@prisma/client';

export const Me = createParamDecorator(
  (
    data: unknown,
    context: ExecutionContext,
  ): Pick<Account, 'id' | 'address'> => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return {
      id: user.id,
      address: user.address,
    };
  },
);
