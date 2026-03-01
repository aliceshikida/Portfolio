// ARQUIVO: src/components/TechBadge.jsx
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
    SiFirebase,
    SiGit,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiMysql,
    SiSpringboot,
    SiPostman,
    SiJunit5,
    SiApachemaven,
    SiSqlite,
    SiVitest,
    SiC,
    SiNextdotjs,
    SiGithub,
    SiGitlab,
    SiSonarqube,
    SiKnexdotjs,
    SiPostgresql,
    SiDotnet,
    SiBootstrap,
    SiWordpress,
    SiChartdotjs,
    SiAdobecreativecloud,
    SiTodoist,
    SiJira,
    SiTrello,
    SiSwift,
    SiAdobephotoshop, SiFigma, SiAdobeillustrator,
} from 'react-icons/si';

import {
    FaJava,
} from 'react-icons/fa';
import {VscAzure} from "react-icons/vsc";
import {RiSupabaseLine} from "react-icons/ri";

// Mapa atualizado

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
    'Supabase': RiSupabaseLine,
    'Git': SiGit,
    'Github': SiGithub,
    'Gitlab': SiGitlab,

    'TypeScript': SiTypescript,
    'HTML5': SiHtml5,
    'CSS3': SiCss3,
    'Next.js': SiNextdotjs,
    'Java': FaJava,
    'Spring Boot': SiSpringboot,
    'MySQL': SiMysql,
    'Postman': SiPostman,
    'Junit': SiJunit5,
    'Maven': SiApachemaven,
    'SCSS': SiCss3,
    'SQLite': SiSqlite,
    'Knex.js': SiKnexdotjs,
    'Vitest': SiVitest,
    'SonarQube':SiSonarqube,
    'C': SiC,
    'PostgreSQL': SiPostgresql,
    'Azure':VscAzure,
    'Firebase':SiFirebase,
    '.Net':SiDotnet,
    'Bootstrap':SiBootstrap,
    'Wordpress': SiWordpress,
    'Chart.js': SiChartdotjs,
    'AdobeCC': SiAdobecreativecloud,
    'AdobeAI':SiAdobeillustrator,
    'AdobePS':SiAdobephotoshop,
    'Figma': SiFigma,
    'Swift': SiSwift,
    'Trello':SiTrello,
    'Jira': SiJira,
    'Todoist':SiTodoist

};

// Mudei o nome de Technologies para TechBadge aqui
const TechBadge = ({ name }) => {
    const Icon = iconMap[name] || SiJavascript;

    return (
        <motion.div
            className="relative group cursor-default"
            whileHover={{ scale: 1.15, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="px-4 py-2 bg-secondary/50 border border-primary/30 rounded-lg flex items-center gap-2 group-hover:bg-primary/20 group-hover:border-primary transition-all">
                <Icon className="text-primary group-hover:text-white transition-colors" size={20} />
                <span className="text-sm font-mono text-white whitespace-nowrap">{name}</span>
            </div>

            <motion.div
                className="absolute inset-0 bg-primary/20 rounded-lg blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            />
        </motion.div>
    );
};

export default TechBadge;