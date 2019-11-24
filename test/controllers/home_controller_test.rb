require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest

  def setup
    @base_title = "Kanata ToDo管理ツール"
  end

  test "should get root" do
    get root_url
    assert_response :success
  end

  test "should get index" do
    get home_index_url
    assert_response :success
    assert_select "title", "Home | #{@base_title}"
  end

end
