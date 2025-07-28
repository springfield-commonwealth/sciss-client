import Layout from "@/components/layouts/Layout";
import {
  Badge,
  BadgeGroup,
  FeatureCard,
  FeatureGrid,
  PageHeader,
  SectionHeader,
  StatsCard,
  StatsGrid,
} from "@/components/ui";

const ComponentDemo = () => {
  // Sample data for stats
  const statsData = [
    { number: "150+", label: "Activities Available", icon: "🎯" },
    { number: "25", label: "Expert Instructors", icon: "👨‍🏫" },
    { number: "95%", label: "Student Satisfaction", icon: "⭐" },
    { number: "12", label: "Program Categories", icon: "📚" },
  ];

  // Sample data for features
  const featuresData = [
    {
      icon: "🛡️",
      title: "24/7 Supervision",
      description:
        "Professional staff provide round-the-clock supervision and support for all students.",
    },
    {
      icon: "📞",
      title: "Regular Communication",
      description:
        "Stay connected with weekly updates, daily photos, and 24/7 emergency contact access.",
    },
    {
      icon: "🏥",
      title: "Medical Care",
      description:
        "On-site medical staff and partnerships with local healthcare facilities ensure prompt care.",
    },
  ];

  // Sample data for badges
  const badgeData = [
    { text: "Beginner", variant: "primary" },
    { text: "Intermediate", variant: "secondary" },
    { text: "Advanced", variant: "success" },
    { text: "Expert", variant: "warning" },
  ];

  return (
    <Layout
      title="Component Demo - SCISS"
      description="Demo page showcasing reusable components"
    >
      {/* Page Header Demo */}
      <PageHeader
        title="Reusable Components Demo"
        subtitle="SCISS Design System"
        description="Showcasing our new reusable components for consistent UI across the application"
        variant="hero"
        backgroundImage="/images/hero/home-hero.jpg"
      />

      {/* Stats Grid Demo */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Statistics Components"
            description="Reusable stats cards for displaying metrics and data"
            showDivider
          />

          <StatsGrid
            stats={statsData}
            columns={4}
            hoverable
            onStatClick={(stat, index) =>
              console.log("Clicked stat:", stat, index)
            }
          />
        </div>
      </section>

      {/* Feature Grid Demo */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            title="Feature Components"
            description="Reusable feature cards for displaying capabilities and services"
            showDivider
          />

          <FeatureGrid
            features={featuresData}
            columns={3}
            hoverable
            onFeatureClick={(feature, index) =>
              console.log("Clicked feature:", feature, index)
            }
          />
        </div>
      </section>

      {/* Badge Demo */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Badge Components"
            description="Reusable badges for tags, categories, and status indicators"
            showDivider
          />

          <div className="mb-4">
            <h3>Default Badges</h3>
            <BadgeGroup badges={badgeData} />
          </div>

          <div className="mb-4">
            <h3>Different Sizes</h3>
            <div className="mb-2">
              <Badge size="small">Small Badge</Badge>
            </div>
            <div className="mb-2">
              <Badge size="medium">Medium Badge</Badge>
            </div>
            <div className="mb-2">
              <Badge size="large">Large Badge</Badge>
            </div>
          </div>

          <div className="mb-4">
            <h3>Different Variants</h3>
            <div className="mb-2">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </div>

          <div className="mb-4">
            <h3>Interactive Badges</h3>
            <div className="mb-2">
              <Badge variant="primary" onClick={() => alert("Badge clicked!")}>
                Clickable Badge
              </Badge>
            </div>
            <div className="mb-2">
              <Badge variant="secondary" disabled>
                Disabled Badge
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Section Header Variants Demo */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            title="Section Header Variants"
            description="Different alignment and styling options for section headers"
            showDivider
          />

          <div className="mb-5">
            <SectionHeader
              title="Left Aligned Header"
              description="This header is left-aligned for a different visual style"
              align="left"
            />
          </div>

          <div className="mb-5">
            <SectionHeader
              title="Right Aligned Header"
              description="This header is right-aligned for a different visual style"
              align="right"
            />
          </div>

          <div className="mb-5">
            <SectionHeader
              title="Header with Subtitle"
              subtitle="Optional Subtitle"
              description="This header includes an optional subtitle above the main title"
              showDivider
            />
          </div>
        </div>
      </section>

      {/* Individual Component Demos */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Individual Components"
            description="Individual component usage examples"
            showDivider
          />

          <div className="grid-base grid-3">
            <div>
              <h3>Single StatsCard</h3>
              <StatsCard
                number="42"
                label="Active Students"
                icon="👥"
                hoverable
                onClick={() => alert("Stats card clicked!")}
              />
            </div>

            <div>
              <h3>Single FeatureCard</h3>
              <FeatureCard
                icon="🎓"
                title="Academic Excellence"
                description="Rigorous academic programs designed for student success"
                hoverable
                onClick={() => alert("Feature card clicked!")}
              />
            </div>

            <div>
              <h3>Single Badge</h3>
              <div className="mb-2">
                <Badge variant="success" size="large">
                  Available
                </Badge>
              </div>
              <div className="mb-2">
                <Badge variant="warning" size="medium">
                  Limited
                </Badge>
              </div>
              <div className="mb-2">
                <Badge variant="error" size="small">
                  Full
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComponentDemo;
