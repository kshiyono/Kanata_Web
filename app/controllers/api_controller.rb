class ApiController < ActionController::API
    protect_from_forgery with: :exception
    helper Sessions
    include SessionsHelper
end
