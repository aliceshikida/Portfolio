import { motion } from 'framer-motion';
import { 
SiNodedotjs, 
SiReact, 
SiJest, 
SiLeaflet, 
SiJavascript, 
SiTailwindcss, 
SiPython,
SiMongodb,
SiExpress,
SiFirebase,
SiGit,
SiTypescript,
SiHtml5,
SiCss3
} from 'react-icons/si';

const iconMap = {
'Node.js': SiNodedotjs,
'React': SiReact,
'Jest': SiJest,
'Leaflet': SiLeaflet,
'GeoLib': SiJavascript,
'JavaScript': SiJavascript,
'Tailwind CSS': SiTailwindcss,
'Python': SiPython,
'MongoDB': SiMongodb,
'Express': SiExpress,
'Firebase': SiFirebase,
'Git': SiGit,
'TypeScript': SiTypescript,
'HTML5': SiHtml5,
'CSS3': SiCss3,
};

const TechBadge = ({ name }) => {
const Icon = iconMap[name] || SiJavascript;

return (
  <motion.div
    className="relative group"
    whileHover={{ scale: 1.15, y: -5 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="px-4 py-2 bg-secondary/50 border border-primary/30 rounded-lg flex items-center gap-2 group-hover:bg-primary/20 group-hover:border-primary transition-all">
      <Icon className="text-primary group-hover:text-white transition-colors" size={20} />
      <span className="text-sm font-mono text-white">{name}</span>
    </div>
    
    {/* Glow effect on hover */}
    <motion.div
      className="absolute inset-0 bg-primary/20 rounded-lg blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
    />
  </motion.div>
);
};

export default TechBadge;