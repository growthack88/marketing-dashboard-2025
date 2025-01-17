import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Marketing Performance Dashboard</title>
        <meta name="description" content="Kids Sportswear Marketing Performance Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Marketing Performance Report</h1>
            <p className="text-gray-600 mt-2">Kids Sportswear Egypt - January 2025</p>
            <div className="mt-4 inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              Last Updated: January 17, 2025
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="ROAS"
              value="5.67x"
              trend="up"
              change="18.1%"
              color="border-indigo-500"
            />
            <MetricCard
              title="CTR"
              value="3.84%"
              trend="up"
              change="20%"
              color="border-green-500"
            />
            <MetricCard
              title="CPA"
              value="EGP 411.21"
              trend="down"
              change="8.6%"
              color="border-purple-500"
            />
            <MetricCard
              title="Conversion Rate"
              value="2.8%"
              trend="up"
              change="33.3%"
              color="border-cyan-500"
            />
          </div>

          {/* Campaign Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <CampaignCard
              title="Winter Collection"
              roas={16.99}
              benchmark={12.5}
              status="success"
            />
            <CampaignCard
              title="MSG/Nov Campaign"
              roas={6.37}
              benchmark={5.5}
              status="good"
            />
          </div>

          {/* Test Framework */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <TestCard
              title="Creative Testing"
              tests={['Seasonal vs Generic', 'UGC vs Professional', 'Video Length']}
              metrics={['CTR > 3.8%', 'Watch time > 15s']}
            />
            <TestCard
              title="Audience Testing"
              tests={['Interest Expansion', 'LAL Scaling', 'Behavior Targeting']}
              metrics={['CPA < EGP 400', 'ROAS > 5.0x']}
            />
            <TestCard
              title="Schedule"
              tests={['Week 1: Creative', 'Week 2: Audience', 'Week 3-4: Scale']}
              metrics={['Min budget: EGP 1000/test', 'Duration: 7-14 days']}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const MetricCard = ({ title, value, trend, change, color }) => (
  <div className={\`bg-white rounded-lg shadow p-6 border-l-4 \${color}\`}>
    <h3 className="text-sm text-gray-500">{title}</h3>
    <div className="text-3xl font-bold mt-2">{value}</div>
    <div className={\`flex items-center text-sm mt-1 \${trend === 'up' ? 'text-green-600' : 'text-red-600'}\`}>
      {trend === 'up' ? '↑' : '↓'} {change} vs last period
    </div>
  </div>
);

const CampaignCard = ({ title, roas, benchmark, status }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <div className="text-2xl font-bold text-blue-600">{roas}x ROAS</div>
    <div className={\`text-sm \${status === 'success' ? 'text-green-600' : 'text-yellow-600'}\`}>
      {((roas - benchmark) / benchmark * 100).toFixed(1)}% vs benchmark ({benchmark}x)
    </div>
  </div>
);

const TestCard = ({ title, tests, metrics }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="font-bold text-lg mb-4">{title}</h3>
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-gray-700">Tests</h4>
        <ul className="mt-2 space-y-1">
          {tests.map((test, i) => (
            <li key={i} className="text-sm text-gray-600">• {test}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700">Success Metrics</h4>
        <ul className="mt-2 space-y-1">
          {metrics.map((metric, i) => (
            <li key={i} className="text-sm text-gray-600">• {metric}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Home;