"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href =
            "https://docs.google.com/forms/d/e/1FAIpQLSelY1acKmIjjwwK5YDV1HWW2FvDB9JbB59O7srwTa19Gt55-Q/viewform";
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="">
      <div className="flex flex-col gap-6 items-center mb-16">
        <h1 className="text-6xl text-center mt-40 font-extrabold">
          REDIRECT NOTICE
        </h1>
        <p className="lg:mx-60 md:mx-32 mx-16 text-muted-foreground max-w-md text-center">
          You are being redirected to the application form in
        </p>
        <h1 className="text-8xl text-center font-black">
          {countdown}
        </h1>
        <p className="lg:mx-60 md:mx-32 mx-16 text-muted-foreground max-w-md text-center">
          seconds. If you are not redirected, please click{" "}
          <a
            className="text-chart-1"
            href="https://docs.google.com/forms/d/e/1FAIpQLSelY1acKmIjjwwK5YDV1HWW2FvDB9JbB59O7srwTa19Gt55-Q/viewform"
          >
            here
          </a>
          .
        </p>
      </div>
    </main>
  );
}
