class TinyHouseController < ApplicationController
  def usage
    @appliances = Appliance.all
    @products = Product.all.sort_by{:wattHours} #may not be used any more
    gon.products = Product.all.sort_by{:wattHours}

  end
end
