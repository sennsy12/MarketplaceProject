import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Eye, 
  Heart, 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  Users, 
  MousePointer, 
  Share2 
} from 'lucide-react';
import { listings } from '../data/mockData';
import ListingCharts from '../components/ListingCharts';

const ListingStatisticsPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [timeRange, setTimeRange] = useState('week'); 

  useEffect(() => {
    const foundListing = listings.find(item => item.id === parseInt(id));
    setListing(foundListing);
  }, [id]);

  if (!listing) return null;

 
  const stats = {
    week: {
      views: 245,
      uniqueVisitors: 180,
      favorites: 12,
      messages: 8,
      clickRate: '4.2%',
      averageTime: '2m 30s',
      shares: 5
    },
    month: {
      views: 890,
      uniqueVisitors: 650,
      favorites: 45,
      messages: 32,
      clickRate: '3.8%',
      averageTime: '2m 15s',
      shares: 18
    },
    year: {
      views: 3240,
      uniqueVisitors: 2400,
      favorites: 156,
      messages: 98,
      clickRate: '3.5%',
      averageTime: '2m 45s',
      shares: 64
    }
  };

  const currentStats = stats[timeRange];

  const StatCard = ({ icon: Icon, title, value, change }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
          <Icon size={20} />
        </div>
        <span className="text-gray-600 font-medium">{title}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        {change && (
          <span className={`text-sm ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change > 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Listing Info */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Statistics for: {listing.title}</h1>
        <p className="text-gray-600">Track your listing's performance and engagement</p>
      </div>

      {/* Time Range Selector */}
      <div className="mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
          {['week', 'month', 'year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeRange === range 
                  ? 'bg-teal-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Eye} 
          title="Total Views" 
          value={currentStats.views} 
          change={5.2} 
        />
        <StatCard 
          icon={Users} 
          title="Unique Visitors" 
          value={currentStats.uniqueVisitors} 
          change={3.8} 
        />
        <StatCard 
          icon={Heart} 
          title="Favorites" 
          value={currentStats.favorites} 
          change={7.1} 
        />
        <StatCard 
          icon={MessageSquare} 
          title="Messages" 
          value={currentStats.messages} 
          change={-2.3} 
        />
        <StatCard 
          icon={MousePointer} 
          title="Click Rate" 
          value={currentStats.clickRate} 
          change={1.5} 
        />
        <StatCard 
          icon={Clock} 
          title="Avg. Time on Page" 
          value={currentStats.averageTime} 
          change={4.2} 
        />
        <StatCard 
          icon={Share2} 
          title="Shares" 
          value={currentStats.shares} 
          change={6.7} 
        />
        <StatCard 
          icon={TrendingUp} 
          title="Engagement Rate" 
          value="5.8%" 
          change={2.9} 
        />
      </div>

      <ListingCharts timeRange={timeRange} />
    </div>
  );
};

export default ListingStatisticsPage;