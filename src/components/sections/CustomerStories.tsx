import React, { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';

const stories = [
  {
    id: 'company1',
    name: 'Company One',
    color: 'bg-lime-500',
    borderColor: 'border-lime-500',
    highlightColor: 'bg-lime-100',
    logo: 'https://images.unsplash.com/photo-1549421263-6064833b071b?w=200&h=50&fit=crop&crop=edges',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: {
      title: 'Revolutionizing Digital Experiences',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    stats: [
      { label: 'Program growing', value: '121', suffix: '%', subtext: 'MoM' },
      { label: 'More than', value: '600', subtext: 'creators enrolled' },
      { label: 'Top performer drove', prefix: '$', value: '19', suffix: 'k', subtext: 'of sales in 72 hours' }
    ],
    quote: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: 'John Smith',
      role: 'Marketing Director'
    }
  },
  {
    id: 'company2',
    name: 'Company Two',
    color: 'bg-blue-500',
    borderColor: 'border-blue-500',
    highlightColor: 'bg-blue-100',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=50&fit=crop&crop=edges',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    content: {
      title: 'Transforming Business Operations',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    },
    stats: [
      { label: 'Programs generating', prefix: '$', value: '2.1', suffix: 'm', subtext: 'run rate' },
      { label: 'Increase of', value: '30', suffix: '%', subtext: 'in referral revenue' },
      { label: 'Generated', value: '4200', subtext: 'cobranded landing pages' }
    ],
    quote: {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: 'Sarah Johnson',
      role: 'VP of Growth'
    }
  },
  {
    id: 'company3',
    name: 'Company Three',
    color: 'bg-emerald-500',
    borderColor: 'border-emerald-500',
    highlightColor: 'bg-emerald-100',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=50&fit=crop&crop=edges',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content: {
      title: 'Empowering Digital Innovation',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'
    },
    stats: [
      { label: 'Lower CAC by', value: '89', suffix: '%', subtext: 'vs Paid Acquisition' },
      { label: 'Generated', prefix: '+', value: '12', suffix: 'k', subtext: 'cobranded landing pages' },
      { label: 'Drove', value: '10', suffix: 'x', subtext: 'daily referrals' }
    ],
    quote: {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      author: 'Michael Brown',
      role: 'Head of Marketing'
    }
  },
  {
    id: 'company4',
    name: 'Company Four',
    color: 'bg-purple-500',
    borderColor: 'border-purple-500',
    highlightColor: 'bg-purple-100',
    logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=50&fit=crop&crop=edges',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    content: {
      title: 'Redefining Customer Experience',
      text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
    },
    stats: [
      { label: 'Enrolled', prefix: '+', value: '9', suffix: 'k', subtext: 'customers' },
      { label: 'Programs generating', prefix: '+$', value: '1', suffix: 'm', subtext: 'run rate' },
      { label: 'Drove a', prefix: '>', value: '20', suffix: '%', subtext: 'increase in conversion' }
    ],
    quote: {
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      author: 'Emily Wilson',
      role: 'Chief Marketing Officer'
    }
  },
  {
    id: 'company5',
    name: 'Company Five',
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    highlightColor: 'bg-orange-100',
    logo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=200&h=50&fit=crop&crop=edges',
    image: 'https://images.unsplash.com/photo-1549421263-6064833b071b?w=600&h=400&fit=crop',
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    content: {
      title: 'Pioneering Future Solutions',
      text: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.'
    },
    stats: [
      { label: 'Drove', value: '1000', suffix: "'s", subtext: 'of net-new subs in first 6 months' },
      { label: 'Generated', prefix: '+', value: '13', suffix: 'k', subtext: 'new customers and creators enrolled' },
      { label: 'Referral AOV increased', prefix: '>', value: '15', suffix: '%', subtext: 'compared to other channels' }
    ],
    quote: {
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
      author: 'David Lee',
      role: 'Director of Growth'
    }
  }
];

export default function CustomerStories() {
  const [activeStory, setActiveStory] = useState(0);

  const getBgColor = (story: typeof stories[0], isActive: boolean) => {
    if (!isActive) return 'bg-gray-700 hover:bg-gray-800';
    return story.color;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">It's all in the numbers</h2>
          <p className="text-4xl font-bold text-gray-900">See it to believe it.</p>
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Navigation - Vertical on desktop */}
          <div className="md:w-[105px] flex-shrink-0">
            <div className="flex flex-col h-full">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  onClick={() => setActiveStory(index)}
                  className={`
                    group h-[200px] flex items-end relative transition-all
                    text-white font-semibold pb-12 px-4
                    ${getBgColor(story, activeStory === index)}
                  `}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-lg">
                      {story.name}
                    </span>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      activeStory === index ? 'rotate-90' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 relative">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === activeStory ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{
                  transform: `translateY(${(index - activeStory) * 33}%)`,
                  height: '750px',
                  width: '1200px'
                }}
              >
                <div className="grid grid-cols-2 gap-8 p-8 h-full">
                  <div className="space-y-8">
                    <div className={`p-4 rounded-xl border-3 ${story.borderColor}`}>
                      <img 
                        src={story.logo} 
                        alt={story.name} 
                        className="h-16 object-contain" 
                      />
                    </div>
                    <p className="text-gray-600 text-lg">
                      {story.description}
                    </p>
                    <div className="p-8 rounded-xl bg-white">
                      <div className="text-gray-800 text-lg space-y-4">
                        <h3 className="text-2xl font-bold mb-6">{story.content.title}</h3>
                        <p className="leading-relaxed">
                          {story.content.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {story.stats.map((stat, statIndex) => (
                        <div 
                          key={statIndex} 
                          className={`p-6 rounded-xl ${story.color}`}
                        >
                          <div className="text-white text-sm">{stat.label}</div>
                          <div className="text-4xl font-bold text-white mt-2">
                            {stat.prefix}{stat.value}{stat.suffix}
                          </div>
                          <div className="text-sm font-medium text-white mt-1">
                            {stat.subtext}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Image Section */}
                    <div className={`rounded-xl border-3 ${story.borderColor} overflow-hidden`}>
                      <img
                        src={story.image}
                        alt="Impact visualization"
                        className="w-full h-[300px] object-cover"
                      />
                    </div>

                    {/* Testimonial */}
                    <div className={`p-8 rounded-xl bg-white border-3 ${story.borderColor}`}>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-medium text-gray-800">
                          What do they think of us?
                        </h3>
                        <Star className="w-6 h-6 text-gray-800" />
                      </div>
                      <blockquote className="text-lg text-gray-600 mb-6">
                        <span className={`inline-block rounded-lg ${story.highlightColor} px-3 py-1`}>
                          "{story.quote.text}"
                        </span>
                      </blockquote>
                      <div>
                        <div className="font-medium text-gray-800">
                          {story.quote.author}
                        </div>
                        <div className="text-gray-500">
                          {story.quote.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}