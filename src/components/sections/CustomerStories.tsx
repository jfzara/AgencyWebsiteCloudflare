import React, { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';

const stories = [
  {
    id: 'graza',
    name: 'Graza',
    color: 'green',
    logo: 'https://cdn.prod.website-files.com/633dd95841f93492e857d508/6645402c89c108bc47fef740_graza-card-logo.svg',
    description: 'Graza leverages our platform for their creator, affiliate and referral programs.',
    stats: [
      { label: 'Program growing', value: '121', suffix: '%', subtext: 'MoM' },
      { label: 'More than', value: '600', subtext: 'creators enrolled' },
      { label: 'Top performer drove', prefix: '$', value: '19', suffix: 'k', subtext: 'of sales in 72 hours' }
    ],
    quote: {
      text: "As a brand seeking seamless affiliate, influencer, and referral programs, this is the solution... I've seen exceptional results like a recent co-branded landing page driving +4x ROI.",
      author: 'Kendall Dickieson',
      role: 'Head of Social & Influencer, Graza'
    },
    image: 'https://cdn.prod.website-files.com/633dd95841f93492e857d508/6645402c9606fd068717eed0_graza-card-image.webp',
    mobileImage: 'https://cdn.prod.website-files.com/633dd95841f93492e857d508/66454e5e85dd310c5ed1e727_graza-card-mobiles.webp'
  }
];

export default function CustomerStories() {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Navigation */}
          <div className="flex border-b border-gray-200">
            {stories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => setActiveStory(index)}
                className={`flex-1 py-6 px-8 text-left transition-colors relative ${
                  activeStory === index ? 'bg-gray-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-medium ${
                    activeStory === index ? 'text-green-600' : 'text-gray-900'
                  }`}>
                    {story.name}
                  </span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeStory === index ? 'rotate-90 text-green-600' : 'text-gray-400'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="space-y-8">
              <img src={stories[activeStory].logo} alt={stories[activeStory].name} className="h-12" />
              <p className="text-gray-600 text-lg">{stories[activeStory].description}</p>
              <img src={stories[activeStory].image} alt="" className="rounded-lg shadow-lg" />
            </div>

            <div className="space-y-12">
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {stories[activeStory].stats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-sm text-gray-600">{stat.label}</div>
                    <div className="text-4xl font-bold text-gray-900 mt-2">
                      {stat.prefix}{stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm font-medium text-gray-900 mt-1">{stat.subtext}</div>
                  </div>
                ))}
              </div>

              {/* Mobile Preview */}
              <div className="relative h-96">
                <img 
                  src={stories[activeStory].mobileImage} 
                  alt="Mobile preview" 
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium text-gray-900">What do they think of us?</h3>
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <blockquote className="text-lg text-gray-600 mb-6">
                  "{stories[activeStory].quote.text}"
                </blockquote>
                <div>
                  <div className="font-medium text-gray-900">{stories[activeStory].quote.author}</div>
                  <div className="text-gray-600">{stories[activeStory].quote.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}