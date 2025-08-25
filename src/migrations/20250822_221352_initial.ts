import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_academic_programs_schedule_days" AS ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday');
  CREATE TYPE "public"."enum_academic_programs_category" AS ENUM('core-academic', 'elective', 'enrichment', 'language', 'stem', 'arts-humanities');
  CREATE TYPE "public"."enum_academic_programs_status" AS ENUM('active', 'inactive', 'draft');
  CREATE TYPE "public"."enum_activities_schedule_days" AS ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');
  CREATE TYPE "public"."enum_activities_category" AS ENUM('sports-recreation', 'arts-crafts', 'music-dance', 'technology', 'outdoor-adventure', 'social-activities');
  CREATE TYPE "public"."enum_activities_status" AS ENUM('active', 'inactive', 'draft');
  CREATE TYPE "public"."enum_staff_department" AS ENUM('academic', 'administration', 'student-life', 'support-services');
  CREATE TYPE "public"."enum_staff_status" AS ENUM('active', 'inactive', 'draft');
  CREATE TYPE "public"."enum_trips_category" AS ENUM('university-visits', 'cultural-experiences', 'educational-tours', 'recreational', 'historical-sites');
  CREATE TYPE "public"."enum_trips_status" AS ENUM('active', 'inactive', 'draft');
  CREATE TYPE "public"."enum_media_usage" AS ENUM('general', 'hero', 'gallery', 'staff', 'activities', 'trips');
  CREATE TYPE "public"."enum_pages_blocks_block_type" AS ENUM('hero', 'content', 'gallery', 'testimonials', 'cta');
  CREATE TYPE "public"."enum_pages_blocks_content_image_position" AS ENUM('left', 'right', 'top', 'bottom');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published', 'archived');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor');
  CREATE TABLE "academic_programs_prerequisites" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"prerequisite" varchar
  );
  
  CREATE TABLE "academic_programs_learning_objectives" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"objective" varchar
  );
  
  CREATE TABLE "academic_programs_materials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"material" varchar
  );
  
  CREATE TABLE "academic_programs_schedule_days" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_academic_programs_schedule_days",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "academic_programs_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "academic_programs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"category" "enum_academic_programs_category" NOT NULL,
  	"age_range" varchar NOT NULL,
  	"duration" varchar NOT NULL,
  	"instructor_id" integer,
  	"schedule_time" varchar,
  	"schedule_location" varchar,
  	"featured_image_id" integer,
  	"status" "enum_academic_programs_status" DEFAULT 'active',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "activities_schedule_days" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_activities_schedule_days",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "activities_equipment" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "activities_safety" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"guideline" varchar
  );
  
  CREATE TABLE "activities_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "activities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"category" "enum_activities_category" NOT NULL,
  	"duration" varchar NOT NULL,
  	"schedule_time" varchar,
  	"schedule_location" varchar,
  	"instructor" varchar,
  	"max_participants" numeric,
  	"featured_image_id" integer,
  	"status" "enum_activities_status" DEFAULT 'active',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "staff_education" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"degree" varchar,
  	"institution" varchar,
  	"year" numeric
  );
  
  CREATE TABLE "staff_experience" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"position" varchar,
  	"organization" varchar,
  	"duration" varchar
  );
  
  CREATE TABLE "staff_specializations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"specialization" varchar
  );
  
  CREATE TABLE "staff_certifications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"certification" varchar,
  	"issuing_organization" varchar,
  	"year" numeric
  );
  
  CREATE TABLE "staff_activities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"activity" varchar
  );
  
  CREATE TABLE "staff" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"position" varchar NOT NULL,
  	"department" "enum_staff_department" NOT NULL,
  	"bio" jsonb NOT NULL,
  	"profile_image_id" integer,
  	"email" varchar,
  	"phone" varchar,
  	"social_links_linkedin" varchar,
  	"social_links_website" varchar,
  	"status" "enum_staff_status" DEFAULT 'active',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "trips_itinerary" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"time" varchar,
  	"activity" varchar,
  	"description" varchar,
  	"location" varchar
  );
  
  CREATE TABLE "trips_requirements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"requirement" varchar
  );
  
  CREATE TABLE "trips_what_to_bring" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "trips_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "trips" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"category" "enum_trips_category" NOT NULL,
  	"duration" varchar NOT NULL,
  	"destination" varchar NOT NULL,
  	"transportation" varchar,
  	"cost" numeric,
  	"max_participants" numeric,
  	"safety_notes" varchar,
  	"featured_image_id" integer,
  	"status" "enum_trips_status" DEFAULT 'active',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "media_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"credit" varchar,
  	"usage" "enum_media_usage" DEFAULT 'general',
  	"prefix" varchar DEFAULT 'media',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar,
  	"sizes_featured_url" varchar,
  	"sizes_featured_width" numeric,
  	"sizes_featured_height" numeric,
  	"sizes_featured_mime_type" varchar,
  	"sizes_featured_filesize" numeric,
  	"sizes_featured_filename" varchar,
  	"sizes_gallery_url" varchar,
  	"sizes_gallery_width" numeric,
  	"sizes_gallery_height" numeric,
  	"sizes_gallery_mime_type" varchar,
  	"sizes_gallery_filesize" numeric,
  	"sizes_gallery_filename" varchar
  );
  
  CREATE TABLE "pages_meta_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE "pages_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_type" "enum_pages_blocks_block_type" NOT NULL,
  	"hero_title" varchar,
  	"hero_subtitle" varchar,
  	"hero_background_image_id" integer,
  	"hero_cta_text" varchar,
  	"hero_cta_link" varchar,
  	"content_title" varchar,
  	"content_content" jsonb,
  	"content_image_id" integer,
  	"content_image_position" "enum_pages_blocks_content_image_position" DEFAULT 'left',
  	"gallery_title" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"status" "enum_pages_status" DEFAULT 'draft' NOT NULL,
  	"meta_description" varchar,
  	"meta_og_image_id" integer,
  	"content" jsonb,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"academic_programs_id" integer,
  	"activities_id" integer,
  	"staff_id" integer,
  	"trips_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "academic_programs_prerequisites" ADD CONSTRAINT "academic_programs_prerequisites_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."academic_programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "academic_programs_learning_objectives" ADD CONSTRAINT "academic_programs_learning_objectives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."academic_programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "academic_programs_materials" ADD CONSTRAINT "academic_programs_materials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."academic_programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "academic_programs_schedule_days" ADD CONSTRAINT "academic_programs_schedule_days_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."academic_programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "academic_programs_gallery" ADD CONSTRAINT "academic_programs_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "academic_programs_gallery" ADD CONSTRAINT "academic_programs_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."academic_programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "academic_programs" ADD CONSTRAINT "academic_programs_instructor_id_staff_id_fk" FOREIGN KEY ("instructor_id") REFERENCES "public"."staff"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "academic_programs" ADD CONSTRAINT "academic_programs_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "activities_schedule_days" ADD CONSTRAINT "activities_schedule_days_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "activities_equipment" ADD CONSTRAINT "activities_equipment_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "activities_safety" ADD CONSTRAINT "activities_safety_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "activities_gallery" ADD CONSTRAINT "activities_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "activities_gallery" ADD CONSTRAINT "activities_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "activities" ADD CONSTRAINT "activities_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "staff_education" ADD CONSTRAINT "staff_education_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "staff_experience" ADD CONSTRAINT "staff_experience_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "staff_specializations" ADD CONSTRAINT "staff_specializations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "staff_certifications" ADD CONSTRAINT "staff_certifications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "staff_activities" ADD CONSTRAINT "staff_activities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "staff" ADD CONSTRAINT "staff_profile_image_id_media_id_fk" FOREIGN KEY ("profile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "trips_itinerary" ADD CONSTRAINT "trips_itinerary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trips"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trips_requirements" ADD CONSTRAINT "trips_requirements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trips"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trips_what_to_bring" ADD CONSTRAINT "trips_what_to_bring_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trips"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trips_gallery" ADD CONSTRAINT "trips_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "trips_gallery" ADD CONSTRAINT "trips_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trips"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trips" ADD CONSTRAINT "trips_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "media_tags" ADD CONSTRAINT "media_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_meta_keywords" ADD CONSTRAINT "pages_meta_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks" ADD CONSTRAINT "pages_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("hero_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks" ADD CONSTRAINT "pages_blocks_content_image_id_media_id_fk" FOREIGN KEY ("content_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks" ADD CONSTRAINT "pages_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_og_image_id_media_id_fk" FOREIGN KEY ("meta_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_academic_programs_fk" FOREIGN KEY ("academic_programs_id") REFERENCES "public"."academic_programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_activities_fk" FOREIGN KEY ("activities_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_staff_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_trips_fk" FOREIGN KEY ("trips_id") REFERENCES "public"."trips"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "academic_programs_prerequisites_order_idx" ON "academic_programs_prerequisites" USING btree ("_order");
  CREATE INDEX "academic_programs_prerequisites_parent_id_idx" ON "academic_programs_prerequisites" USING btree ("_parent_id");
  CREATE INDEX "academic_programs_learning_objectives_order_idx" ON "academic_programs_learning_objectives" USING btree ("_order");
  CREATE INDEX "academic_programs_learning_objectives_parent_id_idx" ON "academic_programs_learning_objectives" USING btree ("_parent_id");
  CREATE INDEX "academic_programs_materials_order_idx" ON "academic_programs_materials" USING btree ("_order");
  CREATE INDEX "academic_programs_materials_parent_id_idx" ON "academic_programs_materials" USING btree ("_parent_id");
  CREATE INDEX "academic_programs_schedule_days_order_idx" ON "academic_programs_schedule_days" USING btree ("order");
  CREATE INDEX "academic_programs_schedule_days_parent_idx" ON "academic_programs_schedule_days" USING btree ("parent_id");
  CREATE INDEX "academic_programs_gallery_order_idx" ON "academic_programs_gallery" USING btree ("_order");
  CREATE INDEX "academic_programs_gallery_parent_id_idx" ON "academic_programs_gallery" USING btree ("_parent_id");
  CREATE INDEX "academic_programs_gallery_image_idx" ON "academic_programs_gallery" USING btree ("image_id");
  CREATE INDEX "academic_programs_instructor_idx" ON "academic_programs" USING btree ("instructor_id");
  CREATE INDEX "academic_programs_featured_image_idx" ON "academic_programs" USING btree ("featured_image_id");
  CREATE INDEX "academic_programs_updated_at_idx" ON "academic_programs" USING btree ("updated_at");
  CREATE INDEX "academic_programs_created_at_idx" ON "academic_programs" USING btree ("created_at");
  CREATE INDEX "activities_schedule_days_order_idx" ON "activities_schedule_days" USING btree ("order");
  CREATE INDEX "activities_schedule_days_parent_idx" ON "activities_schedule_days" USING btree ("parent_id");
  CREATE INDEX "activities_equipment_order_idx" ON "activities_equipment" USING btree ("_order");
  CREATE INDEX "activities_equipment_parent_id_idx" ON "activities_equipment" USING btree ("_parent_id");
  CREATE INDEX "activities_safety_order_idx" ON "activities_safety" USING btree ("_order");
  CREATE INDEX "activities_safety_parent_id_idx" ON "activities_safety" USING btree ("_parent_id");
  CREATE INDEX "activities_gallery_order_idx" ON "activities_gallery" USING btree ("_order");
  CREATE INDEX "activities_gallery_parent_id_idx" ON "activities_gallery" USING btree ("_parent_id");
  CREATE INDEX "activities_gallery_image_idx" ON "activities_gallery" USING btree ("image_id");
  CREATE INDEX "activities_featured_image_idx" ON "activities" USING btree ("featured_image_id");
  CREATE INDEX "activities_updated_at_idx" ON "activities" USING btree ("updated_at");
  CREATE INDEX "activities_created_at_idx" ON "activities" USING btree ("created_at");
  CREATE INDEX "staff_education_order_idx" ON "staff_education" USING btree ("_order");
  CREATE INDEX "staff_education_parent_id_idx" ON "staff_education" USING btree ("_parent_id");
  CREATE INDEX "staff_experience_order_idx" ON "staff_experience" USING btree ("_order");
  CREATE INDEX "staff_experience_parent_id_idx" ON "staff_experience" USING btree ("_parent_id");
  CREATE INDEX "staff_specializations_order_idx" ON "staff_specializations" USING btree ("_order");
  CREATE INDEX "staff_specializations_parent_id_idx" ON "staff_specializations" USING btree ("_parent_id");
  CREATE INDEX "staff_certifications_order_idx" ON "staff_certifications" USING btree ("_order");
  CREATE INDEX "staff_certifications_parent_id_idx" ON "staff_certifications" USING btree ("_parent_id");
  CREATE INDEX "staff_activities_order_idx" ON "staff_activities" USING btree ("_order");
  CREATE INDEX "staff_activities_parent_id_idx" ON "staff_activities" USING btree ("_parent_id");
  CREATE INDEX "staff_profile_image_idx" ON "staff" USING btree ("profile_image_id");
  CREATE INDEX "staff_updated_at_idx" ON "staff" USING btree ("updated_at");
  CREATE INDEX "staff_created_at_idx" ON "staff" USING btree ("created_at");
  CREATE INDEX "trips_itinerary_order_idx" ON "trips_itinerary" USING btree ("_order");
  CREATE INDEX "trips_itinerary_parent_id_idx" ON "trips_itinerary" USING btree ("_parent_id");
  CREATE INDEX "trips_requirements_order_idx" ON "trips_requirements" USING btree ("_order");
  CREATE INDEX "trips_requirements_parent_id_idx" ON "trips_requirements" USING btree ("_parent_id");
  CREATE INDEX "trips_what_to_bring_order_idx" ON "trips_what_to_bring" USING btree ("_order");
  CREATE INDEX "trips_what_to_bring_parent_id_idx" ON "trips_what_to_bring" USING btree ("_parent_id");
  CREATE INDEX "trips_gallery_order_idx" ON "trips_gallery" USING btree ("_order");
  CREATE INDEX "trips_gallery_parent_id_idx" ON "trips_gallery" USING btree ("_parent_id");
  CREATE INDEX "trips_gallery_image_idx" ON "trips_gallery" USING btree ("image_id");
  CREATE INDEX "trips_featured_image_idx" ON "trips" USING btree ("featured_image_id");
  CREATE INDEX "trips_updated_at_idx" ON "trips" USING btree ("updated_at");
  CREATE INDEX "trips_created_at_idx" ON "trips" USING btree ("created_at");
  CREATE INDEX "media_tags_order_idx" ON "media_tags" USING btree ("_order");
  CREATE INDEX "media_tags_parent_id_idx" ON "media_tags" USING btree ("_parent_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE INDEX "media_sizes_featured_sizes_featured_filename_idx" ON "media" USING btree ("sizes_featured_filename");
  CREATE INDEX "media_sizes_gallery_sizes_gallery_filename_idx" ON "media" USING btree ("sizes_gallery_filename");
  CREATE INDEX "pages_meta_keywords_order_idx" ON "pages_meta_keywords" USING btree ("_order");
  CREATE INDEX "pages_meta_keywords_parent_id_idx" ON "pages_meta_keywords" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_images_order_idx" ON "pages_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_images_parent_id_idx" ON "pages_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_images_image_idx" ON "pages_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_order_idx" ON "pages_blocks" USING btree ("_order");
  CREATE INDEX "pages_blocks_parent_id_idx" ON "pages_blocks" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_hero_background_image_idx" ON "pages_blocks" USING btree ("hero_background_image_id");
  CREATE INDEX "pages_blocks_content_content_image_idx" ON "pages_blocks" USING btree ("content_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_meta_meta_og_image_idx" ON "pages" USING btree ("meta_og_image_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_academic_programs_id_idx" ON "payload_locked_documents_rels" USING btree ("academic_programs_id");
  CREATE INDEX "payload_locked_documents_rels_activities_id_idx" ON "payload_locked_documents_rels" USING btree ("activities_id");
  CREATE INDEX "payload_locked_documents_rels_staff_id_idx" ON "payload_locked_documents_rels" USING btree ("staff_id");
  CREATE INDEX "payload_locked_documents_rels_trips_id_idx" ON "payload_locked_documents_rels" USING btree ("trips_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "academic_programs_prerequisites" CASCADE;
  DROP TABLE "academic_programs_learning_objectives" CASCADE;
  DROP TABLE "academic_programs_materials" CASCADE;
  DROP TABLE "academic_programs_schedule_days" CASCADE;
  DROP TABLE "academic_programs_gallery" CASCADE;
  DROP TABLE "academic_programs" CASCADE;
  DROP TABLE "activities_schedule_days" CASCADE;
  DROP TABLE "activities_equipment" CASCADE;
  DROP TABLE "activities_safety" CASCADE;
  DROP TABLE "activities_gallery" CASCADE;
  DROP TABLE "activities" CASCADE;
  DROP TABLE "staff_education" CASCADE;
  DROP TABLE "staff_experience" CASCADE;
  DROP TABLE "staff_specializations" CASCADE;
  DROP TABLE "staff_certifications" CASCADE;
  DROP TABLE "staff_activities" CASCADE;
  DROP TABLE "staff" CASCADE;
  DROP TABLE "trips_itinerary" CASCADE;
  DROP TABLE "trips_requirements" CASCADE;
  DROP TABLE "trips_what_to_bring" CASCADE;
  DROP TABLE "trips_gallery" CASCADE;
  DROP TABLE "trips" CASCADE;
  DROP TABLE "media_tags" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "pages_meta_keywords" CASCADE;
  DROP TABLE "pages_blocks_gallery_images" CASCADE;
  DROP TABLE "pages_blocks" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_academic_programs_schedule_days";
  DROP TYPE "public"."enum_academic_programs_category";
  DROP TYPE "public"."enum_academic_programs_status";
  DROP TYPE "public"."enum_activities_schedule_days";
  DROP TYPE "public"."enum_activities_category";
  DROP TYPE "public"."enum_activities_status";
  DROP TYPE "public"."enum_staff_department";
  DROP TYPE "public"."enum_staff_status";
  DROP TYPE "public"."enum_trips_category";
  DROP TYPE "public"."enum_trips_status";
  DROP TYPE "public"."enum_media_usage";
  DROP TYPE "public"."enum_pages_blocks_block_type";
  DROP TYPE "public"."enum_pages_blocks_content_image_position";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum_users_role";`)
}
