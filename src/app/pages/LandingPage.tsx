import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { 
  Sparkles, 
  Wand2, 
  Zap, 
  Film, 
  Play, 
  ArrowRight,
  Video,
  Scissors,
  Palette
} from "lucide-react";

export function LandingPage() {
  const [introComplete, setIntroComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {!introComplete ? (
          <IntroAnimation key="intro" />
        ) : (
          <MainContent key="main" navigate={navigate} />
        )}
      </AnimatePresence>
    </div>
  );
}

function IntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-blue-900"
    >
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Logo animation */}
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Film className="w-32 h-32 text-purple-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]" />
          </motion.div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl font-black mt-8 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          VISIONAI
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl text-center mt-4 text-purple-300"
        >
          Redefining Video Editing
        </motion.p>
      </div>
    </motion.div>
  );
}

function MainContent({ navigate }: { navigate: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      {/* Animated background */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        </div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 backdrop-blur-lg bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-2"
          >
            <Film className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              VISIONAI
            </span>
          </motion.div>
          
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 rounded-full text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Edit Videos
                <br />
                Like Magic
              </h1>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            AI-powered video editing for everyone. No experience needed.
            <br />
            Professional results in minutes.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate("/signup")}
              className="px-12 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all"
            >
              Start Editing Free
            </button>
            <button className="px-8 py-4 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 text-white text-lg font-bold hover:bg-white/20 transition-all flex items-center gap-2 justify-center">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-32">
          {[
            {
              icon: Wand2,
              title: "AI-Powered Editing",
              description: "Let AI handle the tedious work. Automatic cuts, transitions, and effects.",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Render videos in seconds, not hours. Optimized for speed and quality.",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: Sparkles,
              title: "Professional Results",
              description: "Hollywood-grade effects and transitions with zero learning curve.",
              gradient: "from-pink-500 to-orange-500",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-white/20 transition-all">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                {/* 3D Icon */}
                <motion.div
                  animate={{
                    rotateY: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.3)]`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-400">
            Pay only for AI tokens you use. No subscriptions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Video className="w-8 h-8 text-purple-500" />
              <h3 className="text-2xl font-bold">Free Tier</h3>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-black">$0</span>
              <span className="text-gray-400 ml-2">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                Basic editing tools
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                Export up to 720p
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                50 AI tokens/month
              </li>
            </ul>
            <button className="w-full py-3 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all">
              Start Free
            </button>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-xs font-bold">
              POPULAR
            </div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold">Pay As You Go</h3>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-black">$0.01</span>
              <span className="text-gray-400 ml-2">/AI token</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                All editing features
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Export up to 4K
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Unlimited AI tokens
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Priority rendering
              </li>
            </ul>
            <button
              onClick={() => navigate("/signup")}
              className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 mb-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-3xl p-16 text-center relative overflow-hidden"
        >
          {/* Animated background elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"
          />
          
          <div className="relative z-10">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Create?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already using AI to make stunning videos.
            </p>
            <button
              onClick={() => navigate("/signup")}
              className="px-12 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all"
            >
              Start Editing Now
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
