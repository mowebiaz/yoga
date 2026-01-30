import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_users_roles" AS ENUM('admin', 'editor', 'user');
  CREATE TYPE "public"."enum_pages_blocks_info_message_style" AS ENUM('info', 'warning', 'danger', 'success');
  CREATE TYPE "public"."enum_pages_blocks_adult_course_type" AS ENUM('hatha', 'yin');
  CREATE TYPE "public"."enum_pages_blocks_adult_course_day_of_week" AS ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vencredi', 'samedi', 'dimanche');
  CREATE TYPE "public"."enum_pages_blocks_children_course_type" AS ENUM('3-6', '7-10', '11-14');
  CREATE TYPE "public"."enum_pages_blocks_children_course_day_of_week" AS ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vencredi', 'samedi', 'dimanche');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_info_message_style" AS ENUM('info', 'warning', 'danger', 'success');
  CREATE TYPE "public"."enum__pages_v_blocks_adult_course_type" AS ENUM('hatha', 'yin');
  CREATE TYPE "public"."enum__pages_v_blocks_adult_course_day_of_week" AS ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vencredi', 'samedi', 'dimanche');
  CREATE TYPE "public"."enum__pages_v_blocks_children_course_type" AS ENUM('3-6', '7-10', '11-14');
  CREATE TYPE "public"."enum__pages_v_blocks_children_course_day_of_week" AS ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vencredi', 'samedi', 'dimanche');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"nom" varchar,
  	"alt" varchar NOT NULL,
  	"credit_text" varchar,
  	"photographe" varchar,
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
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "users_roles" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_users_roles",
  	"id" serial PRIMARY KEY NOT NULL
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
  	"avatar_id" integer,
  	"last_name" varchar,
  	"first_name" varchar,
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
  
  CREATE TABLE "pages_blocks_info_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_pages_blocks_info_message_style" DEFAULT 'info',
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_adult_course" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_adult_course_type",
  	"day_of_week" "enum_pages_blocks_adult_course_day_of_week",
  	"start_time" varchar,
  	"end_time" varchar,
  	"place_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_children_course" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_children_course_type",
  	"day_of_week" "enum_pages_blocks_children_course_day_of_week",
  	"start_time" varchar,
  	"end_time" varchar,
  	"place_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_workshop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"date" timestamp(3) with time zone,
  	"start_time" varchar,
  	"end_time" varchar,
  	"place_id" integer,
  	"image_id" integer,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_retreat" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"place_id" integer,
  	"image_id" integer,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_pages_v_blocks_info_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style" "enum__pages_v_blocks_info_message_style" DEFAULT 'info',
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_adult_course" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_adult_course_type",
  	"day_of_week" "enum__pages_v_blocks_adult_course_day_of_week",
  	"start_time" varchar,
  	"end_time" varchar,
  	"place_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_children_course" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_children_course_type",
  	"day_of_week" "enum__pages_v_blocks_children_course_day_of_week",
  	"start_time" varchar,
  	"end_time" varchar,
  	"place_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_workshop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"date" timestamp(3) with time zone,
  	"start_time" varchar,
  	"end_time" varchar,
  	"place_id" integer,
  	"image_id" integer,
  	"description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_retreat" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"place_id" integer,
  	"image_id" integer,
  	"description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "places" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"address" varchar NOT NULL,
  	"zip" varchar NOT NULL,
  	"city" varchar NOT NULL,
  	"google_maps_link" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
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
  	"media_id" integer,
  	"users_id" integer,
  	"pages_id" integer,
  	"places_id" integer
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
  
  ALTER TABLE "users_roles" ADD CONSTRAINT "users_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users" ADD CONSTRAINT "users_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_info_message" ADD CONSTRAINT "pages_blocks_info_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_adult_course" ADD CONSTRAINT "pages_blocks_adult_course_place_id_places_id_fk" FOREIGN KEY ("place_id") REFERENCES "public"."places"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_adult_course" ADD CONSTRAINT "pages_blocks_adult_course_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_children_course" ADD CONSTRAINT "pages_blocks_children_course_place_id_places_id_fk" FOREIGN KEY ("place_id") REFERENCES "public"."places"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_children_course" ADD CONSTRAINT "pages_blocks_children_course_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_workshop" ADD CONSTRAINT "pages_blocks_workshop_place_id_places_id_fk" FOREIGN KEY ("place_id") REFERENCES "public"."places"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_workshop" ADD CONSTRAINT "pages_blocks_workshop_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_workshop" ADD CONSTRAINT "pages_blocks_workshop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_retreat" ADD CONSTRAINT "pages_blocks_retreat_place_id_places_id_fk" FOREIGN KEY ("place_id") REFERENCES "public"."places"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_retreat" ADD CONSTRAINT "pages_blocks_retreat_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_retreat" ADD CONSTRAINT "pages_blocks_retreat_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_info_message" ADD CONSTRAINT "_pages_v_blocks_info_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_adult_course" ADD CONSTRAINT "_pages_v_blocks_adult_course_place_id_places_id_fk" FOREIGN KEY ("place_id") REFERENCES "public"."places"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_adult_course" ADD CONSTRAINT "_pages_v_blocks_adult_course_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_children_course" ADD CONSTRAINT "_pages_v_blocks_children_course_place_id_places_id_fk" FOREIGN KEY ("place_id") REFERENCES "public"."places"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_children_course" ADD CONSTRAINT "_pages_v_blocks_children_course_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_workshop" ADD CONSTRAINT "_pages_v_blocks_workshop_place_id_places_id_fk" FOREIGN KEY ("place_id") REFERENCES "public"."places"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_workshop" ADD CONSTRAINT "_pages_v_blocks_workshop_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_workshop" ADD CONSTRAINT "_pages_v_blocks_workshop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_retreat" ADD CONSTRAINT "_pages_v_blocks_retreat_place_id_places_id_fk" FOREIGN KEY ("place_id") REFERENCES "public"."places"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_retreat" ADD CONSTRAINT "_pages_v_blocks_retreat_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_retreat" ADD CONSTRAINT "_pages_v_blocks_retreat_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_places_fk" FOREIGN KEY ("places_id") REFERENCES "public"."places"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "users_roles_order_idx" ON "users_roles" USING btree ("order");
  CREATE INDEX "users_roles_parent_idx" ON "users_roles" USING btree ("parent_id");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_avatar_idx" ON "users" USING btree ("avatar_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "pages_blocks_info_message_order_idx" ON "pages_blocks_info_message" USING btree ("_order");
  CREATE INDEX "pages_blocks_info_message_parent_id_idx" ON "pages_blocks_info_message" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_info_message_path_idx" ON "pages_blocks_info_message" USING btree ("_path");
  CREATE INDEX "pages_blocks_adult_course_order_idx" ON "pages_blocks_adult_course" USING btree ("_order");
  CREATE INDEX "pages_blocks_adult_course_parent_id_idx" ON "pages_blocks_adult_course" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_adult_course_path_idx" ON "pages_blocks_adult_course" USING btree ("_path");
  CREATE INDEX "pages_blocks_adult_course_place_idx" ON "pages_blocks_adult_course" USING btree ("place_id");
  CREATE INDEX "pages_blocks_children_course_order_idx" ON "pages_blocks_children_course" USING btree ("_order");
  CREATE INDEX "pages_blocks_children_course_parent_id_idx" ON "pages_blocks_children_course" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_children_course_path_idx" ON "pages_blocks_children_course" USING btree ("_path");
  CREATE INDEX "pages_blocks_children_course_place_idx" ON "pages_blocks_children_course" USING btree ("place_id");
  CREATE INDEX "pages_blocks_workshop_order_idx" ON "pages_blocks_workshop" USING btree ("_order");
  CREATE INDEX "pages_blocks_workshop_parent_id_idx" ON "pages_blocks_workshop" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_workshop_path_idx" ON "pages_blocks_workshop" USING btree ("_path");
  CREATE INDEX "pages_blocks_workshop_place_idx" ON "pages_blocks_workshop" USING btree ("place_id");
  CREATE INDEX "pages_blocks_workshop_image_idx" ON "pages_blocks_workshop" USING btree ("image_id");
  CREATE INDEX "pages_blocks_retreat_order_idx" ON "pages_blocks_retreat" USING btree ("_order");
  CREATE INDEX "pages_blocks_retreat_parent_id_idx" ON "pages_blocks_retreat" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_retreat_path_idx" ON "pages_blocks_retreat" USING btree ("_path");
  CREATE INDEX "pages_blocks_retreat_place_idx" ON "pages_blocks_retreat" USING btree ("place_id");
  CREATE INDEX "pages_blocks_retreat_image_idx" ON "pages_blocks_retreat" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "_pages_v_blocks_info_message_order_idx" ON "_pages_v_blocks_info_message" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_info_message_parent_id_idx" ON "_pages_v_blocks_info_message" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_info_message_path_idx" ON "_pages_v_blocks_info_message" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_adult_course_order_idx" ON "_pages_v_blocks_adult_course" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_adult_course_parent_id_idx" ON "_pages_v_blocks_adult_course" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_adult_course_path_idx" ON "_pages_v_blocks_adult_course" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_adult_course_place_idx" ON "_pages_v_blocks_adult_course" USING btree ("place_id");
  CREATE INDEX "_pages_v_blocks_children_course_order_idx" ON "_pages_v_blocks_children_course" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_children_course_parent_id_idx" ON "_pages_v_blocks_children_course" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_children_course_path_idx" ON "_pages_v_blocks_children_course" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_children_course_place_idx" ON "_pages_v_blocks_children_course" USING btree ("place_id");
  CREATE INDEX "_pages_v_blocks_workshop_order_idx" ON "_pages_v_blocks_workshop" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_workshop_parent_id_idx" ON "_pages_v_blocks_workshop" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_workshop_path_idx" ON "_pages_v_blocks_workshop" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_workshop_place_idx" ON "_pages_v_blocks_workshop" USING btree ("place_id");
  CREATE INDEX "_pages_v_blocks_workshop_image_idx" ON "_pages_v_blocks_workshop" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_retreat_order_idx" ON "_pages_v_blocks_retreat" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_retreat_parent_id_idx" ON "_pages_v_blocks_retreat" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_retreat_path_idx" ON "_pages_v_blocks_retreat" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_retreat_place_idx" ON "_pages_v_blocks_retreat" USING btree ("place_id");
  CREATE INDEX "_pages_v_blocks_retreat_image_idx" ON "_pages_v_blocks_retreat" USING btree ("image_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "places_updated_at_idx" ON "places" USING btree ("updated_at");
  CREATE INDEX "places_created_at_idx" ON "places" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_places_id_idx" ON "payload_locked_documents_rels" USING btree ("places_id");
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
   DROP TABLE "media" CASCADE;
  DROP TABLE "users_roles" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "pages_blocks_info_message" CASCADE;
  DROP TABLE "pages_blocks_adult_course" CASCADE;
  DROP TABLE "pages_blocks_children_course" CASCADE;
  DROP TABLE "pages_blocks_workshop" CASCADE;
  DROP TABLE "pages_blocks_retreat" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "_pages_v_blocks_info_message" CASCADE;
  DROP TABLE "_pages_v_blocks_adult_course" CASCADE;
  DROP TABLE "_pages_v_blocks_children_course" CASCADE;
  DROP TABLE "_pages_v_blocks_workshop" CASCADE;
  DROP TABLE "_pages_v_blocks_retreat" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "places" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_users_roles";
  DROP TYPE "public"."enum_pages_blocks_info_message_style";
  DROP TYPE "public"."enum_pages_blocks_adult_course_type";
  DROP TYPE "public"."enum_pages_blocks_adult_course_day_of_week";
  DROP TYPE "public"."enum_pages_blocks_children_course_type";
  DROP TYPE "public"."enum_pages_blocks_children_course_day_of_week";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_info_message_style";
  DROP TYPE "public"."enum__pages_v_blocks_adult_course_type";
  DROP TYPE "public"."enum__pages_v_blocks_adult_course_day_of_week";
  DROP TYPE "public"."enum__pages_v_blocks_children_course_type";
  DROP TYPE "public"."enum__pages_v_blocks_children_course_day_of_week";
  DROP TYPE "public"."enum__pages_v_version_status";`)
}
