-- Migration to add new columns to applications table
-- Run this SQL script on your database to add the new form fields

-- Add sessions column (JSON array of selected sessions)
ALTER TABLE applications 
ADD COLUMN sessions TEXT DEFAULT NULL 
COMMENT 'JSON array of selected sessions (e.g., ["Session 1", "Session 2"])';

-- Add session_tracks column (JSON object mapping sessions to tracks)
ALTER TABLE applications 
ADD COLUMN session_tracks TEXT DEFAULT NULL 
COMMENT 'JSON object mapping sessions to tracks (e.g., {"Session 1": "Elite Leadership · Art · English · Finance · Sports"})';

-- Add pricingTier column (Early Bird or Regular)
ALTER TABLE applications 
ADD COLUMN pricingTier VARCHAR(50) DEFAULT NULL 
COMMENT 'Pricing tier: "Early Bird" or "Regular"';

-- Add airportPickup column
ALTER TABLE applications 
ADD COLUMN airportPickup VARCHAR(50) DEFAULT NULL 
COMMENT 'Airport pickup option: "No", "Yes One Way", or "Yes Two Way"';

-- Add hearAboutUs column (JSON array of options)
ALTER TABLE applications 
ADD COLUMN hearAboutUs TEXT DEFAULT NULL 
COMMENT 'JSON array of how they heard about us options';

-- Add hearAboutUsOther column (text field for "Other" option)
ALTER TABLE applications 
ADD COLUMN hearAboutUsOther VARCHAR(500) DEFAULT NULL 
COMMENT 'Additional details if "Other" was selected in hearAboutUs';

-- Add questionsNotes column
ALTER TABLE applications 
ADD COLUMN questionsNotes TEXT DEFAULT NULL 
COMMENT 'Optional questions or notes from the applicant';

-- Add photoPermission column
ALTER TABLE applications 
ADD COLUMN photoPermission VARCHAR(10) DEFAULT NULL 
COMMENT 'Photo permission: "Yes" or "No"';

-- Add allergiesOrMedicalCare column
ALTER TABLE applications 
ADD COLUMN allergiesOrMedicalCare TEXT DEFAULT NULL 
COMMENT 'Medical information including allergies or special care needs';

-- Add depositConfirmation column
ALTER TABLE applications 
ADD COLUMN depositConfirmation VARCHAR(10) DEFAULT NULL 
COMMENT 'Confirmation for $500 deposit: "Yes" or "No"';

-- Add receiptEmail column
ALTER TABLE applications 
ADD COLUMN receiptEmail VARCHAR(255) DEFAULT NULL 
COMMENT 'Email address to receive receipt (optional)';

-- Verify the columns were added
-- SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE, COLUMN_DEFAULT, COLUMN_COMMENT
-- FROM INFORMATION_SCHEMA.COLUMNS
-- WHERE TABLE_NAME = 'applications'
-- ORDER BY ORDINAL_POSITION;

