import Layout from "@/components/layouts/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, [router]);

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
          Redirecting you to the <a href="/">home page</a>...
        </p>
      </div>
    </Layout>
  );
}
