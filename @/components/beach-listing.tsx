'use client'

import React from 'react'
import { Star, Heart, Share, Umbrella, Sunrise, Sunset, Wind, Droplets, MapPin, ChevronRight, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export function BeachListingComponent() {
  const weatherData = [
    { day: 'Mon', temp: 28, icon: '☀️', description: 'Sunny' },
    { day: 'Tue', temp: 27, icon: '🌤️', description: 'Partly Cloudy' },
    { day: 'Wed', temp: 29, icon: '☀️', description: 'Sunny' },
    { day: 'Thu', temp: 26, icon: '☁️', description: 'Cloudy' },
    { day: 'Fri', temp: 28, icon: '☀️', description: 'Sunny' },
    { day: 'Sat', temp: 27, icon: '🌤️', description: 'Partly Cloudy' },
    { day: 'Sun', temp: 29, icon: '☀️', description: 'Sunny' },
  ]

  const aspectRatings = [
    { aspect: "Cleanliness", rating: 4.6 },
    { aspect: "Facilities", rating: 4.5 },
    { aspect: "Safety", rating: 4.1 },
    { aspect: "Accessibility", rating: 4.5 },
    { aspect: "Natural Beauty", rating: 5.0 },
  ]

  const reviews = [
    { name: "Patricia W Fenster", rating: 5, date: "July 15, 2023", comment: "Had a great day at Malibu Beach! The sand was clean, the water was crystal clear, and the facilities were well-maintained. The lifeguards were attentive, making us feel safe throughout our visit. The natural beauty of the coastline is simply breathtaking. Highly recommend!" },
    { name: "John Smith", rating: 4, date: "June 28, 2023", comment: "Beautiful beach with amazing views. The facilities were good, but it can get crowded during peak hours. The parking situation could be improved, but once you're on the beach, it's paradise. The sunset was unforgettable!" },
    { name: "Emma Johnson", rating: 5, date: "May 3, 2023", comment: "Malibu Beach exceeded all my expectations! The cleanliness of the beach was impressive, and the facilities were top-notch. It's easily accessible, and the natural beauty is unparalleled. A perfect spot for a relaxing day or a fun family outing." },
  ]

  return (
    <div className="bg-white min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold mb-4">Malibu Beach, California</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <Star className="text-yellow-400 fill-current" />
                <span className="ml-1 font-semibold">4.8</span>
              </div>
              <span className="text-gray-500">(2,145 reviews)</span>
              <Button variant="ghost" size="sm" className="flex items-center">
                <Heart className="mr-2" /> Save
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center">
                <Share className="mr-2" /> Share
              </Button>
            </div>

            {/* Photo Gallery */}
            <div className="grid grid-cols-4 gap-2 mb-8">
              <img src="/placeholder.svg?height=300&width=400&text=Malibu Beach" alt="Malibu Beach" className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg" />
              <img src="/placeholder.svg?height=150&width=200&text=Sunset" alt="Sunset" className="w-full h-full object-cover rounded-lg" />
              <img src="/placeholder.svg?height=150&width=200&text=Surfing" alt="Surfing" className="w-full h-full object-cover rounded-lg" />
              <img src="/placeholder.svg?height=150&width=200&text=Pier" alt="Pier" className="w-full h-full object-cover rounded-lg" />
              <img src="/placeholder.svg?height=150&width=200&text=Beachfront" alt="Beachfront" className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* Beach Details */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center">
                <Umbrella className="mr-2 text-teal-600" />
                <div>
                  <div className="font-semibold">Beach Type</div>
                  <div className="text-sm text-gray-500">Sandy</div>
                </div>
              </div>
              <div className="flex items-center">
                <Sunrise className="mr-2 text-teal-600" />
                <div>
                  <div className="font-semibold">Sunrise</div>
                  <div className="text-sm text-gray-500">5:45 AM</div>
                </div>
              </div>
              <div className="flex items-center">
                <Sunset className="mr-2 text-teal-600" />
                <div>
                  <div className="font-semibold">Sunset</div>
                  <div className="text-sm text-gray-500">8:15 PM</div>
                </div>
              </div>
              <div className="flex items-center">
                <Wind className="mr-2 text-teal-600" />
                <div>
                  <div className="font-semibold">Wind</div>
                  <div className="text-sm text-gray-500">5-10 mph</div>
                </div>
              </div>
            </div>

            {/* Address and Map */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2">
                  <p className="text-gray-600 mb-2">
                    <strong>Address:</strong> 23000 Pacific Coast Hwy, Malibu, CA 90265
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>City:</strong> Malibu
                  </p>
                  <p className="text-gray-600">
                    <strong>State:</strong> California
                  </p>
                </div>
                <div className="md:w-1/2 h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26455.82520921518!2d-118.69393962532043!3d34.03600128070745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e81da9f908d63f%3A0x93b72d71b2ea8c5a!2sMalibu%20Beach!5e0!3m2!1sen!2sus!4v1625234567890!5m2!1sen!2sus"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* 7-Day Weather Forecast */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7-Day Weather Forecast</h2>
              <div className="grid grid-cols-7 gap-2">
                {weatherData.map((day, index) => (
                  <Card key={index} className="bg-gradient-to-b from-sky-400 to-sky-600 text-white">
                    <CardContent className="p-4 text-center">
                      <div className="font-semibold">{day.day}</div>
                      <div className="text-4xl my-2">{day.icon}</div>
                      <div className="font-bold">{day.temp}°C</div>
                      <div className="text-xs mt-1">{day.description}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* About Beach */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About Malibu Beach</h2>
              <p className="text-gray-600 mb-4">
                Malibu Beach is a world-renowned coastal paradise located in Southern California. Known for its pristine sandy shores, crystal-clear waters, and stunning sunsets, this beach offers a perfect blend of natural beauty and luxurious ambiance. Visitors can enjoy surfing, sunbathing, beach volleyball, and celebrity spotting, as Malibu is a favorite among Hollywood stars.
              </p>
              <p className="text-gray-600">
                The beach stretches for 21 miles along the Pacific Coast Highway, offering various coves and sections each with its own unique charm. From the famous Surfrider Beach to the secluded El Matador State Beach, Malibu has something for every beach lover.
              </p>
            </div>

            {/* Best Time to Visit */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Best Time to Visit</h2>
              <p className="text-gray-600 mb-4">
                The best time to visit Malibu Beach is from August to October when the weather is warm and the summer crowds have thinned out. During these months, you can expect:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Average temperatures between 68°F to 78°F (20°C to 26°C)</li>
                <li>Less fog compared to early summer months</li>
                <li>Ideal conditions for surfing and other water activities</li>
                <li>Beautiful sunset views</li>
              </ul>
              <p className="text-gray-600">
                However, Malibu Beach is a year-round destination, with each season offering its own unique experiences. Spring brings wildflowers, winter offers dramatic waves for experienced surfers, and summer is perfect for sunbathing and beach parties.
              </p>
            </div>

            {/* Beach Itineraries */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Beach Itineraries</h2>
              <Tabs defaultValue="day1">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="day1">Day Trip</TabsTrigger>
                  <TabsTrigger value="day2">Weekend Getaway</TabsTrigger>
                  <TabsTrigger value="day3">Week-long Adventure</TabsTrigger>
                </TabsList>
                <TabsContent value="day1">
                  <h3 className="font-semibold mb-2">Perfect Day at Malibu Beach</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Start with a sunrise yoga session on the beach</li>
                    <li>Enjoy breakfast at a beachfront café</li>
                    <li>Take a surfing lesson at Surfrider Beach</li>
                    <li>Explore tide pools at Leo Carrillo State Park</li>
                    <li>Have a picnic lunch on the sand</li>
                    <li>Visit the Malibu Pier and do some shopping</li>
                    <li>End the day with a sunset dinner at a oceanfront restaurant</li>
                  </ul>
                </TabsContent>
                <TabsContent value="day2">
                  <h3 className="font-semibold mb-2">Malibu Weekend Getaway</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Day 1: Beach relaxation, surfing, and local cuisine</li>
                    <li>Day 2: Hiking in the Santa Monica Mountains, wine tasting at Malibu Wines</li>
                    <li>Day 3: Visit to the Getty Villa, beach horseback riding</li>
                  </ul>
                </TabsContent>
                <TabsContent value="day3">
                  <h3 className="font-semibold mb-2">Week-long Malibu Adventure</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Day 1-2: Beach activities and relaxation</li>
                    <li>Day 3-4: Explore nearby beaches and coves</li>
                    <li>Day 5: Day trip to Santa Barbara</li>
                    <li>Day 6: Hiking and nature exploration</li>
                    <li>Day 7: Spa day and farewell sunset dinner</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>

            {/* Traveler Photos */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Traveler Photos</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <img key={i} src={`/placeholder.svg?height=150&width=150&text=Photo ${i+1}`} alt={`Traveler Photo ${i+1}`} className="w-full h-40 object-cover rounded-lg" />
                ))}
              </div>
              <Button variant="outline" className="mt-4">View all photos</Button>
            </div>

            {/* Reviews */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Reviews</h2>
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:w-1/3">
                  <div className="flex items-center mb-2">
                    <Star className="w-8 h-8 text-yellow-400 fill-current" />
                    <span className="text-4xl font-bold ml-2">4.5</span>
                  </div>
                  <p className="text-gray-600">25,117 reviews</p>
                </div>
                <div className="md:w-2/3">
                  {aspectRatings.map((item, index) => (
                    <div key={index} className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 w-32">{item.aspect}</span>
                      <Progress value={item.rating * 20} className="w-32 h-2" />
                      <span className="text-sm font-semibold w-8 text-right">{item.rating.toFixed(1)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="All Travelers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Travelers</SelectItem>
                    <SelectItem value="couples">Couples</SelectItem>
                    <SelectItem value="families">Families</SelectItem>
                    <SelectItem value="friends">Friends</SelectItem>
                    <SelectItem value="solo">Solo</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="All Stars" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Stars</SelectItem>
                    <SelectItem value="5">5 Stars</SelectItem>
                    <SelectItem value="4">4 Stars</SelectItem>
                    <SelectItem value="3">3 Stars</SelectItem>
                    <SelectItem value="2">2 Stars</SelectItem>
                    <SelectItem value="1">1 Star</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="relative">
                  <Input type="text" placeholder="Search Reviews" className="pl-10 pr-4 py-2 w-64" />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort: Recommended" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="highest">Highest Rated</SelectItem>
                    <SelectItem value="lowest">Lowest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <img src="/placeholder.svg?height=40&width=40&text=PF" alt={`${review.name}'s avatar`} className="w-10 h-10 rounded-full mr-2" />
                        <div>
                          <div className="font-semibold">{review.name}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star key={starIndex} className={`w-4 h-4 ${starIndex < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Button variant="outline" size="sm" className="mx-1">1</Button>
                <Button variant="outline" size="sm" className="mx-1">2</Button>
                <Button variant="outline" size="sm" className="mx-1">3</Button>
                <Button variant="outline" size="sm" className="mx-1">...</Button>
                <Button variant="outline" size="sm" className="mx-1">8</Button>
                <Button variant="outline" size="sm" className="mx-1">9</Button>
                <Button variant="outline" size="sm" className="mx-1">10</Button>
                <Button variant="outline" size="sm" className="mx-1">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  "Is Malibu Beach good for swimming?",
                  "Are there lifeguards on duty?",
                  "What amenities are available at the beach?",
                  "Is parking available?",
                  "Are dogs allowed on Malibu Beach?"
                ].map((question, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{question}</AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-4">Plan Your Visit</div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="text-teal-600 mr-2" />
                    <span>23000 Pacific Coast Hwy, Malibu, CA 90265</span>
                  </div>
                  <div className="flex items-center">
                    <Droplets className="text-teal-600 mr-2" />
                    <span>Water Temperature: 68°F (20°C)</span>
                  </div>
                </div>
                <Button className="w-full mt-4">Check Nearby Hotels</Button>
                <p className="text-sm text-gray-500 mt-4">Tip: Book in advance during peak summer months</p>
                <div className="space-y-2 text-sm mt-4">
                  <div className="flex justify-between">
                    <span>Beach safety guidelines</span>
                    <ChevronRight className="text-teal-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Local attractions</span>
                    <ChevronRight className="text-teal-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}