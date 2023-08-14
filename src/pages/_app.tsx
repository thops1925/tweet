import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import SideNav from "~/componets/SideNav";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Xtweet</title>
        <meta
          name="description"
          content="this is xtweet"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className="container mx-auto flex">
        <SideNav />
        <div className="min-h-screen flex-grow border-x items-start">
          <Component {...pageProps} />

        </div>


      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
