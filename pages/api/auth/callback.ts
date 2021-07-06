import { NextApiRequest, NextApiResponse } from 'next'

import auth0, { Session } from '../../../packages/auth/auth0'

export default async function handleCallbackCustom(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await auth0().handleCallback(req, res)
  const session = auth0().getSession(req, res) as Session

  console.log({ user: session.user })
}
