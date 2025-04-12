import React from "react";

const AlertsCard = () => {
  const alerts = [
    { title: "Expired Post: 12kg Veg Rice", desc: "Still not picked", type: "expired" },
    { title: "Flagged: Meat Pack", desc: "Reported for poor quality", type: "flagged" },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Alerts & Flags</h2>
      <div className="flex flex-col gap-4">
        {alerts.map((alert, i) => (
          <div
            key={i}
            className={`border-l-4 pl-4 py-2 rounded-md ${
              alert.type === "expired" ? "border-red-500 bg-red-50" : "border-yellow-400 bg-yellow-50"
            }`}
          >
            <p className="text-sm font-medium text-gray-800">{alert.title}</p>
            <p className="text-xs text-gray-600">{alert.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsCard;
