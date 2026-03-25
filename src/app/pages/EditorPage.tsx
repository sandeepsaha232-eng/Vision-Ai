import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import {
  Film,
  Upload,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Maximize,
  Scissors,
  Wand2,
  Sparkles,
  Type,
  Palette,
  Music,
  Trash2,
  Download,
  Settings,
  User,
  LogOut,
  Coins,
  Zap,
  Layers,
  Image as ImageIcon,
  Video,
  Edit3,
  Plus,
  Check,
  Loader2,
} from "lucide-react";

export function EditorPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [aiTokens, setAiTokens] = useState(50);
  const [activeAITool, setActiveAITool] = useState<string | null>(null);
  const [processingAI, setProcessingAI] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleAIAction = (toolName: string, cost: number) => {
    if (aiTokens >= cost) {
      setProcessingAI(true);
      setActiveAITool(toolName);
      
      // Simulate AI processing
      setTimeout(() => {
        setAiTokens(prev => prev - cost);
        setProcessingAI(false);
        setActiveAITool(null);
      }, 2000);
    }
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden">
      {/* Top Navbar */}
      <nav className="backdrop-blur-xl bg-black/50 border-b border-white/10 px-6 py-3 flex items-center justify-between z-20">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Film className="w-6 h-6 text-purple-500" />
            <span className="text-xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              VISIONAI
            </span>
          </motion.div>
          
          <div className="h-6 w-px bg-white/10" />
          
          <span className="text-gray-400 text-sm">Untitled Project</span>
        </div>

        <div className="flex items-center gap-4">
          {/* AI Tokens Display */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 flex items-center gap-2"
          >
            <Coins className="w-4 h-4 text-yellow-400" />
            <span className="font-bold">{aiTokens}</span>
            <span className="text-xs text-gray-400">AI Tokens</span>
            <button className="ml-2 px-3 py-1 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors text-xs font-bold">
              Buy More
            </button>
          </motion.div>

          {/* User Menu */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center border-2 border-white/20"
            >
              <User className="w-5 h-5" />
            </motion.button>

            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-48 backdrop-blur-xl bg-black/80 border border-white/10 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                >
                  <button className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                  <button
                    onClick={() => navigate("/")}
                    className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors flex items-center gap-2 text-red-400"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col p-4 gap-4 overflow-hidden">
          {/* Video Preview */}
          <div className="flex-1 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden group">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
            
            {/* Upload state */}
            <div className="relative z-10 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-6"
              >
                <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.5)]">
                  <Upload className="w-16 h-16 text-white" />
                </div>
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Drop your video here
              </h3>
              <p className="text-gray-400 mb-6">or click to browse</p>
              
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all">
                Select Video
              </button>
            </div>

            {/* Playback controls overlay */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="backdrop-blur-xl bg-black/50 border border-white/10 rounded-xl p-3 flex items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all flex items-center justify-center"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </button>
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <SkipForward className="w-5 h-5" />
                </button>
                
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                </div>
                
                <span className="text-sm text-gray-400">0:00 / 0:00</span>
                
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Volume2 className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="h-48 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm text-gray-400">Timeline</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <Scissors className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              {/* Video track */}
              <div className="h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center px-3 gap-2">
                <Video className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Video Track</span>
              </div>
              
              {/* Audio track */}
              <div className="h-12 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center px-3 gap-2">
                <Music className="w-4 h-4 text-green-400" />
                <span className="text-sm">Audio Track</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - AI Controls */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-80 backdrop-blur-xl bg-black/50 border-l border-white/10 overflow-y-auto"
        >
          <div className="p-6 space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-black mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Tools
              </h2>
              <p className="text-sm text-gray-400">
                Enhance your video with AI
              </p>
            </div>

            {/* AI Tools Grid */}
            <div className="space-y-3">
              {/* Auto Captions */}
              <AIToolCard
                icon={Type}
                title="Auto Captions"
                description="Generate accurate captions automatically"
                cost={5}
                active={activeAITool === "captions"}
                processing={processingAI && activeAITool === "captions"}
                onClick={() => handleAIAction("captions", 5)}
              />

              {/* Smart Cuts */}
              <AIToolCard
                icon={Scissors}
                title="Smart Cuts"
                description="AI removes silences and pauses"
                cost={3}
                active={activeAITool === "cuts"}
                processing={processingAI && activeAITool === "cuts"}
                onClick={() => handleAIAction("cuts", 3)}
              />

              {/* Color Grading */}
              <AIToolCard
                icon={Palette}
                title="AI Color Grade"
                description="Cinematic color correction"
                cost={4}
                active={activeAITool === "color"}
                processing={processingAI && activeAITool === "color"}
                onClick={() => handleAIAction("color", 4)}
              />

              {/* Audio Enhancement */}
              <AIToolCard
                icon={Music}
                title="Audio Enhance"
                description="Remove noise, balance audio"
                cost={3}
                active={activeAITool === "audio"}
                processing={processingAI && activeAITool === "audio"}
                onClick={() => handleAIAction("audio", 3)}
              />

              {/* Background Removal */}
              <AIToolCard
                icon={ImageIcon}
                title="Remove Background"
                description="AI background replacement"
                cost={6}
                active={activeAITool === "background"}
                processing={processingAI && activeAITool === "background"}
                onClick={() => handleAIAction("background", 6)}
              />

              {/* Scene Detection */}
              <AIToolCard
                icon={Layers}
                title="Scene Detection"
                description="Auto-detect and split scenes"
                cost={2}
                active={activeAITool === "scenes"}
                processing={processingAI && activeAITool === "scenes"}
                onClick={() => handleAIAction("scenes", 2)}
              />

              {/* AI Transitions */}
              <AIToolCard
                icon={Sparkles}
                title="Smart Transitions"
                description="Add smooth AI transitions"
                cost={4}
                active={activeAITool === "transitions"}
                processing={processingAI && activeAITool === "transitions"}
                onClick={() => handleAIAction("transitions", 4)}
              />

              {/* AI Effects */}
              <AIToolCard
                icon={Wand2}
                title="AI Effects"
                description="Apply cinematic effects"
                cost={5}
                active={activeAITool === "effects"}
                processing={processingAI && activeAITool === "effects"}
                onClick={() => handleAIAction("effects", 5)}
              />

              {/* Smart Zoom */}
              <AIToolCard
                icon={Zap}
                title="Smart Zoom"
                description="Dynamic zoom on subjects"
                cost={3}
                active={activeAITool === "zoom"}
                processing={processingAI && activeAITool === "zoom"}
                onClick={() => handleAIAction("zoom", 3)}
              />

              {/* Object Tracking */}
              <AIToolCard
                icon={Edit3}
                title="Object Tracking"
                description="Track and blur objects"
                cost={7}
                active={activeAITool === "tracking"}
                processing={processingAI && activeAITool === "tracking"}
                onClick={() => handleAIAction("tracking", 7)}
              />
            </div>

            {/* Export Section */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Export Video
              </button>
              
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Export Quality</span>
                  <span className="text-sm font-bold text-purple-400">720p</span>
                </div>
                <p className="text-xs text-gray-500">
                  Upgrade to export in 1080p or 4K
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Processing Overlay */}
      <AnimatePresence>
        {processingAI && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-4"
              >
                <Loader2 className="w-16 h-16 text-purple-500" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">AI Processing...</h3>
              <p className="text-gray-400">This will take a few seconds</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AIToolCardProps {
  icon: any;
  title: string;
  description: string;
  cost: number;
  active?: boolean;
  processing?: boolean;
  onClick: () => void;
}

function AIToolCard({ icon: Icon, title, description, cost, active, processing, onClick }: AIToolCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full text-left backdrop-blur-lg border rounded-xl p-4 transition-all relative overflow-hidden group ${
        active
          ? "bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/50"
          : "bg-white/5 border-white/10 hover:border-white/20"
      }`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <Icon className="w-5 h-5 text-white" />
          </div>
          
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 border border-yellow-500/30">
            <Coins className="w-3 h-3 text-yellow-400" />
            <span className="text-xs font-bold text-yellow-400">{cost}</span>
          </div>
        </div>
        
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-xs text-gray-400">{description}</p>
        
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 flex items-center gap-2 text-green-400 text-xs"
          >
            {processing ? (
              <>
                <Loader2 className="w-3 h-3 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Check className="w-3 h-3" />
                Applied
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.button>
  );
}
