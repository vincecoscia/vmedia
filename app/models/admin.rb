class Admin < ActiveRecord::Base
  devise :database_authenticatable, :trackable, :timeoutable, :lockable

  def as_json(options={})
  {
    id: id
  }
  end
  
end