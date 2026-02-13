import type { AppProps } from "next/app";
import { Courier_Prime } from "next/font/google";
import "../globals.css";

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={courierPrime.className} style={{ width: "100%" }}>
      <Component {...pageProps} />
    </div>
  );
}
