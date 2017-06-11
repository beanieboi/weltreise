require "net/http"
require "uri"
require "json"

cities = [
  "Berlin, Germany",
  "Lisbon, Portugal",
  "Bogota, Columbia",
  "Lima, Peru",
  "Santiago, Chile",
  "Buenos Aires, Argentina",
  "Auckland, New Zealand",
  "Hongkong, China",
  "Tokyo, Japan",
  "Ho-Chi Min, Vietnam",
  "Kuala Lumpur, Malaysia",
  "Bangalor, India",
  "Amman, Jordan",
  "Jakarta, Indonesia",
  "vila franco do campo, portgual"
]

cities.each do |city|
  uri = URI.parse("https://maps.googleapis.com/maps/api/geocode/json?address=#{city}&key=AIzaSyCGc-ihKE3fkEMCgFdsRDWGSloLC1DXz2g")
  response = Net::HTTP.get_response(uri)
  json = JSON.parse(response.body)

  coordinates = json["results"].first["geometry"]["location"]
  puts "City: #{city} lat/lng: #{coordinates['lat'].round(6)}, #{coordinates['lng'].round(6)}"
end
