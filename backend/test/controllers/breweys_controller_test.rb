require 'test_helper'

class BreweysControllerTest < ActionDispatch::IntegrationTest
  setup do
    @brewey = breweys(:one)
  end

  test "should get index" do
    get breweys_url, as: :json
    assert_response :success
  end

  test "should create brewey" do
    assert_difference('Brewey.count') do
      post breweys_url, params: { brewey: { location: @brewey.location, name: @brewey.name, review: @brewey.review } }, as: :json
    end

    assert_response 201
  end

  test "should show brewey" do
    get brewey_url(@brewey), as: :json
    assert_response :success
  end

  test "should update brewey" do
    patch brewey_url(@brewey), params: { brewey: { location: @brewey.location, name: @brewey.name, review: @brewey.review } }, as: :json
    assert_response 200
  end

  test "should destroy brewey" do
    assert_difference('Brewey.count', -1) do
      delete brewey_url(@brewey), as: :json
    end

    assert_response 204
  end
end
