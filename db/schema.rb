# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_14_085441) do

  create_table "ad_address", id: :integer, default: 0, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb3", force: :cascade do |t|
    t.integer "ken_id"
    t.integer "city_id"
    t.integer "town_id"
    t.string "zip", limit: 8
    t.boolean "office_flg"
    t.boolean "delete_flg"
    t.string "ken_name", limit: 8
    t.string "ken_furi", limit: 8
    t.string "city_name", limit: 24
    t.string "city_furi", limit: 24
    t.string "town_name", limit: 32
    t.string "town_furi", limit: 32
    t.string "town_memo", limit: 16
    t.string "kyoto_street", limit: 32
    t.string "block_name", limit: 64
    t.string "block_furi", limit: 64
    t.string "memo"
    t.string "office_name"
    t.string "office_furi"
    t.string "office_address"
    t.text "new_id"
  end

  create_table "answers", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "description", null: false
    t.bigint "question_id", null: false
    t.string "allocation", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["question_id"], name: "index_answers_on_question_id"
  end

  create_table "app_diagnostics", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "app_id", null: false
    t.integer "ranking"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["app_id"], name: "index_app_diagnostics_on_app_id"
    t.index ["user_id"], name: "index_app_diagnostics_on_user_id"
  end

  create_table "app_purposes", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "app_id", null: false
    t.bigint "purpose_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["app_id"], name: "index_app_purposes_on_app_id"
    t.index ["purpose_id"], name: "index_app_purposes_on_purpose_id"
  end

  create_table "appearances", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.string "image", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "apps", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.text "strategy_description", null: false
    t.string "icon_image", null: false
    t.string "diagnostic_allocation", null: false
    t.text "diagnostic_description", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_apps_on_name", unique: true
    t.index ["diagnostic_allocation"], name: "index_apps_on_diagnostic_allocation", unique: true
  end

  create_table "date_plan_places", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "date_plan_id", null: false
    t.bigint "place_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["date_plan_id"], name: "index_date_plan_places_on_date_plan_id"
    t.index ["place_id"], name: "index_date_plan_places_on_place_id"
  end

  create_table "date_plans", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.string "period", null: false
    t.text "detail_information", null: false
    t.text "description", null: false
    t.integer "date_count_level", null: false
    t.integer "popular_rating_level", null: false
    t.bigint "purpose_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["purpose_id"], name: "index_date_plans_on_purpose_id"
  end

  create_table "date_schedule_tasks", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "task_id", null: false
    t.bigint "date_schedule_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "result", default: 0, null: false
    t.index ["date_schedule_id"], name: "index_date_schedule_tasks_on_date_schedule_id"
    t.index ["task_id"], name: "index_date_schedule_tasks_on_task_id"
  end

  create_table "date_schedules", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "appointment", null: false
    t.bigint "date_plan_id", null: false
    t.bigint "target_id", null: false
    t.bigint "user_id", null: false
    t.integer "report_confirmation", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["date_plan_id"], name: "index_date_schedules_on_date_plan_id"
    t.index ["target_id"], name: "index_date_schedules_on_target_id"
    t.index ["user_id"], name: "index_date_schedules_on_user_id"
  end

  create_table "jobs", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.text "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "personalities", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "places", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_places_on_name", unique: true
  end

  create_table "purposes", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "questions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "description", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "steps", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.text "description_point", null: false
    t.bigint "purpose_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["purpose_id"], name: "index_steps_on_purpose_id"
  end

  create_table "targets", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "app_id", null: false
    t.bigint "appearance_id", null: false
    t.string "name", limit: 4, null: false
    t.integer "age"
    t.bigint "purpose_id", null: false
    t.bigint "job_id", null: false
    t.integer "height"
    t.text "hobby"
    t.string "prefecture"
    t.string "city"
    t.bigint "personality_id", null: false
    t.string "single_history"
    t.text "favorite_food"
    t.bigint "user_id", null: false
    t.integer "favorability_rating", default: 0, null: false
    t.integer "progress_rating", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["app_id"], name: "index_targets_on_app_id"
    t.index ["appearance_id"], name: "index_targets_on_appearance_id"
    t.index ["job_id"], name: "index_targets_on_job_id"
    t.index ["personality_id"], name: "index_targets_on_personality_id"
    t.index ["purpose_id"], name: "index_targets_on_purpose_id"
    t.index ["user_id"], name: "index_targets_on_user_id"
  end

  create_table "tasks", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.integer "point", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_tasks_on_name", unique: true
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.string "line_id", null: false
    t.integer "role", default: 0, null: false
    t.integer "popular_rating", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["line_id"], name: "index_users_on_line_id", unique: true
  end

  add_foreign_key "answers", "questions"
  add_foreign_key "app_diagnostics", "apps"
  add_foreign_key "app_diagnostics", "users"
  add_foreign_key "app_purposes", "apps"
  add_foreign_key "app_purposes", "purposes"
  add_foreign_key "date_plan_places", "date_plans"
  add_foreign_key "date_plan_places", "places"
  add_foreign_key "date_plans", "purposes"
  add_foreign_key "date_schedule_tasks", "date_schedules"
  add_foreign_key "date_schedule_tasks", "tasks"
  add_foreign_key "date_schedules", "date_plans"
  add_foreign_key "date_schedules", "targets"
  add_foreign_key "date_schedules", "users"
  add_foreign_key "steps", "purposes"
  add_foreign_key "targets", "appearances"
  add_foreign_key "targets", "apps"
  add_foreign_key "targets", "jobs"
  add_foreign_key "targets", "personalities"
  add_foreign_key "targets", "purposes"
  add_foreign_key "targets", "users"
end
