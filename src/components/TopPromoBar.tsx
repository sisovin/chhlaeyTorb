function TopPromoBar() {
  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-center py-2 px-4 text-sm font-medium">
      <div className="flex items-center justify-center space-x-2 animate-pulse">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <span>
          LIVE: Flash sale on premium plans - 40% off for first 100 customers!
        </span>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default TopPromoBar;
