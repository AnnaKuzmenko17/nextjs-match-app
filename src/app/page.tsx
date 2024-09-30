import { auth } from "@/auth";
import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

const Home = async () => {
  const session = await auth();

  return (
    <div>
      <h3 className="text-2xl semibold">user session data:</h3>
      {session ? (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <form action={async () => {
            'use server';

            await signOut();
          }}>
            <Button type="submit" variant="bordered" color="primary">sign out</Button>
          </form>
        </div>
      ) : (
        <div>not signed in</div>
      )}
    </div>
  );
}

export default Home;
