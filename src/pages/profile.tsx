import { getSession } from "next-auth/react";
import React from "react";

type Props = {};

function Home({}: Props) {
  return <div>settings</div>;
}

export default Home;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
