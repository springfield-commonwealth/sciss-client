# Breadcrumb Component Usage

The breadcrumb component has been moved from inside the Navigation component to be a standalone component that appears at the top of each page.

## How to Use

### 1. In Page Components (getStaticProps)

```javascript
import { generateBreadcrumbs } from "@/lib/utils/navigation";

export async function getStaticProps() {
  // Generate breadcrumbs for the page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us", active: true },
  ]);

  return {
    props: {
      breadcrumbs,
    },
  };
}
```

### 2. In Page Components (component)

```javascript
const MyPage = ({ breadcrumbs = [] }) => {
  return (
    <Layout
      title="My Page - SCISS"
      description="Page description"
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      {/* Your page content */}
    </Layout>
  );
};
```

### 3. Direct Usage (if needed)

```javascript
import Breadcrumb from "@/components/ui/Breadcrumb";

const MyComponent = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Math 101", href: "/courses/math-101", active: true },
  ];

  return (
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      {/* Your content */}
    </div>
  );
};
```

## Key Changes Made

1. **Extracted** breadcrumb functionality from `Navigation.js` into standalone `Breadcrumb.js` component
2. **Created** separate CSS file `breadcrumb.css` with proper styling
3. **Updated** `Layout.js` to render breadcrumb component separately from navigation
4. **Removed** breadcrumb props from Navigation component
5. **Maintained** all existing functionality and styling

## Benefits

- **Separation of Concerns**: Navigation and breadcrumbs are now separate components
- **Flexibility**: Breadcrumbs can be used independently on any page
- **Cleaner Code**: Navigation component is simpler and more focused
- **Better UX**: Breadcrumbs appear at the top of page content, not inside the header
- **Responsive**: Maintains all responsive behavior and accessibility features

## Styling

The breadcrumb component includes:

- Proper spacing from the fixed navigation header
- Responsive design for mobile devices
- Accessibility features (ARIA labels, focus states)
- Consistent styling with the rest of the site
- Hover and focus states for interactive elements
