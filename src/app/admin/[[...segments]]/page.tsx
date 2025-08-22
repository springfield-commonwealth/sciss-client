import { getPayload } from "payload";
import config from "../../../payload.config";

// This page will render the Payload admin interface
export default async function AdminPage() {
  const payload = await getPayload({
    config,
  });

  // The admin interface will be rendered by Payload
  return null;
}

// Generate static params for admin routes
export async function generateStaticParams() {
  return [
    { segments: [] },
    { segments: ["collections"] },
    { segments: ["collections", "users"] },
    { segments: ["collections", "media"] },
    { segments: ["collections", "pages"] },
    { segments: ["collections", "academic-programs"] },
    { segments: ["collections", "activities"] },
    { segments: ["collections", "staff"] },
    { segments: ["collections", "trips"] },
  ];
}
