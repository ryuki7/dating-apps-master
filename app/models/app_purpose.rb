class AppPurpose < ApplicationRecord
  belongs_to :app
  belongs_to :purpose

  def self.apps_get(app_purposes)
    apps = []
    app_purposes.each do |app_purpose|
      apps.push(app_purpose.app)
    end
    apps
  end
end
