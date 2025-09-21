import React from "react";

const PointsSystem = ({ points }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-sm border border-primary/10 dark:border-primary/20">
      <h3 className="text-xl font-bold mb-4">Points System</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg text-center">
          <p className="text-sm font-medium">Total Points</p>
          <p className="text-2xl font-bold">{points?.total || 0}</p>
          <p className="text-xs text-primary font-semibold">+{points?.gain || 0}</p>
        </div>
        <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg text-center">
          <p className="text-sm font-medium">Rewards</p>
          <p className="text-2xl font-bold">{points?.rewards || 0}</p>
          <p className="text-xs text-primary font-semibold">+{points?.rewardGain || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default PointsSystem;
