
const FeatureHeader = () => {
  return (
    <div className="mb-16 text-center">
      <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span className="text-sm font-medium text-blue-700">Studio Features</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-apple-gray-800 mb-6 tracking-tight">
        Studio: AI-Powered Product Optimization
      </h2>
      <p className="text-lg md:text-xl text-apple-gray-600 max-w-3xl mx-auto">
        Studio is your AI co-pilot for perfecting product listings. From intelligent categorization to compelling descriptions 
        and optimized imagery, Studio ensures your products shine on every platform.
      </p>
    </div>
  );
};

export default FeatureHeader;
