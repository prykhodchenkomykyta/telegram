import Head from "next/head";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Loading from "@/components/Loading";
import Login from "@/components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Home() {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    window.addEventListener("beforeunload", function (e) {
      let confirmationMessage = "Do You Want To Leave?";
      (e || window.event).returnValue = confirmationMessage;
      if (user) {
        setDoc(
          doc(db, "users", user?.uid),
          {
            name: user?.displayName,
            email: user?.email,
            imageURL: user?.photoURL,
            online: false,
            lastSeen: serverTimestamp(),
          },
          { merge: true }
        );
      }
    });
    if (user) {
      setDoc(
        doc(db, "users", user?.uid),
        {
          name: user?.displayName,
          email: user?.email,
          imageURL: user?.photoURL,
          online: true,
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      );
    }
  });

  if (loading) return <Loading />;
  if (!user) return <Login />;
  return (
    <div className="flex">
      <Head>
        <title>Web Telegram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="gradient w-full h-screen overflow-hidden">
        <Sidebar />
      </main>
    </div>
  );
}
