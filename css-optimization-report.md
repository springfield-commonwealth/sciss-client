# CSS Optimization Report - SCISS Website
Generated: 2025-07-25T23:47:14.156Z

## 📊 Analysis Summary

- **Total CSS Files**: 37
- **Total Classes**: 744
- **Unused Classes**: 195
- **Redundant Patterns**: 378
- **Estimated Savings**: 26%

## 🎯 Optimization Recommendations

### 1. Shared Patterns Identified


#### CARD-LAYOUT
- **Classes**: sessions-selection, service-category, payment-plan-card, scholarship-card, application-step, policy-list, stat-card, parent-feature, safety-category, comm-item, health-req-item, packing-category, service-card, protocol-card, travel-tip-card, testimonial-card, faq-item, activity-preview-card, sport-card, fitness-card, recreation-card, wellness-card, schedule-day, trip-preview-card, cultural-trip-card, week-schedule, info-card, value-card, founder-card, partner-card, alumni-card, overview-card, schedule-content, day-card, dining-card, safety-feature
- **Recommendation**: Use shared `.card-layout-base` class
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/tuitions-and-fees.css, src/styles/pages/tuitions-and-fees.css, src/styles/pages/tuitions-and-fees.css, src/styles/pages/tuitions-and-fees.css, src/styles/pages/tuitions-and-fees.css, src/styles/pages/program-overview.css, src/styles/pages/parent-information.css, src/styles/pages/parent-information.css, src/styles/pages/parent-information.css, src/styles/pages/parent-information.css, src/styles/pages/parent-information.css, src/styles/pages/parent-information.css, src/styles/pages/parent-information.css, src/styles/pages/parent-information.css, src/styles/pages/parent-information.css, src/styles/pages/parent-information.css, src/styles/pages/life-activities.css, src/styles/pages/life-activities.css, src/styles/pages/life-activities.css, src/styles/pages/life-activities.css, src/styles/pages/life-activities.css, src/styles/pages/life-activities.css, src/styles/pages/day-trips.css, src/styles/pages/day-trips.css, src/styles/pages/day-trips.css, src/styles/pages/day-trips.css, src/styles/pages/about-us.css, src/styles/pages/about-us.css, src/styles/pages/about-us.css, src/styles/pages/about-us.css, src/styles/pages/a-day-at-sciss.css, src/styles/pages/a-day-at-sciss.css, src/styles/pages/a-day-at-sciss.css, src/styles/pages/a-day-at-sciss.css, src/styles/pages/a-day-at-sciss.css


#### SECTION-HEADER
- **Classes**: trips-directory-header, popular-destinations, trips-directory-cta, trip-hero, staff-directory-header, courses-header, activity-hero, activities-directory-header, activities-directory-cta
- **Recommendation**: Use shared `.section-header-base` class
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/trips-directory.css, src/styles/pages/trips-directory.css, src/styles/pages/trip-page.css, src/styles/pages/staff-directory.css, src/styles/pages/courses-directory.css, src/styles/pages/activity-page.css, src/styles/pages/activities-directory.css, src/styles/pages/activities-directory.css


#### BADGE-STYLE
- **Classes**: level-badge, duration-badge
- **Recommendation**: Use shared `.badge-style-base` class
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/trips-directory.css


### 2. Unused Classes to Remove

