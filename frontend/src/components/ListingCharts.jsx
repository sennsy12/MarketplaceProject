import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
  } from 'recharts';
  
  const ListingCharts = ({ timeRange }) => {

    const viewsData = {
      week: [
        { day: 'Mon', views: 45 },
        { day: 'Tue', views: 52 },
        { day: 'Wed', views: 38 },
        { day: 'Thu', views: 65 },
        { day: 'Fri', views: 48 },
        { day: 'Sat', views: 91 },
        { day: 'Sun', views: 73 }
      ],
      month: [
        { day: 'Week 1', views: 245 },
        { day: 'Week 2', views: 312 },
        { day: 'Week 3', views: 198 },
        { day: 'Week 4', views: 275 }
      ],
      year: [
        { month: 'Jan', views: 890 },
        { month: 'Feb', views: 678 },
        { month: 'Mar', views: 1020 },
        { month: 'Apr', views: 843 },
        { month: 'May', views: 765 },
        { month: 'Jun', views: 943 }
      ]
    };
  

    const sourceData = [
      { name: 'Search', value: 45 },
      { name: 'Direct', value: 25 },
      { name: 'Social', value: 20 },
      { name: 'Referral', value: 10 }
    ];
  
 
    const interactionData = [
      { name: 'Views', count: 245 },
      { name: 'Favorites', count: 12 },
      { name: 'Messages', count: 8 },
      { name: 'Shares', count: 5 }
    ];
  
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
    return (
      <div className="space-y-8 mt-8">
        {/* Views Over Time */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Views Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={viewsData[timeRange]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey={timeRange === 'year' ? 'month' : 'day'} 
                stroke="#6B7280"
              />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="views" 
                stroke="#0D9488" 
                strokeWidth={2}
                dot={{ fill: '#0D9488' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
  
        {/* Traffic Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
  
          {/* User Interactions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">User Interactions</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={interactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip />
                <Bar dataKey="count" fill="#0D9488" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };
  
  export default ListingCharts;