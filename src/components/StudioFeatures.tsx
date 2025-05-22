
import FeatureHeader from "./studio-features/FeatureHeader";
import CategoryFeature from "./studio-features/CategoryFeature";
import ImageFeature from "./studio-features/ImageFeature";
import ContentFeature from "./studio-features/ContentFeature";
import AttributeFeature from "./studio-features/AttributeFeature";
import PublishFeature from "./studio-features/PublishFeature";

const StudioFeatures = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <FeatureHeader />
        <CategoryFeature />
        <ImageFeature />
        <ContentFeature />
        <AttributeFeature />
        <PublishFeature />
      </div>
    </section>
  );
};

export default StudioFeatures;