- `.PhoneInput`
- `.PhoneInputCountry`
- `.PhoneInputCountryIcon`
- `.PhoneInputCountrySelect`
- `.PhoneInputInput`
- `.accommodation-card`
- `.active`
- `.activity-explore-more`
- `.activity-header`
- `.alumni-achievement`
- `.alumni-card`
- `.alumni-info`
- `.amount`
- `.apply-description`
- `.apply-header`
- `.apply-logo`
- `.apply-logo-container`
- `.apply-title`
- `.bg-white`
- `.breadcrumb`
- `.btn-blurred`
- `.btn-loading`
- `.carousel-dot`
- `.chevron-down`
- `.container-full`
- `.content-slider__button`
- `.content-slider__link`
- `.cost-required`
- `.countdown-text`
- `.css`
- `.cta-countdown`
- `.currency`
- `.curriculum-section`
- `.day-activities`
- `.destination-btn`
- `.destination-count`
- `.destination-icon`
- `.destination-item`
- `.destinations-grid`
- `.dining-card`
- `.drag-active`
- `.dropdown-menu`
- `.dropdown-menu--open`
- `.early-bird`
- `.early-bird-badge`
- `.early-bird-deadline`
- `.early-bird-main`
- `.early-bird-offer`
- `.email-validation-error`
- `.email-validation-loading`
- `.email-validation-success`
- `.experience-grid`
- `.expertise-tags`
- `.explore-grid`
- `.explore-item`
- `.fade-in`
- `.fade-in-up`
- `.feature-list`
- `.file-upload-area`
- `.file-upload-dragover`
- `.file-upload-error`
- `.file-upload-hover`
- `.file-upload-success`
- `.form-checkbox`
- `.form-error`
- `.form-error-animate`
- `.form-error-enter`
- `.form-error-exit`
- `.form-error-hidden`
- `.form-input`
- `.form-radio`
- `.founder-background`
- `.founder-bio`
- `.founder-card`
- `.founder-expertise`
- `.founder-header`
- `.founder-title`
- `.founders-grid`
- `.gallery-track`
- `.has-file`
- `.header`
- `.icon-business`
- `.icon-innovation`
- `.icon-language`
- `.icon-sports`
- `.icon-tech`
- `.included-services`
- `.input-error-animate`
- `.input-error-pulse`
- `.input-success-animate`
- `.input-success-glow`
- `.level`
- `.main-pricing`
- `.mb-1`
- `.mb-2`
- `.mb-3`
- `.mb-4`
- `.mobile-nav-link-with-chevron`
- `.mt-1`
- `.mt-2`
- `.nav-link`
- `.nav-link-with-chevron`
- `.open`
- `.optional`
- `.outcomes-section`
- `.overview-card`
- `.overview-icon`
- `.partner-card`
- `.partner-type`
- `.payment-plan-card`
- `.plan-benefit`
- `.plan-description`
- `.plan-structure`
- `.policy-icon`
- `.policy-item`
- `.policy-list`
- `.policy-note`
- `.popular-destinations`
- `.prerequisites`
- `.price`
- `.price-main`
- `.price-period`
- `.pricing-features`
- `.pricing-header`
- `.pricing-highlight`
- `.pricing-showcase`
- `.program-badges`
- `.program-card`
- `.program-content`
- `.program-description`
- `.program-detail-card`
- `.program-details-grid`
- `.program-header`
- `.program-highlights`
- `.program-icon`
- `.program-meta`
- `.program-title-section`
- `.programs-list`
- `.refund-policy`
- `.regular-price`
- `.safety-feature`
- `.safety-icon`
- `.save-amount`
- `.schedule-activity`
- `.schedule-container`
- `.schedule-content`
- `.schedule-day`
- `.schedule-grid`
- `.schedule-time`
- `.schedule-timeline`
- `.scholarship-amount`
- `.scholarship-card`
- `.scholarship-criteria`
- `.scholarship-deadline`
- `.scholarship-header`
- `.scrolled`
- `.section-large`
- `.section-small`
- `.session`
- `.session-info`
- `.session-status`
- `.stat-card`
- `.submit-btn`
- `.submit-btn-loading`
- `.swiper-button-next`
- `.swiper-button-prev`
- `.swiper-pagination-bullet`
- `.swiper-pagination-bullet-active`
- `.text-arts`
- `.text-business`
- `.text-innovation`
- `.text-language`
- `.text-primary`
- `.text-right`
- `.text-sports`
- `.text-tech`
- `.text-white`
- `.time-indicator`
- `.time-text`
- `.timeline`
- `.timeline-content`
- `.timeline-year`
- `.trip-complete-experience`
- `.trip-day`
- `.trip-item`
- `.trip-name`
- `.trip-type-badge`
- `.upload-error`
- `.upload-success`
- `.week-schedule`
- `.week-trips`
- `.welcome-features`
- `.welcome-text`
- `.wellness-card`
- `.wellness-components`

