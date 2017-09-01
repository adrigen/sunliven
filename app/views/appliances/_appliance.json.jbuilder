json.extract! appliance, :id, :name, :watts, :hours_per_day, :category_id, :created_at, :updated_at
json.url appliance_url(appliance, format: :json)
