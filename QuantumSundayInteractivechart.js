import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';

const data = [
  { year: 2022, privateInvestment: 2.35, publicInvestment: 0, projectedMarketValue: 0 },
  { year: 2023, privateInvestment: 1.71, publicInvestment: 42, projectedMarketValue: 0 },
  { year: 2024, privateInvestment: null, publicInvestment: null, projectedMarketValue: 0 },
  { year: 2025, privateInvestment: null, publicInvestment: null, projectedMarketValue: 0 },
  { year: 2030, privateInvestment: null, publicInvestment: null, projectedMarketValue: 300 },
];

const milestones = [
  { year: 2023, event: "Global public investments reach $42B" },
  { year: 2025, event: "Focus on qubit precision and performance" },
  { year: 2030, event: "Projected market value in hundreds of billions" },
];

const publicFundingData = [
  { country: "China", amount: 15.3 },
  { country: "USA", amount: 13.3 },
  { country: "EU", amount: 7.2 },
  { country: "Others", amount: 6.2 },
];

const QuantumFundingLandscapeChart = () => {
  return (
    <div className="w-full space-y-8">
      <h2 className="text-2xl font-bold">Quantum Technology Funding: Current Landscape and Future Projections</h2>
      
      <div className="h-96">
        <h3 className="text-xl font-semibold mb-2">Investment Trends and Market Projections</h3>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" label={{ value: 'Investment (Billion USD)', angle: -90, position: 'insideLeft' }} />
            <YAxis yAxisId="right" orientation="right" label={{ value: 'Market Value (Billion USD)', angle: 90, position: 'insideRight' }} />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="privateInvestment" name="Private Investment" fill="#8884d8" />
            <Bar yAxisId="left" dataKey="publicInvestment" name="Public Investment" fill="#82ca9d" />
            <Line yAxisId="right" type="monotone" dataKey="projectedMarketValue" name="Projected Market Value" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="h-64">
        <h3 className="text-xl font-semibold mb-2">Public Funding Distribution (2023)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={publicFundingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis label={{ value: 'Amount (Billion USD)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Key Milestones</h3>
        <ul className="list-disc pl-5">
          {milestones.map((milestone, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{milestone.year}:</span> {milestone.event}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuantumFundingLandscapeChart;
