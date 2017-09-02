class TinyHouseController < ApplicationController
  def usage
    @appliances = Appliance.all
  end
end
