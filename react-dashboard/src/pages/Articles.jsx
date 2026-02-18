import React from 'react';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: 'The Impact of Microplastics on Marine Ecosystems',
      summary: 'Exploring how microplastic pollution affects ocean biodiversity and food chains, with latest research findings and potential solutions.',
      image: 'microplastics',
      category: 'Pollution',
      readTime: '5 min read',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Coral Reef Recovery: Success Stories and Challenges',
      summary: 'Examining successful coral reef restoration projects around the world and the challenges that remain in preserving these vital ecosystems.',
      image: 'coral-reef',
      category: 'Marine Health',
      readTime: '7 min read',
      date: '2024-01-12'
    },
    {
      id: 3,
      title: 'Sustainable Fishing Practices for the Future',
      summary: 'How technology and traditional knowledge combine to create sustainable fishing methods that protect both marine life and fishing communities.',
      image: 'sustainable-fishing',
      category: 'Fishing',
      readTime: '6 min read',
      date: '2024-01-10'
    },
    {
      id: 4,
      title: 'Ocean Acidification: The Silent Threat',
      summary: 'Understanding the causes and effects of ocean acidification on marine life and what we can do to mitigate this growing problem.',
      image: 'acidification',
      category: 'Climate',
      readTime: '8 min read',
      date: '2024-01-08'
    },
    {
      id: 5,
      title: 'AI in Ocean Conservation: New Frontiers',
      summary: 'How artificial intelligence and machine learning are revolutionizing ocean monitoring and conservation efforts worldwide.',
      image: 'ai-conservation',
      category: 'Technology',
      readTime: '6 min read',
      date: '2024-01-05'
    },
    {
      id: 6,
      title: 'Protecting Marine Endangered Species',
      summary: 'Current conservation efforts for endangered marine species and the role of monitoring technology in their protection.',
      image: 'endangered-species',
      category: 'Conservation',
      readTime: '7 min read',
      date: '2024-01-03'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Pollution': 'bg-red-100 text-red-800',
      'Marine Health': 'bg-green-100 text-green-800',
      'Fishing': 'bg-blue-100 text-blue-800',
      'Climate': 'bg-yellow-100 text-yellow-800',
      'Technology': 'bg-purple-100 text-purple-800',
      'Conservation': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Pollution':
        return (
          <svg className="h-16 w-16 text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case 'Marine Health':
        return (
          <svg className="h-16 w-16 text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'Fishing':
        return (
          <svg className="h-16 w-16 text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        );
      case 'Climate':
        return (
          <svg className="h-16 w-16 text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      case 'Technology':
        return (
          <svg className="h-16 w-16 text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'Conservation':
        return (
          <svg className="h-16 w-16 text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        return (
          <svg className="h-16 w-16 text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <svg className="h-12 w-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ocean Insights
          </h1>
          <p className="text-lg text-ocean-600 max-w-2xl mx-auto">
            Stay informed with the latest research, insights, and stories about ocean conservation, 
            marine life, and sustainable fishing practices.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-ocean-100"
            >
              {/* Article Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center relative overflow-hidden">
                {getCategoryIcon(article.category)}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-ocean-500">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-ocean-700 transition-colors duration-200">
                  {article.title}
                </h3>

                <p className="text-ocean-600 mb-4 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-ocean-500">
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <button className="text-primary font-medium text-sm hover:text-ocean-700 transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-ocean-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
