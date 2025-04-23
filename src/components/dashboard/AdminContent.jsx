
import React from "react";
import StatCard from "./StatCard";
import { Users, UserCheck, Package, Settings } from "lucide-react";

const AdminContent = () => {
  return (
    <div className="space-y-10">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="128"
          description="Active accounts"
          icon={<Users size={22} />}
          trend="up"
          trendValue="12% from last month"
        />
        <StatCard
          title="Subscribers"
          value="84"
          description="Premium subs"
          icon={<UserCheck size={22} />}
          trend="up"
          trendValue="8% from last month"
        />
        <StatCard
          title="Premium Plans"
          value="3"
          description="Active tiers"
          icon={<Package size={22} />}
        />
        <StatCard
          title="API Keys"
          value="47"
          description="Active keys"
          icon={<Settings size={22} />}
          trend="up"
          trendValue="15% from last month"
        />
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#222046]/80 via-[#21213b] to-[#37255d] border border-purple-800/40 backdrop-blur-md p-0 transition hover:scale-[1.01]">
          <div className="px-6 pt-6 pb-3">
            <div className="flex items-center space-x-2"><span className="text-lg font-bold text-indigo-100 drop-shadow">User Registration</span></div>
            <span className="text-xs text-indigo-200/80">New user sign-ups over time</span>
          </div>
          <div className="h-[200px] flex items-center justify-center rounded-b-2xl bg-gradient-to-t from-[#140e29]/60 to-transparent border-t border-indigo-800/30">
            <p className="text-indigo-200/80">User Growth Chart</p>
          </div>
        </div>
        <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#23245b]/80 via-[#292b4a] to-[#37255d] border border-purple-800/40 backdrop-blur-md p-0 transition hover:scale-[1.01]">
          <div className="px-6 pt-6 pb-3">
            <div className="flex items-center space-x-2"><span className="text-lg font-bold text-indigo-100 drop-shadow">Subscription Revenue</span></div>
            <span className="text-xs text-indigo-200/80">Revenue from subscriptions</span>
          </div>
          <div className="h-[200px] flex items-center justify-center rounded-b-2xl bg-gradient-to-t from-[#140e29]/60 to-transparent border-t border-indigo-800/30">
            <p className="text-indigo-200/80">Revenue Chart</p>
          </div>
        </div>
      </div>

      <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#23245b]/85 via-[#292b4a] to-[#180f31] border border-purple-800/40 backdrop-blur-md transition hover:scale-[1.01]">
        <div className="px-6 pt-6">
          <span className="text-lg font-bold text-indigo-100 drop-shadow">Recent Activity</span>
          <span className="text-xs block mt-1 text-indigo-200/80">Latest platform activities</span>
        </div>
        <div className="px-6 pb-6 pt-4">
          <div className="space-y-4">
            {[
              { user: "John Smith", action: "created an API key", time: "2h ago" },
              { user: "Sarah Johnson", action: "upgraded subscription", time: "5h ago" },
              { user: "Mike Reynolds", action: "registered a new account", time: "1d ago" },
              { user: "Lisa Wong", action: "updated profile information", time: "2d ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between border-b border-indigo-900/30 pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="font-semibold text-indigo-50">{activity.user}</p>
                  <p className="text-xs text-indigo-200/80">{activity.action}</p>
                </div>
                <span className="text-xs bg-[#14162c] text-indigo-200/80 px-2 py-1 rounded font-mono">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
