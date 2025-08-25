import config from "@/payload.config";
import { getPayload } from "payload";

export default async function AdminRedirect() {
  try {
    // Initialize Payload to ensure it's working
    const payload = await getPayload({ config });

    // For now, show a simple admin interface
    // In a production setup, you'd integrate with Payload's admin components
    return (
      <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
        <h1>Payload CMS Admin</h1>
        <p>Payload is connected and working!</p>
        <div>
          <h2>Available Collections:</h2>
          <ul>
            <li>
              <a href="/api/payload/collections/users">Users</a>
            </li>
            <li>
              <a href="/api/payload/collections/academic-programs">
                Academic Programs
              </a>
            </li>
            <li>
              <a href="/api/payload/collections/activities">Activities</a>
            </li>
            <li>
              <a href="/api/payload/collections/staff">Staff</a>
            </li>
            <li>
              <a href="/api/payload/collections/trips">Trips</a>
            </li>
            <li>
              <a href="/api/payload/collections/media">Media</a>
            </li>
            <li>
              <a href="/api/payload/collections/pages">Pages</a>
            </li>
          </ul>
        </div>
        <p>
          <strong>Note:</strong> This is a basic admin interface. The full
          Payload admin UI should be accessible once the integration is properly
          configured.
        </p>
      </div>
    );
  } catch (error) {
    return (
      <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
        <h1>Payload CMS Admin - Error</h1>
        <p>There was an error connecting to Payload:</p>
        <pre
          style={{
            background: "#f5f5f5",
            padding: "1rem",
            borderRadius: "4px",
          }}
        >
          {error instanceof Error ? error.message : "Unknown error"}
        </pre>
        <p>Please check your configuration and database connection.</p>
      </div>
    );
  }
}
