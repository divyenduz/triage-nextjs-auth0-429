import { useUser } from "@auth0/nextjs-auth0";

import Link from "next/link";

export default function AppBar() {
  const { user } = useUser();
  return (
    <>
      {Boolean(user) && (
        <Link href="/api/auth/logout" passHref>
          <a>Logout</a>
        </Link>
      )}

      {!Boolean(user) && (
        <Link href="/api/auth/login" passHref>
          <a>Login</a>
        </Link>
      )}
    </>
  );
}
