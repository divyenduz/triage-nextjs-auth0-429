import { NextApiRequest, NextApiResponse } from "next";

import auth0, { Session } from "./auth0";

export async function getCurrentUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = auth0().getSession(req, res) as Session;
  return session?.user;
}
