import { NextApiRequest, NextApiResponse } from "next";

import { connect } from "@planetscale/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const conn = connect({
    host: "aws.connect.psdb.cloud",
    username: "0l1iokfxscb5eefoen1m",
    password: "pscale_pw_4EaN8lyUI55KSsr0oXyeValYPx4yJ4nMLW4FMe3Vn6p",
  });

  const results = await conn.execute("select * from message");

  console.log(results);

  res.status(200).json({ hello: "there" });
}
