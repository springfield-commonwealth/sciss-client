import React from "react";

const RichTextField: React.FC<{
  path: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}> = ({ path, label, required, value, onChange }) => {
  return (
    <div>
      <label
        htmlFor={path}
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <textarea
        id={path}
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        style={{
          width: "100%",
          minHeight: "200px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "monospace",
        }}
        placeholder="Enter rich text content here..."
      />
      <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
        This is a custom rich text field. In production, you might use Payload's
        built-in rich text editor.
      </p>
    </div>
  );
};

export default RichTextField;
