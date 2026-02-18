import React, { useState } from 'react';

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'The Silent Invasion: Microplastics Are Choking Our Oceans',
      summary: 'Scientists have discovered microplastics in every corner of our oceans—from the deepest trenches to the most remote beaches. Here\'s what this means for marine life and our own future.',
      images: [
        'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1596496180736-db2922097814?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=400&fit=crop'
      ],
      category: 'Pollution',
      readTime: '5 min read',
      date: '2024-01-15',
      author: 'Dr. Sarah Chen',
      content: `
        <p class="lead">It started with a single water bottle. Now, there are <strong>5.25 trillion pieces</strong> of plastic floating in our oceans. The worst part? Most of them are so small we can't even see them.</p>
        
        <hr class="my-8 border-gray-200">
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">What Are We Really Talking About?</h2>
        
        <p>Imagine a piece of plastic smaller than a sesame seed. Now imagine millions of them. That's microplastics—tiny plastic particles under 5mm that have become the most pervasive pollutant in marine history.</p>
        
        <blockquote class="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-600">
          "We found microplastics in every single sample we took—from the surface to 1,000 meters deep. There's nowhere left to hide." — Dr. Sarah Chen, Marine Biologist
        </blockquote>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Hidden Sources</h3>
        
        <p>Most people think microplastics come from breaking down larger plastic items. But the truth is more disturbing:</p>
        
        <ul class="list-disc pl-6 my-4 space-y-2">
          <li><strong>Beauty products:</strong> Those tiny beads in your face wash? They're plastic.</li>
          <li><strong>Synthetic clothes:</strong> Every wash releases thousands of plastic fibers.</li>
          <li><strong>Tire dust:</strong> Cars shed microscopic plastic particles with every rotation.</li>
          <li><strong>Paint flakes:</strong> Buildings and ships constantly shed plastic paint particles.</li>
        </ul>
        
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <p class="text-blue-800"><strong>Did you know?</strong> The average person consumes about 50,000 microplastic particles per year—that's about a credit card's worth of plastic weekly.</p>
        </div>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Marine Life Crisis</h3>
        
        <p>For marine animals, microplastics are a death sentence. Here's how:</p>
        
        <ol class="list-decimal pl-6 my-4 space-y-2">
          <li class="font-semibold">Physical Damage: Sharp particles tear through digestive systems</li>
          <li class="font-semibold">False Fullness: Animals starve with stomachs full of plastic</li>
          <li class="font-semibold">Chemical Poisoning: Plastics leach toxic chemicals into tissues</li>
          <li class="font-semibold">Reproductive Failure: Plastic chemicals disrupt hormones and reproduction</li>
        </ol>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">Is There Hope?</h2>
        
        <p>The good news? We're not helpless. Scientists, innovators, and everyday people are fighting back with remarkable solutions:</p>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Innovation Wave</h3>
        
        <p>Meet the game-changers:</p>
        
        <ul class="list-none my-4 space-y-3">
          <li class="flex items-start">
            <span class="text-green-500 mr-2">✓</span>
            <div>
              <strong>Plastic-eating bacteria:</strong> Scientists discovered microbes that can digest PET plastic.
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 mr-2">✓</span>
            <div>
              <strong>Ocean cleanup arrays:</strong> Massive floating systems are already removing tons of plastic.
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 mr-2">✓</span>
            <div>
              <strong>Biodegradable alternatives:</strong> Mushroom-based packaging and seaweed plastics are hitting the market.
            </div>
          </li>
        </ul>
        
        <hr class="my-8 border-gray-200">
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">What You Can Do Right Now</h3>
        
        <p>Start small. Think big. Here's your action plan:</p>
        
        <div class="bg-gray-50 rounded-lg p-6 my-6">
          <ol class="list-decimal pl-6 space-y-3">
            <li><strong>Choose natural fibers:</strong> Cotton, wool, and linen over synthetic fabrics</li>
            <li><strong>Filter your water:</strong> Simple filters can remove most microplastics</li>
            <li><strong>Support plastic-free brands:</strong> Your wallet is your voice</li>
            <li><strong>Join beach cleanups:</strong> Every piece of plastic removed matters</li>
          </ol>
        </div>
        
        <p class="text-gray-600 italic mt-8">The ocean doesn't need us. But we need the ocean. It's time to choose which side of history we want to be on.</p>
      `
    },
    {
      id: 2,
      title: 'Coral Reefs: The Underwater Cities Fighting for Survival',
      summary: 'They\'re called the rainforests of the sea for good reason. But climate change, pollution, and human activity are pushing these vibrant ecosystems to the brink. Can we save them before it\'s too late?',
      images: [
        'https://images.unsplash.com/photo-1546502609-f1d526a9d5e4?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1540206395-68808572332f?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1516483632553-0fccb1385c48?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1549410326-34bf3b352a9a?w=800&h=400&fit=crop'
      ],
      category: 'Marine Health',
      readTime: '7 min read',
      date: '2024-01-12',
      author: 'Michael Rodriguez',
      content: `
        <p class="lead">Imagine a city that covers less than 1% of the planet but houses 25% of all marine life. That's coral reefs—and they're dying at an unprecedented rate.</p>
        
        <hr class="my-8 border-gray-200">
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">The Living Architecture</h2>
        
        <p>Coral reefs aren't just rocks. They're living, breathing cities built by tiny animals called coral polyps. Each polyp is smaller than a pencil eraser, but together they create structures visible from space.</p>
        
        <blockquote class="border-l-4 border-cyan-500 pl-4 my-6 italic text-gray-600">
          "A single coral reef can support more species than an entire rainforest. We're losing entire ecosystems before we've even discovered what's in them." — Marine Biologist
        </blockquote>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Perfect Storm of Destruction</h3>
        
        <p>What's killing the reefs? It's not one thing—it's everything:</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-6">
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-bold text-red-800 mb-2">🌡️ Climate Change</h4>
            <p class="text-red-700">Ocean warming causes coral bleaching—essentially cooking the reefs alive.</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg">
            <h4 class="font-bold text-orange-800 mb-2">🧪 Ocean Acidification</h4>
            <p class="text-orange-700">CO2 absorption makes it impossible for corals to build their skeletons.</p>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg">
            <h4 class="font-bold text-yellow-800 mb-2">🏭 Pollution</h4>
            <p class="text-yellow-700">Chemicals, plastics, and agricultural runoff poison reef systems.</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-800 mb-2">🎣 Overfishing</h4>
            <p class="text-purple-700">Removing key species disrupts the delicate reef ecosystem balance.</p>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">The Hope Stories</h2>
        
        <p>Amidst the devastation, there are bright spots—reefs that are fighting back and recovering against all odds.</p>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Australia's Great Barrier Reef</h3>
        
        <p>Scientists are using "coral gardening"—growing baby corals in underwater nurseries and transplanting them to damaged areas. The results? <strong>85% survival rate</strong> in some regions.</p>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Caribbean Comeback</h3>
        
        <p>Marine protected areas have shown remarkable recovery. In just 10 years, some Caribbean reefs have regrown <strong>40%</strong> of their lost coral cover.</p>
        
        <div class="bg-green-50 border-l-4 border-green-400 p-4 my-6">
          <p class="text-green-800"><strong>Success Story:</strong> The coral reef in Palau has fully recovered from bleaching events thanks to strict protection and local community involvement.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">The Technology Revolution</h2>
        
        <p>We're fighting back with cutting-edge science:</p>
        
        <ul class="list-none my-4 space-y-3">
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">🔬</span>
            <div>
              <strong>Super Corals:</strong> Scientists are breeding heat-resistant coral species that can survive warming oceans.
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">🤖</span>
            <div>
              <strong>AI Monitoring:</strong> Artificial intelligence tracks reef health in real-time, spotting problems before they become catastrophic.
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">⚡</span>
            <div>
              <strong>3D Printing:</strong> Artificial reef structures provide new homes for marine life.
            </div>
          </li>
        </ul>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Your Role in the Reef Revolution</h3>
        
        <p>You don't need to be a marine biologist to make a difference:</p>
        
        <div class="bg-blue-50 rounded-lg p-6 my-6">
          <ol class="list-decimal pl-6 space-y-3">
            <li><strong>Choose reef-safe sunscreen:</strong> Avoid oxybenzone and octinoxate</li>
            <li><strong>Support sustainable tourism:</strong> Your vacation choices matter</li>
            <li><strong>Reduce your carbon footprint:</strong> Climate change is the biggest threat</li>
            <li><strong>Support reef conservation organizations:</strong> They need your help</li>
          </ol>
        </div>
        
        <p class="text-gray-600 italic mt-8">Coral reefs have survived for 500 million years. They're not going down without a fight—and neither should we.</p>
      `
    },
    {
      id: 3,
      title: 'The Future of Fish: How Technology Is Saving Our Seas',
      summary: 'From AI-powered fishing boats to blockchain traceability, innovation is transforming how we catch, track, and consume seafood. Can technology solve the overfishing crisis before it\'s too late?',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1520975915640-2860c8199261?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1549410326-34bf3b352a9a?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop'
      ],
      category: 'Fishing',
      readTime: '6 min read',
      date: '2024-01-10',
      author: 'James Wilson',
      content: `
        <p class="lead">Every year, we catch <strong>2.7 trillion fish</strong> from the oceans. That's 3.4 billion fish every single hour. At this rate, we're heading toward ocean collapse by 2048. But technology might just save us.</p>
        
        <hr class="my-8 border-gray-200">
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">The Numbers Don't Lie</h2>
        
        <p>Let's be blunt: we're fishing our oceans to death. The statistics are staggering:</p>
        
        <div class="bg-red-50 border-l-4 border-red-400 p-4 my-6">
          <ul class="space-y-2 text-red-800">
            <li><strong>34%</strong> of global fish stocks are overfished</li>
            <li><strong>60%</strong> of fish species are fully exploited</li>
            <li><strong>90%</strong> of large predatory fish have disappeared since 1950</li>
            <li><strong>3 billion</strong> people depend on fish for protein</li>
          </ul>
        </div>
        
        <blockquote class="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-600">
          "We're the last generation that can fix this. After us, it's too late." — Dr. Daniel Pauly, Fisheries Scientist
        </blockquote>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Why Traditional Fishing Is Failing</h3>
        
        <p>The problem isn't just that we're catching too many fish. It's how we're catching them:</p>
        
        <ul class="list-disc pl-6 my-4 space-y-2">
          <li><strong>Bycatch:</strong> For every 1 pound of targeted fish, 5 pounds of other marine life die</li>
          <li><strong>Habitat destruction:</strong> Bottom trawling destroys ancient seabed ecosystems</li>
          <li><strong>Illegal fishing:</strong> 20% of global catch comes from illegal operations</li>
          <li><strong>Ghost gear:</strong> Abandoned fishing gear continues killing marine life for decades</li>
        </ul>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">The Tech Revolution Begins</h2>
        
        <p>But here's where it gets interesting. A wave of innovation is transforming fishing from a destructive industry into a sustainable one.</p>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Smart Fishing: AI Meets the Ocean</h3>
        
        <p>Modern fishing boats are becoming floating laboratories:</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Precision Targeting</h4>
            <p class="text-blue-700">AI systems identify specific fish species, reducing bycatch by 90%</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-bold text-green-800 mb-2">📊 Real-time Monitoring</h4>
            <p class="text-green-700">Sensors track everything from water temperature to fish populations</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-800 mb-2">🛰️ Satellite Surveillance</h4>
            <p class="text-purple-700">Global monitoring catches illegal fishing in real-time</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg">
            <h4 class="font-bold text-orange-800 mb-2">🤖 Autonomous Systems</h4>
            <p class="text-orange-700">Robot fishing boats can fish sustainably without human error</p>
          </div>
        </div>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">From Ocean to Plate: Full Transparency</h3>
        
        <p>Blockchain technology is creating the world's most transparent food supply chain:</p>
        
        <ul class="list-none my-4 space-y-3">
          <li class="flex items-start">
            <span class="text-green-500 mr-2">✓</span>
            <div>
              <strong>Every fish gets a digital passport:</strong> From catch to consumer, every step is recorded.
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 mr-2">✓</span>
            <div>
              <strong>Instant verification:</strong> Scan a QR code and see exactly where your fish came from.
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 mr-2">✓</span>
            <div>
              <strong>Fraud prevention:</strong> No more mislabeled fish or illegal catch in restaurants.
            </div>
          </li>
        </ul>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">The New Fishing Economy</h2>
        
        <p>Sustainable fishing isn't just good for the planet—it's good business:</p>
        
        <div class="bg-green-50 border-l-4 border-green-400 p-4 my-6">
          <p class="text-green-800"><strong>Market Impact:</strong> Sustainable seafood sales have grown 400% in the last decade. Premium prices for certified sustainable fish are changing the economics of fishing.</p>
        </div>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Success Stories That Inspire</h3>
        
        <p>Real-world examples show this is working:</p>
        
        <blockquote class="border-l-4 border-green-500 pl-4 my-6 italic text-gray-600">
          "Our sustainable fishing cooperative increased income by 45% while reducing catch by 30%. We're catching less but earning more." — Japanese Fishing Cooperative
        </blockquote>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">What You Can Do</h3>
        
        <p>Your choices drive this revolution:</p>
        
        <div class="bg-gray-50 rounded-lg p-6 my-6">
          <ol class="list-decimal pl-6 space-y-3">
            <li><strong>Choose certified sustainable seafood:</strong> Look for MSC and ASC labels</li>
            <li><strong>Ask questions:</strong> Where did this fish come from? How was it caught?</li>
            <li><strong>Try alternative species:</strong> Give unpopular fish a chance</li>
            <li><strong>Support tech-forward fisheries:</strong> Your money funds innovation</li>
          </ol>
        </div>
        
        <p class="text-gray-600 italic mt-8">The ocean's future isn't written yet. Technology gives us the tools—now we need the will to use them wisely.</p>
      `
    },
    {
      id: 4,
      title: 'Ocean Acidification: The Invisible Crisis Beneath the Waves',
      summary: 'While we focus on climate change above water, a silent emergency is unfolding below. The ocean is becoming more acidic, threatening everything from tiny plankton to entire marine ecosystems.',
      images: [
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1549410326-34bf3b352a9a?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop'
      ],
      category: 'Climate',
      readTime: '8 min read',
      date: '2024-01-08',
      author: 'Dr. Emma Thompson',
      content: `
        <p class="lead">The ocean has absorbed <strong>30%</strong> of the CO2 we've ever produced. It's saved us from worse climate change, but the cost is staggering: our seas are turning to acid.</p>
        
        <hr class="my-8 border-gray-200">
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">The Chemistry That's Changing Everything</h2>
        
        <p>Here's the scary part: ocean chemistry doesn't change. It hasn't changed in millions of years—until now.</p>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p class="text-yellow-800"><strong>The pH Shift:</strong> Ocean surface waters have become 30% more acidic since the Industrial Revolution. This is the fastest change in ocean chemistry in 300 million years.</p>
        </div>
        
        <blockquote class="border-l-4 border-orange-500 pl-4 my-6 italic text-gray-600">
          "We're conducting the largest chemistry experiment in Earth's history, and we're doing it blind." — Oceanographer
        </blockquote>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">How CO2 Becomes Ocean Acid</h3>
        
        <p>It's a simple but devastating chemical reaction:</p>
        
        <ol class="list-decimal pl-6 my-4 space-y-2">
          <li class="font-semibold">CO2 dissolves in seawater</li>
          <li class="font-semibold">Forms carbonic acid (H2CO3)</li>
          <li class="font-semibold">Releases hydrogen ions</li>
          <li class="font-semibold">Lowers ocean pH (makes it more acidic)</li>
          <li class="font-semibold">Reduces carbonate ions (the building blocks of shells)</li>
        </ol>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">The Victims of Acidification</h2>
        
        <p>Some marine life is literally dissolving:</p>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Shell-Builders' Nightmare</h3>
        
        <p>Imagine trying to build a house with crumbling bricks. That's what ocean acidification does to shell-building creatures:</p>
        
        <div class="grid md:grid-cols-3 gap-4 my-6">
          <div class="bg-red-50 p-4 rounded-lg text-center">
            <div class="text-3xl mb-2">🦪</div>
            <h4 class="font-bold text-red-800">Oysters & Clams</h4>
            <p class="text-red-700 text-sm">Shells become thin and brittle</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg text-center">
            <div class="text-3xl mb-2">🐚</div>
            <h4 class="font-bold text-orange-800">Sea Snails</h4>
            <p class="text-orange-700 text-sm">Shells literally dissolve</p>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg text-center">
            <div class="text-3xl mb-2">🦐</div>
            <h4 class="font-bold text-yellow-800">Crustaceans</h4>
            <p class="text-yellow-700 text-sm">Hard to molt and grow</p>
          </div>
        </div>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Coral Crisis</h3>
        
        <p>Coral reefs are built on calcium carbonate. Acidification makes it impossible for them to grow—and eventually, they start to dissolve.</p>
        
        <div class="bg-red-50 border-l-4 border-red-400 p-4 my-6">
          <p class="text-red-800"><strong>Tipping Point:</strong> At current rates, most coral reefs will stop growing by 2050. By 2100, many will start dissolving.</p>
        </div>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Invisible Foundation</h3>
        
        <p>Even tiny creatures matter. Plankton and pteropods (sea butterflies) form the base of the marine food web. They're also the most vulnerable to acidification.</p>
        
        <blockquote class="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-600">
          "If the plankton disappear, everything disappears. We're talking about the collapse of the entire marine food web." — Marine Biologist
        </blockquote>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">The Ripple Effects</h2>
        
        <p>This isn't just an ocean problem—it's a human problem:</p>
        
        <ul class="list-disc pl-6 my-4 space-y-2">
          <li><strong>Food security:</strong> 3 billion people depend on seafood for protein</li>
          <li><strong>Economic collapse:</strong> Global fisheries worth $240 billion are at risk</li>
          <li><strong>Tourism destruction:</strong> Dead reefs mean no diving tourism</li>
          <li><strong>Coastal protection:</strong> Dissolving reefs leave coastlines vulnerable to storms</li>
        </ul>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">The Solutions We Have</h2>
        
        <p>The problem is massive, but solutions exist:</p>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Big Picture: Cut CO2</h3>
        
        <p>There's no silver bullet. We have to stop the problem at its source:</p>
        
        <div class="bg-green-50 rounded-lg p-6 my-6">
          <ol class="list-decimal pl-6 space-y-3">
            <li><strong>Renewable energy:</strong> Replace fossil fuels with clean power</li>
            <li><strong>Carbon capture:</strong> Remove CO2 from the atmosphere</li>
            <li><strong>Energy efficiency:</strong> Use less energy to do more</li>
            <li><strong>Nature-based solutions:</strong> Protect forests and wetlands that absorb CO2</li>
          </ol>
        </div>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Local Protection Strategies</h3>
        
        <p>While we work on global solutions, local actions help:</p>
        
        <ul class="list-none my-4 space-y-3">
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">🛡️</span>
            <div>
              <strong>Marine protected areas:</strong> Healthy ecosystems are more resilient to acidification.
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">🌱</span>
            <div>
              <strong>Seagrass restoration:</strong> Seagrasses absorb CO2 and raise local pH.
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">🔬</span>
            <div>
              <strong>Selective breeding:</strong> Developing acid-resistant coral and shellfish species.
            </div>
          </li>
        </ul>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Your Role in the Solution</h3>
        
        <p>Individual actions matter more than ever:</p>
        
        <div class="bg-gray-50 rounded-lg p-6 my-6">
          <ol class="list-decimal pl-6 space-y-3">
            <li><strong>Reduce your carbon footprint:</strong> This is the #1 solution</li>
            <li><strong>Support clean energy:</strong> Choose renewable power options</li>
            <li><strong>Eat sustainably:</strong> Some foods have lower carbon footprints</li>
            <li><strong>Speak up:</strong> Climate action needs political support</li>
          </ol>
        </div>
        
        <p class="text-gray-600 italic mt-8">The ocean has been protecting us for centuries. Now it's our turn to protect the ocean.</p>
      `
    },
    {
      id: 5,
      title: 'AI and the Ocean: How Artificial Intelligence Is Saving Our Seas',
      summary: 'From predicting illegal fishing to monitoring coral reefs, artificial intelligence is becoming the ocean\'s best defense. Meet the algorithms that are revolutionizing marine conservation.',
      images: [
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop'
      ],
      category: 'Technology',
      readTime: '6 min read',
      date: '2024-01-05',
      author: 'Dr. Sarah Chen',
      content: `
        <p class="lead">The ocean covers <strong>71%</strong> of our planet, but we've explored less than <strong>5%</strong> of it. Artificial intelligence is changing that, giving us eyes and ears where we've never had them before.</p>
        
        <hr class="my-8 border-gray-200">
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">The Ocean's Big Data Problem</h2>
        
        <p>Here's the challenge: the ocean generates <strong>zettabytes</strong> of data daily. That's more than all the data created by humans throughout history. We needed something smarter than humans to process it all.</p>
        
        <blockquote class="border-l-4 border-purple-500 pl-4 my-6 italic text-gray-600">
          "AI is like having a million marine biologists working 24/7, never getting tired, never missing anything." — Ocean Technology Institute
        </blockquote>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Why Traditional Methods Failed</h3>
        
        <p>For decades, ocean monitoring looked like this:</p>
        
        <ul class="list-disc pl-6 my-4 space-y-2">
          <li><strong>Manual counting:</strong> Scientists spending months counting fish in photos</li>
          <li><strong>Delayed analysis:</strong> Data collected and analyzed months or years later</li>
          <li><strong>Limited coverage:</strong> Only tiny fractions of the ocean could be monitored</li>
          <li><strong>Human error:</strong> Even experts miss things when looking at thousands of images</li>
        </ul>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">The AI Revolution Begins</h2>
        
        <p>Artificial intelligence isn't just helping—it's completely transforming how we understand and protect our oceans.</p>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Satellite Vision: The Eye in the Sky</h3>
        
        <p>AI-powered satellite analysis is catching things humans never could:</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-800 mb-2">🚢 Illegal Fishing Detection</h4>
            <p class="text-blue-700">AI identifies fishing boats that turn off their tracking systems and predicts illegal fishing hotspots with 95% accuracy.</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-bold text-green-800 mb-2">🛢️ Oil Spill Prediction</h4>
            <p class="text-green-700">Machine learning models predict oil spill trajectories 6 hours faster than traditional methods.</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-800 mb-2">🐋 Whale Tracking</h4>
            <p class="text-purple-700">AI identifies whales from space, helping prevent ship strikes and protecting critical habitats.</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg">
            <h4 class="font-bold text-orange-800 mb-2">🌊 Ocean Current Mapping</h4>
            <p class="text-orange-700">Deep learning models map ocean currents in real-time, improving weather prediction and search-and-rescue.</p>
          </div>
        </div>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Underwater Intelligence: The Ocean's Brain</h3>
        
        <p>Below the surface, AI is working in ways we never imagined:</p>
        
        <div class="bg-purple-50 border-l-4 border-purple-400 p-4 my-6">
          <p class="text-purple-800"><strong>Acoustic AI:</strong> Machine learning can identify over 200 marine species from their sounds alone. It's like giving scientists superhuman hearing underwater.</p>
        </div>
        
        <ul class="list-none my-4 space-y-3">
          <li class="flex items-start">
            <span class="text-green-500 mr-2">🎵</span>
            <div>
              <strong>Coral health monitoring:</strong> AI listens to coral reefs to detect stress before visible bleaching occurs.
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 mr-2">💣</span>
            <div>
              <strong>Blast fishing detection:</strong> AI identifies illegal explosive fishing from underwater sound patterns.
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 mr-2">🐟</span>
            <div>
              <strong>Population tracking:</strong> Acoustic monitoring tracks fish populations without disturbing them.
            </div>
          </li>
        </ul>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">Predictive Conservation: Seeing the Future</h2>
        
        <p>The most powerful AI application? Predicting problems before they happen.</p>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Crystal Ball Algorithms</h3>
        
        <p>AI models are now predicting:</p>
        
        <ol class="list-decimal pl-6 my-4 space-y-2">
          <li class="font-semibold">Coral bleaching events 3 months in advance</li>
          <li class="font-semibold">Fish migration patterns with 89% accuracy</li>
          <li class="font-semibold">Harmful algal bloom formation</li>
          <li class="font-semibold">Marine heatwaves and dead zones</li>
        </ol>
        
        <blockquote class="border-l-4 border-green-500 pl-4 my-6 italic text-gray-600">
          "We used to react to ocean disasters. Now we prevent them. That's the difference AI makes." — Marine Conservation AI Lab
        </blockquote>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Autonomous Ocean Guardians</h3>
        
        <p>AI-powered robots are becoming the ocean's rangers:</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-6">
          <div class="bg-cyan-50 p-4 rounded-lg">
            <h4 class="font-bold text-cyan-800 mb-2">🤖 Underwater Drones</h4>
            <p class="text-cyan-700">Autonomous vehicles map the seafloor and monitor coral reefs 24/7.</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-800 mb-2">🦾 Robotic Fish</h4>
            <p class="text-blue-700">Lifelike robotic fish monitor marine life without disturbing natural behavior.</p>
          </div>
          <div class="bg-indigo-50 p-4 rounded-lg">
            <h4 class="font-bold text-indigo-800 mb-2">🌊 Smart Buoys</h4>
            <p class="text-indigo-700">AI-powered sensors detect pollution and environmental changes in real-time.</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-800 mb-2">🐠 Coral Robots</h4>
            <p class="text-purple-700">Tiny robots plant coral fragments and monitor reef growth automatically.</p>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">The Human-AI Partnership</h2>
        
        <p>AI isn't replacing humans—it's making us better at what we do:</p>
        
        <div class="bg-green-50 border-l-4 border-green-400 p-4 my-6">
          <p class="text-green-800"><strong>Success Story:</strong> Marine Protected Areas using AI have seen a 45% increase in fish populations and a 70% reduction in illegal fishing.</p>
        </div>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Challenges We Face</h3>
        
        <p>AI isn't magic. There are real challenges:</p>
        
        <ul class="list-disc pl-6 my-4 space-y-2">
          <li><strong>Data quality:</strong> AI needs good data to make good decisions</li>
          <li><strong>Cost:</strong> AI systems are expensive to develop and maintain</li>
          <li><strong>Training:</strong> We need more people who understand both marine science and AI</li>
          <li><strong>Accessibility:</strong> Developing nations need access to these technologies</li>
        </ul>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">How You Can Support Ocean AI</h3>
        
        <p>You don't need to be a programmer to help:</p>
        
        <div class="bg-gray-50 rounded-lg p-6 my-6">
          <ol class="list-decimal pl-6 space-y-3">
            <li><strong>Support citizen science:</strong> Apps like iNaturalist help train AI systems</li>
            <li><strong>Advocate for funding:</strong> Ocean AI research needs investment</li>
            <li><strong>Share ocean data:</strong> If you're a boater or diver, contribute observations</li>
            <li><strong>Choose tech-forward conservation:</strong> Support organizations using AI</li>
          </ol>
        </div>
        
        <p class="text-gray-600 italic mt-8">The ocean is vast, but with AI, we finally have the tools to understand and protect it. The future of marine conservation is here—and it's intelligent.</p>
      `
    },
    {
      id: 6,
      title: 'The Last Stand: Racing Against Extinction to Save Ocean Giants',
      summary: 'From vaquita porpoises to blue whales, marine megafauna are facing extinction. But a global network of scientists, activists, and local communities is fighting back with technology and hope.',
      images: [
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1540206395-68808572332f?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1596496180736-db2922097814?w=800&h=400&fit=crop',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=400&fit=crop'
      ],
      category: 'Conservation',
      readTime: '7 min read',
      date: '2024-01-03',
      author: 'Michael Rodriguez',
      content: `
        <p class="lead">The vaquita porpoise is the world's rarest marine mammal. <strong>Fewer than 10</strong> remain. They're not dying from natural causes—they're being killed by human greed. And they're not alone.</p>
        
        <hr class="my-8 border-gray-200">
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">The Extinction Crisis</h2>
        
        <p>We're living through the sixth mass extinction in Earth's history. But this time, it's our fault. And marine species are on the front lines.</p>
        
        <div class="bg-red-50 border-l-4 border-red-400 p-4 my-6">
          <p class="text-red-800"><strong>The Numbers:</strong> Over 1,000 marine species are currently threatened with extinction. That's 1,000 families, ecosystems, and futures hanging in the balance.</p>
        </div>
        
        <blockquote class="border-l-4 border-red-500 pl-4 my-6 italic text-gray-600">
          "When we save a species, we're not just saving animals. We're saving ourselves." — Marine Conservationist
        </blockquote>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Most Endangered</h3>
        
        <p>Meet the species on the brink of disappearing forever:</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-6">
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-bold text-red-800 mb-2">🐋 Vaquita Porpoise</h4>
            <p class="text-red-700"><strong>10 left.</strong> The world's rarest marine mammal, dying in illegal gillnets.</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg">
            <h4 class="font-bold text-orange-800 mb-2">🐢 Hawksbill Sea Turtle</h4>
            <p class="text-orange-700"><strong>15,000 left.</strong> Hunted for their beautiful shells.</p>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg">
            <h4 class="font-bold text-yellow-800 mb-2">🦈 Oceanic Whitetip Shark</h4>
            <p class="text-yellow-700"><strong>90% decline.</strong> Once the most common shark in the ocean.</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-800 mb-2">🐋 North Atlantic Right Whale</h4>
            <p class="text-purple-700"><strong>350 left.</strong> Dying from ship strikes and fishing gear.</p>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">Why They're Disappearing</h2>
        
        <p>The causes are human, preventable, and heartbreaking:</p>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Killers</h3>
        
        <ol class="list-decimal pl-6 my-4 space-y-2">
          <li class="font-semibold">Bycatch: 40% of global catch is unintended species</li>
          <li class="font-semibold">Habitat destruction: Coastal development eliminates breeding grounds</li>
          <li class="font-semibold">Pollution: Plastic and chemicals poison marine life</li>
          <li class="font-semibold">Climate change: Warming waters disrupt migration and breeding</li>
          <li class="font-semibold">Direct hunting: Illegal wildlife trade continues</li>
        </ol>
        
        <div class="bg-orange-50 border-l-4 border-orange-400 p-4 my-6">
          <p class="text-orange-800"><strong>The Bycatch Horror:</strong> Every year, 300,000 whales, dolphins, and porpoises die as bycatch. That's nearly 1,000 every single day.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">The Technology Fightback</h2>
        
        <p>We're fighting extinction with innovation:</p>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Satellite Guardians</h3>
        
        <p>Modern technology is giving endangered species a fighting chance:</p>
        
        <ul class="list-none my-4 space-y-3">
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">🛰️</span>
            <div>
              <strong>Satellite tracking:</strong> Tags smaller than a grain of rice track migration patterns and identify critical habitats.
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">📡</span>
            <div>
              <strong>Real-time monitoring:</strong> AI systems detect illegal fishing and poaching activities instantly.
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">🧬</span>
            <div>
              <strong>DNA analysis:</strong> Environmental DNA (eDNA) can detect species from water samples alone.
            </div>
          </li>
        </ul>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Innovation Wave</h3>
        
        <p>Cutting-edge solutions are saving lives:</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-6">
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-bold text-green-800 mb-2">🔵 Smart Fishing Gear</h4>
            <p class="text-green-700">LED lights on fishing nets reduce turtle bycatch by 70%</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Acoustic Deterrents</h4>
            <p class="text-blue-700">Sound devices keep whales away from fishing areas</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-800 mb-2">🤖 Drone Patrols</h4>
            <p class="text-purple-700">Autonomous drones monitor protected areas 24/7</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg">
            <h4 class="font-bold text-orange-800 mb-2">📱 Citizen Science</h4>
            <p class="text-orange-700">Apps let anyone report sightings and illegal activities</p>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">The Human Heroes</h2>
        
        <p>Technology alone isn't enough. People are making the difference:</p>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Local Communities Leading the Way</h3>
        
        <p>Around the world, local communities are becoming conservation champions:</p>
        
        <blockquote class="border-l-4 border-green-500 pl-4 my-6 italic text-gray-600">
          "We used to hunt turtles. Now we protect them. Tourism brings more money than hunting ever did." — Former Fisherman, Costa Rica
        </blockquote>
        
        <div class="bg-green-50 border-l-4 border-green-400 p-4 my-6">
          <p class="text-green-800"><strong>Success Story:</strong> In the Philippines, community-led marine protected areas have increased fish populations by 400% while eliminating destructive fishing.</p>
        </div>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Global Movement</h3>
        
        <p>International cooperation is saving species:</p>
        
        <ul class="list-disc pl-6 my-4 space-y-2">
          <li><strong>CITES protection:</strong> International trade bans on endangered species</li>
          <li><strong>Marine protected areas:</strong> Safe havens covering 7% of the ocean</li>
          <li><strong>Species recovery programs:</strong> Captive breeding and reintroduction</li>
          <li><strong>Legal action:</strong> Holding polluters and illegal fishers accountable</li>
        </ul>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200 mt-12">The Comeback Kids</h2>
        
        <p>Amidst the crisis, there are incredible success stories:</p>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Species That Bounced Back</h3>
        
        <ol class="list-decimal pl-6 my-4 space-y-2">
          <li class="font-semibold">Humpback whales: From 5,000 to 80,000</li>
          <li class="font-semibold">Gray whales: From 2,000 to 26,000</li>
          <li class="font-semibold">Sea otters: From 50 to 3,000 in California</li>
          <li class="font-semibold">Southern sea lions: From 500 to 300,000</li>
        </ol>
        
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <p class="text-blue-800"><strong>The Lesson:</strong> When we act decisively, marine species can recover. Extinction isn't inevitable—it's a choice.</p>
        </div>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">Your Role in the Fight</h3>
        
        <p>You don't have to be a scientist to save endangered species:</p>
        
        <div class="bg-gray-50 rounded-lg p-6 my-6">
          <ol class="list-decimal pl-6 space-y-3">
            <li><strong>Choose sustainable seafood:</strong> Look for certifications that protect marine life</li>
            <li><strong>Support conservation organizations:</strong> They need your funding and voice</li>
            <li><strong>Reduce plastic use:</strong> Plastic kills marine animals every day</li>
            <li><strong>Speak up:</strong> Advocate for stronger ocean protection laws</li>
            <li><strong>Travel responsibly:</strong> Choose eco-friendly marine tourism</li>
          </ol>
        </div>
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-3 mt-8">The Race Against Time</h3>
        
        <p>We're at a critical moment. The next decade will determine whether thousands of species survive or disappear forever.</p>
        
        <blockquote class="border-l-4 border-purple-500 pl-4 my-6 italic text-gray-600">
          "The question isn't whether we can save these species. The question is whether we will. The answer is up to us." — Marine Biologist
        </blockquote>
        
        <p class="text-gray-600 italic mt-8">Extinction is forever. But hope is not. Every species we save is a promise kept to future generations.</p>
      `
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

  // Fallback image component with multiple image URLs
  const FallbackImage = ({ images, alt, className, onError }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hasError, setHasError] = useState(false);

    const handleImageError = () => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      } else {
        setHasError(true);
        if (onError) onError();
      }
    };

    if (hasError) {
      return (
        <div className={`${className} bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center`}>
          <svg className="h-12 w-12 text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      );
    }

    return (
      <img
        src={images[currentImageIndex]}
        alt={alt}
        className={className}
        onError={handleImageError}
        loading="lazy"
      />
    );
  };

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-8 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-2 font-medium"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Articles</span>
          </button>

          <article className="prose prose-lg max-w-none prose-gray">
            <header className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedArticle.category)}`}>
                  {selectedArticle.category}
                </span>
                <span className="text-sm text-gray-500">
                  {selectedArticle.readTime}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                {selectedArticle.title}
              </h1>
              
              <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{selectedArticle.author}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(selectedArticle.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <FallbackImage
                images={selectedArticle.images}
                alt={selectedArticle.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div 
              className="prose prose-lg max-w-none prose-gray leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              style={{
                '--tw-prose-body': 'rgb(55, 65, 81)',
                '--tw-prose-headings': 'rgb(17, 24, 39)',
                '--tw-prose-lead': 'rgb(75, 85, 99)',
                '--tw-prose-links': 'rgb(59, 130, 246)',
                '--tw-prose-bold': 'rgb(17, 24, 39)',
                '--tw-prose-counters': 'rgb(107, 114, 128)',
                '--tw-prose-bullets': 'rgb(107, 114, 128)',
                '--tw-prose-hr': 'rgb(229, 231, 235)',
                '--tw-prose-quotes': 'rgb(107, 114, 128)',
                '--tw-prose-quote-borders': 'rgb(229, 231, 235)',
                '--tw-prose-captions': 'rgb(107, 114, 128)',
                '--tw-prose-code': 'rgb(17, 24, 39)',
                '--tw-prose-pre-code': 'rgb(229, 231, 235)',
                '--tw-prose-pre-bg': 'rgb(243, 244, 246)',
                '--tw-prose-th-borders': 'rgb(229, 231, 235)',
                '--tw-prose-td-borders': 'rgb(229, 231, 235)',
                '--tw-prose-invert-body': 'rgb(229, 231, 235)',
                '--tw-prose-invert-headings': 'rgb(243, 244, 246)',
                '--tw-prose-invert-lead': 'rgb(209, 213, 219)',
                '--tw-prose-invert-links': 'rgb(147, 197, 253)',
                '--tw-prose-invert-bold': 'rgb(243, 244, 246)',
                '--tw-prose-invert-counters': 'rgb(156, 163, 175)',
                '--tw-prose-invert-bullets': 'rgb(156, 163, 175)',
                '--tw-prose-invert-hr': 'rgb(75, 85, 99)',
                '--tw-prose-invert-quotes': 'rgb(156, 163, 175)',
                '--tw-prose-invert-quote-borders': 'rgb(75, 85, 99)',
                '--tw-prose-invert-captions': 'rgb(156, 163, 175)',
                '--tw-prose-invert-code': 'rgb(243, 244, 246)',
                '--tw-prose-invert-pre-code': 'rgb(55, 65, 81)',
                '--tw-prose-invert-pre-bg': 'rgb(17, 24, 39)',
                '--tw-prose-invert-th-borders': 'rgb(75, 85, 99)',
                '--tw-prose-invert-td-borders': 'rgb(75, 85, 99)'
              }}
            />

            <footer className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{selectedArticle.author}</p>
                    <p className="text-sm text-gray-500">Marine Conservation Expert</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <img 
              src="/icon.png" 
              alt="OceanOpt Logo" 
              className="h-12 w-12 text-primary"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ocean Insights
          </h1>
          <p className="text-lg text-ocean-600 max-w-2xl mx-auto">
            Stay informed with the latest research, insights, and stories about ocean conservation, 
            marine life, and sustainable fishing practices.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Featured Article</h2>
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 border border-ocean-100"
            onClick={() => setSelectedArticle(articles[0])}
          >
            <div className="relative h-64 md:h-80">
              <FallbackImage
                images={articles[0].images}
                alt={articles[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-ocean-800 mb-3`}>
                  {articles[0].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {articles[0].title}
                </h3>
                <p className="text-white/90 line-clamp-2 mb-2">
                  {articles[0].summary}
                </p>
                <div className="flex items-center space-x-4 text-white/80 text-sm">
                  <span>{articles[0].author}</span>
                  <span>•</span>
                  <span>{articles[0].readTime}</span>
                  <span>•</span>
                  <span>{new Date(articles[0].date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-ocean-100"
                onClick={() => setSelectedArticle(article)}
              >
                {/* Article Image */}
                <div className="h-48 relative overflow-hidden">
                  <FallbackImage
                    images={article.images}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-ocean-700 transition-colors duration-200">
                    {article.title}
                  </h3>

                  <p className="text-ocean-600 mb-4 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-ocean-100 rounded-full flex items-center justify-center">
                        <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-sm text-ocean-700 font-medium">
                        {article.author}
                      </span>
                    </div>
                    <span className="text-sm text-ocean-500">
                      {article.readTime}
                    </span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-ocean-100">
                    <div className="flex items-center justify-between text-sm text-ocean-500">
                      <span>
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <button className="text-primary font-medium hover:text-ocean-700 transition-colors duration-200">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Load More Section */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-ocean-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
