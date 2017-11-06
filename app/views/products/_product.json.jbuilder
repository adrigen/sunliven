json.extract! product, :id, :name, :price, :wattHours, :created_at, :updated_at
json.url product_url(product, format: :json)
