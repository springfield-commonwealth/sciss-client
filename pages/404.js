import Layout from "@/components/layouts/Layout";
import Link from "next/link";
import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>
          Redirecting you to the <Link href="/">home page</Link>...
        </p>
      </div>
    </Layout>
  );
}
