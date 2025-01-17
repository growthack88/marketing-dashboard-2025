[Previous dashboard code...]

      {/* Test Framework Section */}
      <div className="max-w-7xl mx-auto mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Testing Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Creative Testing */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
            <h3 className="font-bold text-lg mb-4 text-indigo-700">Creative Testing</h3>
            <div className="space-y-3">
              <div className="bg-indigo-50 p-3 rounded">
                <h4 className="font-semibold text-indigo-800">Content Type</h4>
                <ul className="mt-2 text-sm text-indigo-600 space-y-1">
                  <li>• Seasonal vs Generic</li>
                  <li>• UGC vs Professional</li>
                  <li>• Video Length Tests</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-3 rounded">
                <h4 className="font-semibold text-indigo-800">Success Metrics</h4>
                <ul className="mt-2 text-sm text-indigo-600">
                  <li>• CTR > 3.8%</li>
                  <li>• Watch time > 15s</li>
                  <li>• Engagement rate > 5%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Audience Testing */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="font-bold text-lg mb-4 text-green-700">Audience Testing</h3>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded">
                <h4 className="font-semibold text-green-800">Targeting Tests</h4>
                <ul className="mt-2 text-sm text-green-600 space-y-1">
                  <li>• Interest Expansion</li>
                  <li>• LAL Scaling (1-3%)</li>
                  <li>• Behavior Targeting</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <h4 className="font-semibold text-green-800">Success Metrics</h4>
                <ul className="mt-2 text-sm text-green-600">
                  <li>• CPA < EGP 400</li>
                  <li>• ROAS > 5.0x</li>
                  <li>• Scale potential > 2x</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ad Copy Testing */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
            <h3 className="font-bold text-lg mb-4 text-purple-700">Ad Copy Testing</h3>
            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded">
                <h4 className="font-semibold text-purple-800">Message Tests</h4>
                <ul className="mt-2 text-sm text-purple-600 space-y-1">
                  <li>• Value Props</li>
                  <li>• CTA Variations</li>
                  <li>• Tone of Voice</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-3 rounded">
                <h4 className="font-semibold text-purple-800">Success Metrics</h4>
                <ul className="mt-2 text-sm text-purple-600">
                  <li>• CTR improvement > 10%</li>
                  <li>• CVR improvement > 15%</li>
                  <li>• Bounce rate < 45%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Test Schedule */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
            <h3 className="font-bold text-lg mb-4 text-yellow-700">Test Schedule</h3>
            <div className="space-y-3">
              <div className="bg-yellow-50 p-3 rounded">
                <h4 className="font-semibold text-yellow-800">Timeline</h4>
                <ul className="mt-2 text-sm text-yellow-600 space-y-1">
                  <li>• Creative: Week 1-2</li>
                  <li>• Audience: Week 2-3</li>
                  <li>• Copy: Week 3-4</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-3 rounded">
                <h4 className="font-semibold text-yellow-800">Requirements</h4>
                <ul className="mt-2 text-sm text-yellow-600">
                  <li>• Min. budget: EGP 1000/test</li>
                  <li>• Duration: 7-14 days</li>
                  <li>• Min. 95% confidence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;