
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoreValues from "@/components/about/CoreValues";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-apple-gray-800 mb-6">关于我们</h1>
          <p className="text-lg text-apple-gray-600 max-w-2xl mx-auto">
            Homywork 致力于通过AI技术赋能卖家，助力跨境电商业务实现全球化增长
          </p>
        </div>
      </section>
      
      {/* Mission & Vision Section (Placeholder) */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-medium text-apple-gray-800 mb-6">我们的使命</h2>
              <p className="text-apple-gray-600 leading-relaxed">
                通过智能化AI技术，消除语言和文化障碍，让全球跨境电商卖家能够轻松进入任何市场，实现无缝的全球化业务扩张。
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-medium text-apple-gray-800 mb-6">我们的愿景</h2>
              <p className="text-apple-gray-600 leading-relaxed">
                成为跨境电商领域的创新引领者，打造一个没有国界的全球商业生态系统，让每一位卖家都能在全球舞台上蓬勃发展。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <CoreValues />
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;
