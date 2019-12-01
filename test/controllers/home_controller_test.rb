require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest

  def setup
    @base_title = "Kanata ToDo管理ツール"
  end

  test "should get root" do
    get root_url
    assert_response :success
  end
end
