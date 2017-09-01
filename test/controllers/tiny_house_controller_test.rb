require 'test_helper'

class TinyHouseControllerTest < ActionController::TestCase
  test "should get usage" do
    get :usage
    assert_response :success
  end

end