### 3. Redundant Patterns to Consolidate


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/globals.css
- **Selectors**: `.section-small`, `.section`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/tuitions-and-fees.css
- **Selectors**: `.price-main`, `.early-bird-main`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/tuitions-and-fees.css
- **Selectors**: `.session-header`, `.cost-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/tuitions-and-fees.css
- **Selectors**: `.payment-plan-card`, `.scholarship-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/tuitions-and-fees.css
- **Selectors**: `.application-timeline`, `.refund-policy`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/tuitions-and-fees.css
- **Selectors**: `.hero-title`, `.amount`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/tuitions-and-fees.css
- **Selectors**: `.amount`, `.amount`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/tuitions-and-fees.css
- **Selectors**: `.grid-4`, `.included-services`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/tuitions-and-fees.css
- **Selectors**: `.hero-actions`, `.application-step`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/trips-directory.css
- **Selectors**: `.pricing-features`, `.trip-card-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/trips-directory.css
- **Selectors**: `.container`, `.container`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/trips-directory.css
- **Selectors**: `.container`, `.container`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/trips-directory.css
- **Selectors**: `.hero-subtitle`, `.directory-subtitle`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/trips-directory.css
- **Selectors**: `.filter-controls`, `.trips-stats`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/trips-directory.css
- **Selectors**: `.hero-title`, `.stat-number`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/trips-directory.css
- **Selectors**: `.grid-4`, `.trip-card-info`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/trips-directory.css
- **Selectors**: `.grid-4`, `.categories-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/trips-directory.css
- **Selectors**: `.grid-4`, `.destinations-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/trip-page.css
- **Selectors**: `.trips-directory`, `.trip-page`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/trip-page.css
- **Selectors**: `.container`, `.trip-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/trip-page.css
- **Selectors**: `.highlights-grid`, `.inclusions-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/trip-page.css
- **Selectors**: `.trip-itinerary`, `.trip-preparation`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/trip-page.css
- **Selectors**: `.trip-itinerary`, `.related-trips`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/trip-page.css
- **Selectors**: `.stat-item`, `.related-trip-info`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/trip-page.css
- **Selectors**: `.destination-item`, `.experience-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/trip-page.css
- **Selectors**: `.btn`, `.btn`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/trip-page.css
- **Selectors**: `.btn-primary`, `.btn-secondary`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/trip-page.css
- **Selectors**: `.btn-large`, `.btn-large`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/trip-page.css
- **Selectors**: `.hero-title`, `.trip-title`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/trip-page.css
- **Selectors**: `.grid-4`, `.preparation-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/trip-page.css
- **Selectors**: `.hero-actions`, `.itinerary-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/trip-page.css
- **Selectors**: `.hero-title`, `.trip-title`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/trip-page.css
- **Selectors**: `.hero-subtitle`, `.trip-description`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/trip-page.css
- **Selectors**: `.grid-4`, `.trip-quick-info`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/trip-page.css
- **Selectors**: `.grid-4`, `.highlights-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/trip-page.css
- **Selectors**: `.grid-4`, `.inclusions-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/trip-page.css
- **Selectors**: `.grid-4`, `.related-trips-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/trip-page.css
- **Selectors**: `.grid-4`, `.experience-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/trip-page.css
- **Selectors**: `.cta-actions`, `.cta-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/staff-profile.css
- **Selectors**: `.container`, `.staff-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/staff-profile.css
- **Selectors**: `.additional-costs`, `.education-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/staff-profile.css
- **Selectors**: `.grid`, `.experience-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/staff-profile.css
- **Selectors**: `.preparation-list`, `.achievements-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/staff-profile.css
- **Selectors**: `.hero-actions`, `.cta-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/staff-profile.css
- **Selectors**: `.trip-hero-content`, `.staff-hero-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/staff-profile.css
- **Selectors**: `.hero-title`, `.staff-name`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/staff-profile.css
- **Selectors**: `.trip-hero-content`, `.staff-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/staff-profile.css
- **Selectors**: `.trips-directory-header`, `.staff-cta`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/staff-profile.css
- **Selectors**: `.trip-actions`, `.cta-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/staff-profile.css
- **Selectors**: `.btn`, `.btn`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/staff-profile.css
- **Selectors**: `.hero-title`, `.staff-name`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-profile.css, src/styles/pages/staff-profile.css
- **Selectors**: `.staff-contact`, `.expertise-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/staff-profile.css
- **Selectors**: `.grid-4`, `.related-staff-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-profile.css, src/styles/pages/staff-directory.css
- **Selectors**: `.staff-page`, `.staff-directory`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/staff-directory.css
- **Selectors**: `.text-center`, `.stat-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/staff-directory.css
- **Selectors**: `.trips-directory-grid`, `.staff-directory-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/staff-directory.css
- **Selectors**: `.stat-item`, `.staff-card-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-profile.css, src/styles/pages/staff-directory.css
- **Selectors**: `.institution`, `.staff-card-position`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/staff-directory.css
- **Selectors**: `.mb-2`, `.staff-card-courses`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/staff-directory.css
- **Selectors**: `.hero-actions`, `.cta-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-profile.css, src/styles/pages/staff-directory.css
- **Selectors**: `.btn`, `.btn`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-profile.css, src/styles/pages/staff-directory.css
- **Selectors**: `.btn-primary`, `.btn-primary`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-profile.css, src/styles/pages/staff-directory.css
- **Selectors**: `.btn-secondary`, `.btn-secondary`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-profile.css, src/styles/pages/staff-directory.css
- **Selectors**: `.btn-large`, `.btn-large`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/staff-directory.css
- **Selectors**: `.trips-directory-grid`, `.staff-directory-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/staff-directory.css
- **Selectors**: `.hero-title`, `.stat-number`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/content-slider.css, src/styles/pages/staff-directory.css
- **Selectors**: `.content-slider`, `.filter-controls`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/staff-directory.css
- **Selectors**: `.trips-directory-header`, `.staff-directory-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/staff-directory.css
- **Selectors**: `.trips-directory-grid`, `.staff-directory-cta`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/staff-directory.css
- **Selectors**: `.trip-actions`, `.cta-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/staff-directory.css
- **Selectors**: `.btn`, `.btn`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/staff-directory.css
- **Selectors**: `.trips-directory-header`, `.staff-directory-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/staff-directory.css
- **Selectors**: `.hero-actions`, `.staff-stats`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-profile.css, src/styles/pages/staff-directory.css
- **Selectors**: `.staff-position`, `.staff-card-name`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/program-overview.css
- **Selectors**: `.payment-plan-card`, `.stat-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/program-overview.css
- **Selectors**: `.pricing-features`, `.vision-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/program-overview.css
- **Selectors**: `.cost-item`, `.feature`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/program-overview.css
- **Selectors**: `.application-timeline`, `.schedule-container`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/program-overview.css
- **Selectors**: `.cost-header`, `.schedule-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/parent-information.css
- **Selectors**: `.destination-icon`, `.feature-icon`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/parent-information.css
- **Selectors**: `.service-category`, `.safety-category`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/program-overview.css, src/styles/pages/parent-information.css
- **Selectors**: `.values-list`, `.safety-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/parent-information.css
- **Selectors**: `.scholarship-header`, `.comm-type`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/program-overview.css, src/styles/pages/parent-information.css
- **Selectors**: `.schedule-timeline`, `.contact-info`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/parent-information.css
- **Selectors**: `.additional-costs`, `.health-requirements`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/parent-information.css
- **Selectors**: `.service-category`, `.health-req-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/parent-information.css
- **Selectors**: `.scholarship-header`, `.req-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/parent-information.css
- **Selectors**: `.service-category`, `.packing-category`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/program-overview.css, src/styles/pages/parent-information.css
- **Selectors**: `.values-list`, `.packing-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/parent-information.css
- **Selectors**: `.policy-note`, `.packing-tips`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-profile.css, src/styles/pages/parent-information.css
- **Selectors**: `.related-staff-grid`, `.tips-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/parent-information.css
- **Selectors**: `.payment-plan-card`, `.service-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/parent-information.css
- **Selectors**: `.grid`, `.emergency-protocols`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/parent-information.css
- **Selectors**: `.service-category`, `.protocol-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/parent-information.css
- **Selectors**: `.payment-plan-card`, `.travel-tip-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/parent-information.css, src/styles/pages/parent-information.css
- **Selectors**: `.parent-feature`, `.testimonial-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/parent-information.css
- **Selectors**: `.service-category`, `.faq-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/parent-information.css
- **Selectors**: `.cost-header`, `.comm-type`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/parent-information.css
- **Selectors**: `.scholarship-header`, `.req-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/parent-information.css
- **Selectors**: `.text-left`, `.contact-info`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/parent-information.css
- **Selectors**: `.grid-4`, `.tips-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/parent-information.css
- **Selectors**: `.grid-4`, `.faq-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/life-activities.css
- **Selectors**: `.stat-item`, `.activity-preview-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-directory.css, src/styles/pages/life-activities.css
- **Selectors**: `.staff-card-expertise`, `.activity-features-preview`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/parent-information.css, src/styles/pages/life-activities.css
- **Selectors**: `.services-grid`, `.programs-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/life-activities.css
- **Selectors**: `.payment-plan-card`, `.sport-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/life-activities.css
- **Selectors**: `.scholarship-header`, `.sport-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/life-activities.css
- **Selectors**: `.mb-3`, `.sport-features`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/parent-information.css, src/styles/pages/life-activities.css
- **Selectors**: `.parent-feature`, `.fitness-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/life-activities.css
- **Selectors**: `.payment-plan-card`, `.recreation-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/life-activities.css
- **Selectors**: `.trip-details`, `.activity-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/life-activities.css
- **Selectors**: `.payment-plan-card`, `.wellness-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/life-activities.css
- **Selectors**: `.mt-3`, `.wellness-components`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/life-activities.css
- **Selectors**: `.service-items`, `.day-activities`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/life-activities.css
- **Selectors**: `.cost-header`, `.sport-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/life-activities.css
- **Selectors**: `.grid-4`, `.schedule-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-directory.css, src/styles/pages/life-activities.css
- **Selectors**: `.staff-grid`, `.activities-preview-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/life-activities.css
- **Selectors**: `.cost-header`, `.sport-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-directory.css, src/styles/pages/life-activities.css
- **Selectors**: `.staff-grid`, `.programs-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/life-activities.css
- **Selectors**: `.grid-4`, `.schedule-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/life-activities.css
- **Selectors**: `.view-details-text`, `.activities-preview-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/index.css
- **Selectors**: `.activity-preview-content`, `.welcome-features`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/program-overview.css, src/styles/pages/index.css
- **Selectors**: `.values-list`, `.feature-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/index.css
- **Selectors**: `.destination-icon`, `.program-icon`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/parent-information.css, src/styles/pages/index.css
- **Selectors**: `.testimonial-author`, `.testimonial-author`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.activities-preview-grid`, `.trips-preview-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.activity-preview-card`, `.trip-preview-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.activity-preview-image`, `.trip-preview-image`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.activity-badges`, `.trip-badges`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.level-badge`, `.duration-badge`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.level-badge`, `.duration-badge`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/day-trips.css
- **Selectors**: `.stat-item`, `.trip-preview-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-directory.css, src/styles/pages/day-trips.css
- **Selectors**: `.staff-card-expertise`, `.trip-highlights-preview`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.feature-tag`, `.highlight-tag`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/day-trips.css
- **Selectors**: `.pricing-features`, `.university-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/program-overview.css, src/styles/pages/day-trips.css
- **Selectors**: `.values-list`, `.inclusions-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/day-trips.css
- **Selectors**: `.payment-plan-card`, `.cultural-trip-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/day-trips.css
- **Selectors**: `.required`, `.trip-type`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/day-trips.css
- **Selectors**: `.hero-description`, `.activity-icon`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/program-overview.css, src/styles/pages/day-trips.css
- **Selectors**: `.stat-label`, `.trip-name`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/day-trips.css
- **Selectors**: `.payment-plan-card`, `.info-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-directory.css, src/styles/pages/day-trips.css
- **Selectors**: `.staff-grid`, `.trips-preview-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.activity-preview-image`, `.trip-preview-image`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.activity-preview-content`, `.trip-preview-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.activity-features-preview`, `.trip-highlights-preview`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.feature-tag`, `.highlight-tag`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/day-trips.css
- **Selectors**: `.filter-controls`, `.university-details`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/day-trips.css, src/styles/pages/day-trips.css
- **Selectors**: `.university-meta`, `.trip-details`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.activity-preview-content`, `.trip-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/day-trips.css
- **Selectors**: `.view-details-text`, `.trips-preview-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.activity-preview-image`, `.trip-preview-image`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.activity-badges`, `.trip-badges`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.level-badge`, `.duration-badge`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/day-trips.css
- **Selectors**: `.activity-preview-content`, `.trip-preview-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/day-trips.css
- **Selectors**: `.stat-item`, `.university-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/day-trips.css
- **Selectors**: `.stat-item`, `.university-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.container`, `.container`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.directory-subtitle`, `.courses-subtitle`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.trips-stats`, `.courses-stats`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.stat-item`, `.stat-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.stat-number`, `.stat-number`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.stat-label`, `.stat-label`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.trips-directory-filters`, `.courses-filters`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.search-box`, `.search-input-wrapper`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.search-box`, `.category-filter-wrapper`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.results-count`, `.results-summary`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.trip-card`, `.course-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/courses-directory.css
- **Selectors**: `.pricing-features`, `.course-card-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.trip-card-description`, `.course-description`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/courses-directory.css
- **Selectors**: `.mb-3`, `.course-outcomes`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.no-results`, `.no-results`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.directory-subtitle`, `.courses-subtitle`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.filter-controls`, `.courses-stats`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.stat-item`, `.stat-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.filter-controls`, `.filter-row`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/courses-directory.css
- **Selectors**: `.grid-4`, `.course-details`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/courses-directory.css
- **Selectors**: `.trip-actions`, `.course-card-footer`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/courses-directory.css
- **Selectors**: `.grid-4`, `.quick-links-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.trips-directory-grid`, `.courses-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/courses-directory.css
- **Selectors**: `.stat-item`, `.course-card-footer`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/program-overview.css, src/styles/pages/course-page.css
- **Selectors**: `.unique-features`, `.course-page-hero-text`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/parent-information.css, src/styles/pages/course-page.css
- **Selectors**: `.testimonial-author`, `.course-page-meta-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/day-trips.css, src/styles/pages/course-page.css
- **Selectors**: `.university-trips`, `.course-page-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-profile.css, src/styles/pages/course-page.css
- **Selectors**: `.staff-hero`, `.course-page-hero`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/course-page.css
- **Selectors**: `.pricing-showcase`, `.course-page-hero-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/course-page.css
- **Selectors**: `.hero-title`, `.course-page-title`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-directory.css, src/styles/pages/course-page.css
- **Selectors**: `.directory-subtitle`, `.course-page-description`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/course-page.css
- **Selectors**: `.grid-4`, `.course-page-meta`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/course-page.css
- **Selectors**: `.trip-actions`, `.course-page-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/course-page.css
- **Selectors**: `.stat-item`, `.course-page-section`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/course-page.css
- **Selectors**: `.hero-subtitle`, `.course-page-description`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/apply.css
- **Selectors**: `.hero-title`, `.apply-title`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/apply.css
- **Selectors**: `.hero-subtitle`, `.apply-description`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/apply.css
- **Selectors**: `.mb-3`, `.apply-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-hero-content`, `.activity-hero-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-hero-info`, `.activity-hero-info`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-meta`, `.activity-meta`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.difficulty-badge`, `.difficulty-badge`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.category-badge`, `.category-badge`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-description`, `.activity-description`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-quick-info`, `.activity-quick-info`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.quick-info-item`, `.quick-info-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-actions`, `.activity-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-hero-image`, `.activity-hero-image`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activity-page.css
- **Selectors**: `.container`, `.activity-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-cta`, `.activity-cta`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-highlights`, `.activity-schedule`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.experience-grid`, `.schedule-details`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/activity-page.css
- **Selectors**: `.session-highlights`, `.time-slots`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.highlights-grid`, `.features-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.highlight-item`, `.feature-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.educational-value-list`, `.outcomes-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.educational-value-item`, `.outcome-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.preparation-grid`, `.equipment-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.preparation-section`, `.equipment-section`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.preparation-list`, `.equipment-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activity-page.css
- **Selectors**: `.destination-icon`, `.instructor-icon`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-itinerary`, `.related-activities`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.related-trips-grid`, `.related-activities-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.related-trip-card`, `.related-activity-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.related-trip-image`, `.related-activity-image`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activity-page.css
- **Selectors**: `.stat-item`, `.related-activity-info`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.related-trip-meta`, `.related-activity-meta`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.duration-tag`, `.level-tag`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.experience-grid`, `.explore-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activity-page.css
- **Selectors**: `.destination-item`, `.explore-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.btn-outline`, `.btn-outline`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.cta-actions`, `.cta-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activity-page.css
- **Selectors**: `.btn`, `.btn`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activity-page.css
- **Selectors**: `.btn-large`, `.btn-large`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-hero-content`, `.activity-hero-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/activity-page.css
- **Selectors**: `.hero-title`, `.activity-title`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/activity-page.css
- **Selectors**: `.grid-4`, `.equipment-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-hero`, `.activity-hero`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-hero-content`, `.activity-hero-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/activity-page.css
- **Selectors**: `.hero-title`, `.activity-title`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/activity-page.css
- **Selectors**: `.hero-subtitle`, `.activity-description`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/activity-page.css
- **Selectors**: `.grid-4`, `.activity-quick-info`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/activity-page.css
- **Selectors**: `.trip-actions`, `.activity-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/activity-page.css
- **Selectors**: `.grid-4`, `.features-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/activity-page.css
- **Selectors**: `.grid-4`, `.related-activities-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/activity-page.css
- **Selectors**: `.grid-4`, `.explore-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activity-page.css
- **Selectors**: `.cta-actions`, `.cta-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/activity-page.css, src/styles/pages/activities-directory.css
- **Selectors**: `.activity-page`, `.activities-directory`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.container`, `.container`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.directory-subtitle`, `.directory-subtitle`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trips-stats`, `.activities-stats`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.stat-item`, `.stat-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.stat-label`, `.stat-label`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trips-directory-filters`, `.activities-directory-filters`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.filter-controls`, `.filter-controls`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.search-box`, `.search-box`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.search-input`, `.search-input`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.category-select`, `.category-select`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.results-count`, `.results-count`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trips-directory-grid`, `.activities-directory-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trips-grid`, `.activities-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trip-card`, `.activity-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trip-card-image`, `.activity-card-image`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trip-photo`, `.activity-photo`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trip-photo`, `.activity-photo`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trip-card-badges`, `.activity-card-badges`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.duration-badge`, `.level-badge`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/activities-directory.css
- **Selectors**: `.pricing-features`, `.activity-card-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trip-card-description`, `.activity-card-description`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trip-card-highlights`, `.activity-card-features`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trip-card-info`, `.activity-card-info`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.info-item`, `.info-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trip-card-footer`, `.activity-card-footer`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.view-details-text`, `.view-details-text`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.no-results`, `.no-results`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.categories-overview`, `.categories-overview`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.container`, `.container`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.categories-grid`, `.categories-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.category-overview-card`, `.category-overview-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.category-examples`, `.category-examples`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.container`, `.container`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.cta-actions`, `.cta-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.btn`, `.btn`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.btn-secondary`, `.btn-secondary`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.btn-large`, `.btn-large`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trips-stats`, `.activities-stats`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.filter-controls`, `.filter-controls`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trips-grid`, `.activities-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trips-directory-header`, `.activities-directory-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/activities-directory.css
- **Selectors**: `.hero-subtitle`, `.directory-subtitle`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.filter-controls`, `.activities-stats`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.stat-item`, `.stat-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/activities-directory.css
- **Selectors**: `.hero-title`, `.stat-number`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.trips-grid`, `.activities-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/activities-directory.css
- **Selectors**: `.grid-4`, `.activity-card-info`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/activities-directory.css
- **Selectors**: `.grid-4`, `.categories-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/activities-directory.css
- **Selectors**: `.cta-actions`, `.cta-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/academics.css
- **Selectors**: `.mb-2`, `.program-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/day-trips.css, src/styles/pages/academics.css
- **Selectors**: `.trip-description`, `.program-description`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/academics.css
- **Selectors**: `.mb-4`, `.program-highlights`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/day-trips.css, src/styles/pages/academics.css
- **Selectors**: `.university-trips`, `.programs-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/academics.css
- **Selectors**: `.trip-actions`, `.program-badges`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/academics.css
- **Selectors**: `.pricing-features`, `.program-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/academics.css
- **Selectors**: `.mb-4`, `.program-description`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/day-trips.css, src/styles/pages/academics.css
- **Selectors**: `.university-details`, `.program-details-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/day-trips.css, src/styles/pages/academics.css
- **Selectors**: `.inclusions-section`, `.outcomes-section`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/program-overview.css, src/styles/pages/academics.css
- **Selectors**: `.values-list`, `.outcomes-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/program-overview.css, src/styles/pages/academics.css
- **Selectors**: `.stat-icon`, `.support-icon`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/academics.css
- **Selectors**: `.grid-4`, `.programs-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-directory.css, src/styles/pages/academics.css
- **Selectors**: `.staff-grid`, `.program-details-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-profile.css, src/styles/pages/academics.css
- **Selectors**: `.staff-contact`, `.program-badges`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/academics.css
- **Selectors**: `.mb-3`, `.course-preview-highlights`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/pages/academics.css
- **Selectors**: `.hero-actions`, `.course-preview-header`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/academics.css
- **Selectors**: `.trip-actions`, `.course-preview-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-profile.css, src/styles/pages/academics.css
- **Selectors**: `.staff-contact`, `.course-preview-meta`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/academics.css
- **Selectors**: `.activity-preview-content`, `.course-preview-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/parent-information.css, src/styles/pages/academics.css
- **Selectors**: `.packing-categories`, `.faculty-preview-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/academics.css
- **Selectors**: `.mb-3`, `.faculty-preview-image`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/academics.css
- **Selectors**: `.text-center`, `.faculty-section-cta`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/course-page.css, src/styles/pages/academics.css
- **Selectors**: `.btn-large`, `.btn`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/staff-directory.css, src/styles/pages/academics.css
- **Selectors**: `.staff-grid`, `.faculty-preview-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/about-us.css
- **Selectors**: `.pricing-features`, `.vision-section`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/program-overview.css, src/styles/pages/about-us.css
- **Selectors**: `.unique-features`, `.mission-highlights`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/parent-information.css, src/styles/pages/about-us.css
- **Selectors**: `.parent-feature`, `.value-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/program-overview.css, src/styles/pages/about-us.css
- **Selectors**: `.stat-icon`, `.value-icon`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/parent-information.css, src/styles/pages/about-us.css
- **Selectors**: `.faq-grid`, `.founders-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/about-us.css
- **Selectors**: `.payment-plan-card`, `.founder-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/about-us.css
- **Selectors**: `.session-highlights`, `.expertise-tags`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/parent-information.css, src/styles/pages/about-us.css
- **Selectors**: `.parent-feature`, `.alumni-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/parent-information.css, src/styles/pages/about-us.css
- **Selectors**: `.quote-icon`, `.quote-icon`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/parent-information.css, src/styles/pages/about-us.css
- **Selectors**: `.testimonial-author`, `.alumni-info`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/about-us.css
- **Selectors**: `.grid-4`, `.founders-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/about-us.css
- **Selectors**: `.grid-4`, `.stats-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/about-us.css
- **Selectors**: `.view-details-text`, `.mission-highlights`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/academics.css, src/styles/pages/about-us.css
- **Selectors**: `.course-preview-card`, `.timeline-content`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/parent-information.css, src/styles/pages/a-day-at-sciss.css
- **Selectors**: `.parent-feature`, `.overview-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/pages/a-day-at-sciss.css
- **Selectors**: `.destination-icon`, `.overview-icon`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/about-us.css, src/styles/pages/a-day-at-sciss.css
- **Selectors**: `.timeline`, `.schedule-timeline`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/a-day-at-sciss.css
- **Selectors**: `.currency`, `.activity-icon`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/life-activities.css, src/styles/pages/a-day-at-sciss.css
- **Selectors**: `.schedule-grid`, `.weekly-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/about-us.css, src/styles/pages/a-day-at-sciss.css
- **Selectors**: `.partner-card`, `.day-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/about-us.css, src/styles/pages/a-day-at-sciss.css
- **Selectors**: `.expertise-tag`, `.day-highlight`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/tuitions-and-fees.css, src/styles/pages/a-day-at-sciss.css
- **Selectors**: `.payment-plan-card`, `.dining-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/parent-information.css, src/styles/pages/a-day-at-sciss.css
- **Selectors**: `.parent-feature`, `.safety-feature`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/program-overview.css, src/styles/pages/a-day-at-sciss.css
- **Selectors**: `.stat-icon`, `.safety-icon`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/a-day-at-sciss.css
- **Selectors**: `.grid-4`, `.weekly-grid`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trip-page.css, src/styles/pages/a-day-at-sciss.css
- **Selectors**: `.trip-actions`, `.schedule-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/pages/a-day-at-sciss.css
- **Selectors**: `.nav-links`, `.time-indicator`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/components/weekly-schedule.css
- **Selectors**: `.hero-title`, `.schedule-title`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/components/weekly-schedule.css
- **Selectors**: `.hero-subtitle`, `.schedule-description`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/components/weekly-schedule.css
- **Selectors**: `.trips-directory-header`, `.weekly-schedule-section`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/course-page.css, src/styles/components/weekly-schedule.css
- **Selectors**: `.course-page-title`, `.schedule-title`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/components/weekly-schedule.css
- **Selectors**: `.cta-actions`, `.legend`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/components/navigation.css
- **Selectors**: `.text-primary`, `.active`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/components/navigation.css
- **Selectors**: `.nav-links`, `.nav-cta`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/components/navigation.css
- **Selectors**: `.mobile-menu-toggle`, `.mobile-menu-toggle`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/academics.css, src/styles/components/navigation.css
- **Selectors**: `.btn`, `.mobile-menu`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/components/navigation.css, src/styles/components/navigation.css
- **Selectors**: `.scrolled`, `.scrolled`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/components/navigation.css
- **Selectors**: `.btn`, `.mobile-nav-link`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/components/navigation.css
- **Selectors**: `.search-box`, `.nav-link-dropdown`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/components/navigation.css
- **Selectors**: `.search-box`, `.mobile-nav-link-dropdown`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/components/footer.css
- **Selectors**: `.nav-links`, `.social-link__label`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/components/footer.css
- **Selectors**: `.view-details-text`, `.social-links`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/components/footer-cta.css
- **Selectors**: `.cta-actions`, `.cta-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/components/footer-cta.css
- **Selectors**: `.cta-actions`, `.cta-actions`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/hero-section.css, src/styles/components/footer-cta.css
- **Selectors**: `.btn`, `.btn`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/components/carousel.css
- **Selectors**: `.carousel-card`, `.carousel-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/components/carousel.css
- **Selectors**: `.nav-links`, `.carousel-arrow`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/components/carousel.css
- **Selectors**: `.carousel-card`, `.carousel-card`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/components/carousel.css
- **Selectors**: `.btn`, `.carousel-dot`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/components/gallery-card.css, src/styles/components/carousel-card.css
- **Selectors**: `.card-image`, `.card-image`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/components/gallery-card.css, src/styles/components/carousel-card.css
- **Selectors**: `.gallery-overlay`, `.carousel-overlay`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/components/navigation.css, src/styles/components/breadcrumb.css
- **Selectors**: `.nav-breadcrumb-item`, `.breadcrumb-item`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/components/navigation.css, src/styles/components/breadcrumb.css
- **Selectors**: `.nav-breadcrumb-list`, `.breadcrumb-list`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/components/breadcrumb.css
- **Selectors**: `.btn`, `.breadcrumb-link`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/day-trips.css, src/styles/components/application-form.css
- **Selectors**: `.university-meta`, `.form-row`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/day-trips.css, src/styles/components/application-form.css
- **Selectors**: `.university-meta`, `.file-upload-container`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/components/application-form.css
- **Selectors**: `.text-center`, `.file-details`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/sections/content-slider.css, src/styles/components/application-form.css
- **Selectors**: `.content-slider`, `.PhoneInput`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/components/application-form.css, src/styles/components/application-form.css
- **Selectors**: `.form-error-enter`, `.form-error-exit`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/pages/trips-directory.css, src/styles/components/application-form.css
- **Selectors**: `.search-box`, `.email-validation-loading`
- **Recommendation**: Create shared utility class


