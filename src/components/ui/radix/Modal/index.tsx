import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import React, { forwardRef } from "react";

interface RadixModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
  showCloseButton?: boolean;
  [key: string]: any;
}

// Main Radix Modal component with SCISS design system integration
const RadixModal = forwardRef<HTMLDivElement, RadixModalProps>(
  (
    {
      open,
      onOpenChange,
      trigger,
      title,
      description,
      children,
      size = "medium",
      className = "",
      showCloseButton = true,
      ...props
    },
    ref
  ) => {
    // Generate CSS classes based on props
    const sizeClass = `radix-size-${size}`;
    const contentClasses = `radix-dialog-content ${sizeClass} ${className}`;

    return (
      <Dialog.Root open={open} onOpenChange={onOpenChange} {...props}>
        {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

        <Dialog.Portal>
          <Dialog.Overlay className="radix-dialog-overlay" />
          <Dialog.Content ref={ref} className={contentClasses}>
            {title && (
              <Dialog.Title className="radix-dialog-title">
                {title}
              </Dialog.Title>
            )}

            {description && (
              <Dialog.Description className="radix-dialog-description">
                {description}
              </Dialog.Description>
            )}

            <div className="radix-dialog-body">{children}</div>

            {showCloseButton && (
              <Dialog.Close
                className="radix-dialog-close"
                aria-label="Close modal"
              >
                <Cross2Icon />
              </Dialog.Close>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
);

// Convenience components for modal composition
const ModalTrigger: React.FC<{
  children: React.ReactNode;
  [key: string]: any;
}> = ({ children, ...props }) => (
  <Dialog.Trigger asChild {...props}>
    {children}
  </Dialog.Trigger>
);

const ModalContent = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string; [key: string]: any }
>(({ children, className = "", ...props }, ref) => (
  <Dialog.Content
    ref={ref}
    className={`radix-dialog-content ${className}`}
    {...props}
  >
    {children}
  </Dialog.Content>
));

const ModalHeader: React.FC<{
  title?: string;
  description?: string;
  className?: string;
}> = ({ title, description, className = "" }) => (
  <div className={`radix-dialog-header ${className}`}>
    {title && (
      <Dialog.Title className="radix-dialog-title">{title}</Dialog.Title>
    )}
    {description && (
      <Dialog.Description className="radix-dialog-description">
        {description}
      </Dialog.Description>
    )}
  </div>
);

const ModalBody: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`radix-dialog-body ${className}`}>{children}</div>
);

const ModalFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`radix-dialog-footer ${className}`}>{children}</div>
);

const ModalClose = forwardRef<
  HTMLButtonElement,
  { children?: React.ReactNode; className?: string; [key: string]: any }
>(({ children, className = "", ...props }, ref) => (
  <Dialog.Close
    ref={ref}
    className={`radix-dialog-close-button ${className}`}
    {...props}
  >
    {children}
  </Dialog.Close>
));

// Set display names for better debugging
RadixModal.displayName = "RadixModal";
ModalTrigger.displayName = "ModalTrigger";
ModalContent.displayName = "ModalContent";
ModalHeader.displayName = "ModalHeader";
ModalBody.displayName = "ModalBody";
ModalFooter.displayName = "ModalFooter";
ModalClose.displayName = "ModalClose";

// Export main component as default, and composition components as named exports
export default RadixModal;
export {
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTrigger,
};
