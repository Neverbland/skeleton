import type { NextApiRequest, NextApiResponse } from 'next';

import { info } from '@utils/trace';

type Data = {
  name: string;
};

export default (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  info('=> /hello called!');
  res.status(200).json({ name: 'John Doe' });
};