#### Pattern in 2 files
- **Files**: src/styles/globals.css, src/styles/components/application-form.css
- **Selectors**: `.btn`, `.form-error`
- **Recommendation**: Create shared utility class


## 🚀 Implementation Steps

### Step 1: Create Shared Styles
1. Import the generated `src/styles/shared.css` in your main CSS file
2. Replace redundant patterns with shared classes
3. Update component references

### Step 2: Remove Unused Classes
1. Review each unused class carefully
2. Remove classes that are confirmed unused
3. Test thoroughly after removal

### Step 3: Consolidate Patterns
1. Replace redundant patterns with shared utilities
2. Update all component references
3. Remove duplicate CSS blocks

### Step 4: Performance Optimization
1. Minify CSS for production
2. Use CSS purging in build process
3. Implement critical CSS loading

## 📁 Generated Files

- `src/styles/shared.css` - Consolidated shared styles
- `css-analysis-report.md` - Detailed analysis report
- `css-optimization-report.md` - This optimization report

## 💡 Best Practices

1. **Use CSS Custom Properties**: Leverage your existing design tokens
2. **Component-Based CSS**: Keep styles close to components
3. **Utility-First**: Use utility classes for common patterns
4. **Performance**: Monitor bundle size and loading times
5. **Testing**: Always test visual regressions after changes

---
*Report generated by CSS Optimizer*
