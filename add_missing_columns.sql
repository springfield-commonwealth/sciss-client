-- SQL commands to add missing columns to applications table
-- Copy and paste these into phpMyAdmin SQL tab

-- Add pricingTier column (Early Bird or Regular)
ALTER TABLE `applications` 
ADD COLUMN `pricingTier` VARCHAR(50) DEFAULT NULL 
COMMENT 'Pricing tier: "Early Bird" or "Regular"' 
AFTER `session_tracks`;

-- Add airportPickup column
ALTER TABLE `applications` 
ADD COLUMN `airportPickup` VARCHAR(50) DEFAULT NULL 
COMMENT 'Airport pickup option: "No", "Yes One Way", or "Yes Two Way"' 
AFTER `pricingTier`;

-- Add hearAboutUs column (JSON array of options)
ALTER TABLE `applications` 
ADD COLUMN `hearAboutUs` TEXT DEFAULT NULL 
COMMENT 'JSON array of how they heard about us options' 
AFTER `airportPickup`;

-- Add hearAboutUsOther column (text field for "Other" option)
ALTER TABLE `applications` 
ADD COLUMN `hearAboutUsOther` VARCHAR(500) DEFAULT NULL 
COMMENT 'Additional details if "Other" was selected in hearAboutUs' 
AFTER `hearAboutUs`;

-- Add questionsNotes column
ALTER TABLE `applications` 
ADD COLUMN `questionsNotes` TEXT DEFAULT NULL 
COMMENT 'Optional questions or notes from the applicant' 
AFTER `hearAboutUsOther`;

-- Add photoPermission column
ALTER TABLE `applications` 
ADD COLUMN `photoPermission` VARCHAR(10) DEFAULT NULL 
COMMENT 'Photo permission: "Yes" or "No"' 
AFTER `questionsNotes`;

-- Add allergiesOrMedicalCare column
ALTER TABLE `applications` 
ADD COLUMN `allergiesOrMedicalCare` TEXT DEFAULT NULL 
COMMENT 'Medical information including allergies or special care needs' 
AFTER `photoPermission`;

-- Add depositConfirmation column
ALTER TABLE `applications` 
ADD COLUMN `depositConfirmation` VARCHAR(10) DEFAULT NULL 
COMMENT 'Confirmation for $500 deposit: "Yes" or "No"' 
AFTER `allergiesOrMedicalCare`;

-- Add receiptEmail column
ALTER TABLE `applications` 
ADD COLUMN `receiptEmail` VARCHAR(255) DEFAULT NULL 
COMMENT 'Email address to receive receipt (optional)' 
AFTER `depositConfirmation`;

