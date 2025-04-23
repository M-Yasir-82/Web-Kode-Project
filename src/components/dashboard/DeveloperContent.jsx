
import React from "react";
import StatCard from "./StatCard";
import { Key, Package, Settings, User } from "lucide-react";
import { Button } from '@/components/ui/button';

const DeveloperContent = () => {
  return (
    <div className="space-y-10">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="API Calls"
          value="15,872"
          description="Last 30 days"
          icon={<Key size={22} />}
          trend="up"
          trendValue="23% from last month"
        />
        <StatCard
          title="Projects"
          value="4"
          description="Active projects"
          icon={<Package size={22} />}
        />
        <StatCard
          title="API Keys"
          value="2"
          description="Active keys"
          icon={<Settings size={22} />}
        />
        <StatCard
          title="Usage Quota"
          value="67%"
          description="Of monthly limit"
          icon={<User size={22} />}
          trend="neutral"
          trendValue="5% increase this week"
        />
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#222046]/80 via-[#21213b] to-[#37255d] border border-purple-800/40 backdrop-blur-md p-0 transition hover:scale-[1.01]">
          <div className="px-6 pt-6 pb-3">
            <span className="text-lg font-bold text-indigo-100 drop-shadow">API Usage</span>
            <span className="text-xs block text-indigo-200/80">API call volume</span>
          </div>
          <div className="h-[200px] flex items-center justify-center rounded-b-2xl bg-gradient-to-t from-[#140e29]/60 to-transparent border-t border-indigo-800/30">
            <p className="text-indigo-200/80">API Usage Chart</p>
          </div>
          <div className="px-6 pb-6 pt-4 flex justify-end">
            <Button variant="outline" size="sm" className="border-indigo-300/40 text-indigo-200/80 hover:bg-indigo-900/40">
              View Details
            </Button>
          </div>
        </div>
        <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#23245b]/80 via-[#292b4a] to-[#37255d] border border-purple-800/40 backdrop-blur-md p-0 transition hover:scale-[1.01]">
          <div className="px-6 pt-6 pb-3">
            <span className="text-lg font-bold text-indigo-100 drop-shadow">API Response Times</span>
            <span className="text-xs block text-indigo-200/80">Avg response by endpoint</span>
          </div>
          <div className="h-[200px] flex items-center justify-center rounded-b-2xl bg-gradient-to-t from-[#140e29]/60 to-transparent border-t border-indigo-800/30">
            <p className="text-indigo-200/80">Response Time Chart</p>
          </div>
          <div className="px-6 pb-6 pt-4 flex justify-end">
            <Button variant="outline" size="sm" className="border-indigo-300/40 text-indigo-200/80 hover:bg-indigo-900/40">
              View Details
            </Button>
          </div>
        </div>
      </div>

      <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#23245b]/85 via-[#292b4a] to-[#180f31] border border-purple-800/40 backdrop-blur-md transition hover:scale-[1.01]">
        <div className="px-6 pt-6 flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-100 drop-shadow">Your API Keys</span>
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow hover:from-blue-700 hover:to-indigo-700">
            Create New Key
          </Button>
        </div>
        <div className="px-6 pb-6 pt-4">
          <div className="space-y-4">
            {[
              { name: "Production Key", created: "2023-06-15", lastUsed: "2023-08-22", status: "Active" },
              { name: "Test Environment", created: "2023-07-03", lastUsed: "2023-08-21", status: "Active" },
            ].map((key, idx) => (
              <div key={idx} className="bg-gradient-to-tr from-[#1e193f]/40 to-[#291f54]/60 border border-indigo-900/40 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-indigo-100">{key.name}</h3>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-indigo-200/80 mt-1">
                    <span>Created: {key.created}</span>
                    <span>Last used: {key.lastUsed}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-900/40 text-green-200">{key.status}</span>
                  <Button variant="outline" size="sm" className="border-indigo-300/40 text-indigo-200/80 hover:bg-indigo-900/40">Revoke</Button>
                  <Button variant="outline" size="sm" className="border-indigo-300/40 text-indigo-200/80 hover:bg-indigo-900/40">Copy</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperContent;
