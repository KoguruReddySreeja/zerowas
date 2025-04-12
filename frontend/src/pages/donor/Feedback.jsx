import React from "react";
import { Star, Heart, Award } from "lucide-react";

const feedbackList = [
  {
    name: "Ravi Kumar",
    comment: "The food was clean and delivered on time. Thank you!",
    rating: 5,
    dish: "Veg Biryani",
  },
  {
    name: "Asha Devi",
    comment: "Delicious and warm! Our kids loved it.",
    rating: 4,
    dish: "Mixed Veg Curry",
  },
  {
    name: "Imran",
    comment: "Packaging was good. Food was fresh. Appreciate it!",
    rating: 4,
    dish: "Chapati + Dal",
  },
];

const DonorFeedback = () => {
  return (
    <div className="p-6 bg-[#f6fef8] min-h-screen overflow-y-auto">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#2f5d3a]">Feedback & Appreciation 💬</h1>
        <p className="text-lg text-[#3d5a40] mt-1">
          Here's what recipients say about your donations. You're making a difference!
        </p>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <Star className="w-8 h-8 text-yellow-500" />
          <div>
            <p className="text-base text-[#3d5a40] font-semibold">Average Rating</p>
            <p className="text-xl font-bold text-[#2f5d3a]">4.7 / 5</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <Heart className="w-8 h-8 text-red-500" />
          <div>
            <p className="text-base text-[#3d5a40] font-semibold">Most Loved Dish</p>
            <p className="text-xl font-bold text-[#2f5d3a]">Veg Biryani</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <Award className="w-8 h-8 text-[#2a9d8f]" />
          <div>
            <p className="text-base text-[#3d5a40] font-semibold">Badges Earned</p>
            <p className="text-xl font-bold text-[#2f5d3a]">Top Donor ⭐</p>
          </div>
        </div>
      </div>

      {/* Feedback List */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-bold text-[#2f5d3a] mb-4">Recipient Feedback</h2>
        <div className="space-y-4">
          {feedbackList.map((fb, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg bg-[#fefefe] hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-[#264653] text-lg">{fb.name}</h3>
                <div className="flex gap-1">
                  {Array.from({ length: fb.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-[#444] mb-2">"{fb.comment}"</p>
              <span className="text-sm text-[#2a9d8f] font-medium">
                🍛 Dish: {fb.dish}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Appreciation Note */}
      <div className="bg-[#fef6ed] border-l-4 border-[#f4a261] rounded-xl p-4 text-base text-[#3d3d3d] shadow">
        🎉 <span className="font-semibold">Thank You!</span> Your kindness spreads joy and nourishment across communities.
      </div>
    </div>
  );
};

export default DonorFeedback;
