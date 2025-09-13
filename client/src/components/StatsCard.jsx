    import React from "react";

    const StatsCard = ({ title, value }) => {
    return (
        <div className="flex flex-col gap-2 rounded-xl bg-[var(--c-bg-secondary)] p-6 shadow-sm">
        <p className="text-base font-medium text-[var(--c-text-secondary)]">{title}</p>
        <p className="text-4xl font-bold text-[var(--c-text-primary)]">{value}</p>
        </div>
    );
    };

    export default StatsCard;
