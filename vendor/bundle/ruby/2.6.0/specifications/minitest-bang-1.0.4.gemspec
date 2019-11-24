# -*- encoding: utf-8 -*-
# stub: minitest-bang 1.0.4 ruby lib

Gem::Specification.new do |s|
  s.name = "minitest-bang".freeze
  s.version = "1.0.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Kyle Stevens".freeze, "Ben Kanouse".freeze, "Rob Jones".freeze]
  s.date = "2015-05-17"
  s.description = "Lets you use let! to immediately execute lets in minitest spec.".freeze
  s.email = "kstevens715@gmail.com".freeze
  s.homepage = "https://github.com/kstevens715/minitest-bang".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.6".freeze
  s.summary = "Provides let! for minitest spec, much like RSpec's.".freeze

  s.installed_by_version = "3.0.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake>.freeze, ["~> 10"])
      s.add_development_dependency(%q<coveralls>.freeze, ["~> 0.7"])
      s.add_runtime_dependency(%q<minitest>.freeze, [">= 4.7.5"])
    else
      s.add_dependency(%q<rake>.freeze, ["~> 10"])
      s.add_dependency(%q<coveralls>.freeze, ["~> 0.7"])
      s.add_dependency(%q<minitest>.freeze, [">= 4.7.5"])
    end
  else
    s.add_dependency(%q<rake>.freeze, ["~> 10"])
    s.add_dependency(%q<coveralls>.freeze, ["~> 0.7"])
    s.add_dependency(%q<minitest>.freeze, [">= 4.7.5"])
  end
end
