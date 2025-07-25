import { ReactNode } from 'react';

// Common size and variant types for consistent design system integration
export type ComponentSize = 'small' | 'medium' | 'large';
export type ComponentVariant = 'primary' | 'secondary';

// Base props that all Radix components share
export interface BaseRadixProps {
  size?: ComponentSize;
  variant?: ComponentVariant;
  className?: string;
  disabled?: boolean;
  error?: boolean;
}

// ==========================================
// SELECT COMPONENT TYPES
// ==========================================

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectGroupOption {
  group: string;
  items: SelectOption[];
}

export interface RadixSelectProps extends BaseRadixProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  options: (SelectOption | SelectGroupOption)[];
  required?: boolean;
  name?: string;
  form?: string;
  dir?: 'ltr' | 'rtl';
}

// ==========================================
// MODAL/DIALOG COMPONENT TYPES
// ==========================================

export interface RadixModalProps extends BaseRadixProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactNode;
  title?: string;
  description?: string;
  children: ReactNode;
  showCloseButton?: boolean;
  modal?: boolean;
}

export interface ModalTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

export interface ModalContentProps {
  children: ReactNode;
  className?: string;
  onOpenAutoFocus?: (event: Event) => void;
  onCloseAutoFocus?: (event: Event) => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  onInteractOutside?: (event: Event) => void;
}

export interface ModalHeaderProps {
  title?: string;
  description?: string;
  className?: string;
}

export interface ModalBodyProps {
  children: ReactNode;
  className?: string;
}

export interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

export interface ModalCloseProps {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

// ==========================================
// NAVIGATION MENU COMPONENT TYPES
// ==========================================

export interface NavigationMenuItem {
  label: string;
  href?: string;
  children?: NavigationMenuItem[];
  active?: boolean;
  disabled?: boolean;
}

export interface RadixNavigationMenuProps extends BaseRadixProps {
  items: NavigationMenuItem[];
  orientation?: 'horizontal' | 'vertical';
  dir?: 'ltr' | 'rtl';
  onValueChange?: (value: string) => void;
}

// ==========================================
// FORM COMPONENT TYPES (Checkbox, Radio)
// ==========================================

export interface RadixCheckboxProps extends BaseRadixProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
}

export interface RadixRadioProps extends BaseRadixProps {
  value: string;
  id?: string;
  required?: boolean;
  name?: string;
}

export interface RadixRadioGroupProps extends BaseRadixProps {
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  name?: string;
  required?: boolean;
  orientation?: 'horizontal' | 'vertical';
  dir?: 'ltr' | 'rtl';
  loop?: boolean;
}

// ==========================================
// COMPONENT COMPOSITION PATTERNS
// ==========================================

// Form field wrapper type for consistent form component styling
export interface FormFieldProps {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

// Card component wrapper for consistent content containers
export interface CardProps {
  title?: string;
  description?: string;
  children: ReactNode;
  variant?: ComponentVariant;
  className?: string;
  padding?: ComponentSize;
}

// ==========================================
// DESIGN SYSTEM UTILITIES
// ==========================================

// CSS class generation utilities
export interface ClassNameGenerator {
  size: (size: ComponentSize) => string;
  variant: (variant: ComponentVariant, error?: boolean) => string;
  state: (state: 'hover' | 'focus' | 'active' | 'disabled') => string;
}

// Theme validation utilities
export interface ThemeValidation {
  validateTokenUsage: (component: string) => boolean;
  checkColorContrast: (foreground: string, background: string) => boolean;
  validateAccessibility: (component: ReactNode) => Promise<void>;
}

// Performance monitoring utilities
export interface PerformanceMetrics {
  renderTime: number;
  bundleSize: number;
  interactionLatency: number;
}

// ==========================================
// TESTING UTILITIES
// ==========================================

// Component testing helpers
export interface RadixTestingUtils {
  renderWithTheme: (component: ReactNode) => any;
  mockSelectOptions: SelectOption[];
  mockNavigationItems: NavigationMenuItem[];
  axeConfig: any;
}

// Visual regression testing types
export interface VisualRegressionTest {
  componentName: string;
  variants: ComponentVariant[];
  sizes: ComponentSize[];
  states: ('default' | 'hover' | 'focus' | 'disabled')[];
}

// ==========================================
// DOCUMENTATION TYPES
// ==========================================

// Component documentation structure
export interface ComponentDocumentation {
  name: string;
  description: string;
  props: Record<string, PropDocumentation>;
  examples: ComponentExample[];
  designTokens: string[];
  accessibility: AccessibilityInfo;
}

export interface PropDocumentation {
  type: string;
  required: boolean;
  default?: any;
  description: string;
  examples?: any[];
}

export interface ComponentExample {
  title: string;
  description: string;
  code: string;
  preview: ReactNode;
}

export interface AccessibilityInfo {
  keyboardNavigation: string[];
  screenReaderSupport: string[];
  ariaLabels: string[];
  colorContrast: string;
}

// ==========================================
// INTEGRATION TYPES
// ==========================================

// Integration with existing SCISS components
export interface SCISSIntegration {
  formIntegration: boolean;
  navigationIntegration: boolean;
  themeCompatibility: boolean;
  performanceImpact: 'low' | 'medium' | 'high';
}

// Migration helpers for transitioning from legacy components
export interface MigrationHelper {
  legacyComponent: string;
  radixEquivalent: string;
  migrationSteps: string[];
  breakingChanges: string[];
  codemods?: string;
} 