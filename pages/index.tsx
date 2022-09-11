import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { request } from "../utils/general";

interface Profile {
  profilePic: string;
}

const Home: NextPage = () => {
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    request("/profile").then((data) => setProfile(data));
  }, []);

  return (
    <>
      <Head>
        <title>Naim Sedan - FrontEnd Engineer</title>
        <meta name="description" content="Naim Sedan - FrontEnd Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen p-16 text-white">
        <div className="flex flex-1 flex-col sm:flex-row items-center justify-center gap-5 text-center sm:text-end">
          <div className="h-40 w-40 md:h-60 md:w-60 relative rounded-full border-4">
            {profile?.profilePic && (
              <Image
                src={profile.profilePic}
                alt="profile picture"
                className="rounded-full"
                layout="fill"
                priority
              />
            )}
          </div>
          <div>
            <h1 className="text-xl md:text-4xl">Naim Sedan</h1>
            <p className="md:text-2xl pb-1">&#62;_ FrontEnd Engineer</p>
            <p className="text-xs md:text-xl">
              Based in London, United Kingdom
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
