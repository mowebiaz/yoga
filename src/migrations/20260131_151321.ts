import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_adult_course" ALTER COLUMN "day_of_week" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_adult_course_day_of_week";
  CREATE TYPE "public"."enum_pages_blocks_adult_course_day_of_week" AS ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche');
  ALTER TABLE "pages_blocks_adult_course" ALTER COLUMN "day_of_week" SET DATA TYPE "public"."enum_pages_blocks_adult_course_day_of_week" USING "day_of_week"::"public"."enum_pages_blocks_adult_course_day_of_week";
  ALTER TABLE "pages_blocks_children_course" ALTER COLUMN "day_of_week" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_children_course_day_of_week";
  CREATE TYPE "public"."enum_pages_blocks_children_course_day_of_week" AS ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche');
  ALTER TABLE "pages_blocks_children_course" ALTER COLUMN "day_of_week" SET DATA TYPE "public"."enum_pages_blocks_children_course_day_of_week" USING "day_of_week"::"public"."enum_pages_blocks_children_course_day_of_week";
  ALTER TABLE "_pages_v_blocks_adult_course" ALTER COLUMN "day_of_week" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_adult_course_day_of_week";
  CREATE TYPE "public"."enum__pages_v_blocks_adult_course_day_of_week" AS ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche');
  ALTER TABLE "_pages_v_blocks_adult_course" ALTER COLUMN "day_of_week" SET DATA TYPE "public"."enum__pages_v_blocks_adult_course_day_of_week" USING "day_of_week"::"public"."enum__pages_v_blocks_adult_course_day_of_week";
  ALTER TABLE "_pages_v_blocks_children_course" ALTER COLUMN "day_of_week" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_children_course_day_of_week";
  CREATE TYPE "public"."enum__pages_v_blocks_children_course_day_of_week" AS ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche');
  ALTER TABLE "_pages_v_blocks_children_course" ALTER COLUMN "day_of_week" SET DATA TYPE "public"."enum__pages_v_blocks_children_course_day_of_week" USING "day_of_week"::"public"."enum__pages_v_blocks_children_course_day_of_week";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_adult_course" ALTER COLUMN "day_of_week" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_adult_course_day_of_week";
  CREATE TYPE "public"."enum_pages_blocks_adult_course_day_of_week" AS ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vencredi', 'samedi', 'dimanche');
  ALTER TABLE "pages_blocks_adult_course" ALTER COLUMN "day_of_week" SET DATA TYPE "public"."enum_pages_blocks_adult_course_day_of_week" USING "day_of_week"::"public"."enum_pages_blocks_adult_course_day_of_week";
  ALTER TABLE "pages_blocks_children_course" ALTER COLUMN "day_of_week" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_children_course_day_of_week";
  CREATE TYPE "public"."enum_pages_blocks_children_course_day_of_week" AS ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vencredi', 'samedi', 'dimanche');
  ALTER TABLE "pages_blocks_children_course" ALTER COLUMN "day_of_week" SET DATA TYPE "public"."enum_pages_blocks_children_course_day_of_week" USING "day_of_week"::"public"."enum_pages_blocks_children_course_day_of_week";
  ALTER TABLE "_pages_v_blocks_adult_course" ALTER COLUMN "day_of_week" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_adult_course_day_of_week";
  CREATE TYPE "public"."enum__pages_v_blocks_adult_course_day_of_week" AS ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vencredi', 'samedi', 'dimanche');
  ALTER TABLE "_pages_v_blocks_adult_course" ALTER COLUMN "day_of_week" SET DATA TYPE "public"."enum__pages_v_blocks_adult_course_day_of_week" USING "day_of_week"::"public"."enum__pages_v_blocks_adult_course_day_of_week";
  ALTER TABLE "_pages_v_blocks_children_course" ALTER COLUMN "day_of_week" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_children_course_day_of_week";
  CREATE TYPE "public"."enum__pages_v_blocks_children_course_day_of_week" AS ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vencredi', 'samedi', 'dimanche');
  ALTER TABLE "_pages_v_blocks_children_course" ALTER COLUMN "day_of_week" SET DATA TYPE "public"."enum__pages_v_blocks_children_course_day_of_week" USING "day_of_week"::"public"."enum__pages_v_blocks_children_course_day_of_week";`)
}
