# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Holiday.create({
  "name" => "New Year's Day",
  "description" => "New Year's Day is the first day of the Gregorian calendar, which is widely used in many countries such as the USA.",
  "date" => "2019-01-01"
  })
Holiday.create({
  "name" => "Valentine's Day",
  "description" => "Valentine's Day is an occasion to celebrate romantic love.",
  "date" => "2019-02-14"
})
Holiday.create({
  "name" => "Mardi Gras",
  "description" => "Mardi Gras is traditionally known as the day prior to Lent but it also serves as a day of celebration.",
  "date" => "2019-03-05"
})
