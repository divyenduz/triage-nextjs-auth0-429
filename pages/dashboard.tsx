import React from "react";
import { Layout } from "../layouts/Layout";

import { getCurrentUser } from "../packages/auth/utils";
import { GetServerSidePropsContext } from "next";

export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

type Props = NonNullable<
  ThenArg<ReturnType<typeof getServerSideProps>>["props"]
>;

export default function Home({ user }: Props) {
  return <Layout>Dashboard: Welcome, {user.name}</Layout>;
}

export async function getServerSideProps({
  req,
  res,
}: GetServerSidePropsContext) {
  //@ts-expect-error
  const user = await getCurrentUser(req, res);
  if (Boolean(user)) {
    return {
      props: {
        user,
      },
    };
  }
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}
