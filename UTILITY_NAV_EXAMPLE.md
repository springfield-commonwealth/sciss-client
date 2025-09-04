# Utility Navigation Usage Example

The Navigation component now supports utility navigation similar to the HeaderClient example you provided. Here's how to use it:

## Example Usage in a Page Component

```javascript
// pages/example-page.js
import Layout from "@/components/layouts/Layout";

const ExamplePage = () => {
  // Define utility navigation items
  const utilityNav = [
    { label: "Student Portal", href: "/student-portal" },
    { label: "Parent Resources", href: "/parent-resources" },
    { label: "Brochure", href: "/brochure.pdf" }, // PDF link with special styling
    { label: "FAQ", href: "/faq" },
  ];

  // Define portal navigation items
  const portalNav = [
    { label: "Contact us", href: "/contact" },
    { label: "Book Now", href: "/apply" },
  ];

  return (
    <Layout
      title="Example Page - SCISS"
      description="Example page with utility navigation"
      utilityNav={utilityNav}
      utilityNavTitle="Quick Access"
      portalNav={portalNav}
    >
      {/* Your page content */}
      <h1>Example Page</h1>
      <p>This page demonstrates the utility navigation.</p>
    </Layout>
  );
};

export default ExamplePage;
```

## Navigation Structure

The navigation now has a two-row structure:

### Top Row: Utility Navigation

- **Title**: Optional title for the utility nav section
- **Links**: Array of utility links with special handling for PDF files
- **PDF Links**: Automatically get a download icon and blue styling
- **Background**: Light gray background to distinguish from main nav

### Bottom Row: Main Navigation + Portal Navigation

- **Main Nav**: Your existing navigation links (About Us, Academics, etc.)
- **Portal Nav**: Additional links like "Contact us" and "Book Now"
- **CTA Button**: The main "Apply Now" button

## Props Available

### Navigation Component Props:

- `utilityNav`: Array of utility navigation items
- `utilityNavTitle`: Title for the utility navigation section
- `portalNav`: Array of portal navigation items

### Utility Nav Item Structure:

```javascript
{
  label: "Link Text",
  href: "/link-url"
}
```

### Portal Nav Item Structure:

```javascript
{
  label: "Link Text",
  href: "/link-url"
}
```

## Special Features

### PDF Link Detection

Links with `.pdf` in the URL automatically get:

- Download icon (arrow pointing down)
- Blue color styling
- Special hover effects

### Portal Link Styling

- **Contact us**: Blue text link
- **Book Now**: Blue button styling
- **Other links**: Standard link styling

### Responsive Behavior

- **Desktop**: Shows both utility and main navigation
- **Mobile**: Hides utility nav, shows only main nav with mobile menu

## CSS Classes Available

### Utility Navigation:

- `.nav-utility-row`: Container for utility nav
- `.nav-utility-title`: Title styling
- `.nav-utility-links`: Links container
- `.nav-utility-link`: Individual link styling
- `.nav-utility-link--pdf`: Special PDF link styling
- `.nav-utility-icon`: Download icon styling

### Portal Navigation:

- `.nav-portal-cta`: Container for portal nav and CTA
- `.nav-portal-links`: Portal links container
- `.nav-portal-link`: Individual portal link
- `.nav-portal-link--contact`: Contact link styling
- `.nav-portal-link--cta`: CTA button styling
