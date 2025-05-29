import ImageCompare from './ImageCompare';
import AnimatedElement from './AnimatedElement';

const ImageCompareDemo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-800 mb-3">
              AI Image Enhancement
            </h2>
            <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
              See the difference our AI technology makes by comparing before and after product images
            </p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={100}>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-apple-gray-800">Product Photography Enhancement</h3>
            <ImageCompare 
              beforeImage="/lovable-uploads/before.png" 
              afterImage="/lovable-uploads/after.jpg"
              beforeAlt="Original product photo"
              afterAlt="AI enhanced product photo"
              className="shadow-lg"
            />
            <p className="text-apple-gray-600">
              Slide to compare original and AI-enhanced product photography. Our AI automatically adjusts lighting, 
              removes distractions, and enhances details to make your products stand out.
            </p>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ImageCompareDemo; 