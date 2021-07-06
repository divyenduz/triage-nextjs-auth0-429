import React from "react";

import Layout from "../layouts/Layout";
import { GetServerSidePropsContext } from "next";
import { getCurrentUser } from "../packages/auth/utils";

export default function Login() {
  return <Layout>Landing page</Layout>;
}

export async function getServerSideProps({
  req,
  res,
}: GetServerSidePropsContext) {
  //@ts-expect-error
  const user = await getCurrentUser(req, res);
  if (Boolean(user)) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
