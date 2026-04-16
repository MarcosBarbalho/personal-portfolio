/**
 * @copyright 2026 Marcos Barbalho
 * @license Apache-2.0
 */

// Node Modules
import { motion } from 'motion/react';

// Custom Modules
import { staggerContainer, fadeUp } from '@/lib/animations';

// Components
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Building scalable, clean, and user-focused web applications.'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        I’m a Full Stack Developer with seven years of experience and strong
        expertise in Web Development. I build scalable backend systems, APIs,
        and event-driven architectures, and I also have frontend experience
        working with React and Vue. I’ve acted as the primary developer on
        projects, taking end-to-end ownership from design to deployment, with a
        strong focus on automated testing, performance, and clean architecture.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        I worked on the development and automation of digital solutions focused
        on online communication and sales, with strong emphasis on operational
        efficiency and user experience. I automated WhatsApp messaging workflows
        and chatbot-based customer service, improving customer engagement at
        scale. I also developed and maintained systems for online sales
        processing, handling digital transactions and ensuring security and data
        protection best practices. Additionally, I integrated with international
        airlines via external APIs for booking and ticketing flows, and
        collaborated with multinational, multidisciplinary teams, ensuring clear
        communication and reliable delivery across different time zones.
      </motion.p>

      <motion.div variants={fadeUp} transition={{delay:0.2}}>
        <Button className='mt-5'>Contact Me</Button>
      </motion.div>
    </motion.section>
  );
};
