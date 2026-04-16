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
import { ExpCard } from '@/components/ExpCard';
import { ToolCard } from '@/components/ToolCard';

// Constants
import { education, experience, tools } from '@/constants';

export const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='resume'
    >
      <SectionHeader
        subtitle='Resume'
        title='Education and pratical experience.'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        I hold a Bachelor’s degree in Information Systems, which provided me
        with a strong foundation in software development, systems analysis,
        databases, and software engineering principles. This academic background
        supported my transition into full-stack development and strengthened my
        ability to design scalable and maintainable solutions.
      </motion.p>

      <div className='grid gap-x-10 my-16 md:grid-cols-2'>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>

          <div className='space-y-8 border-l border-neutral-700 pl-6'>
            {education.map((item, i) => (
              <ExpCard
                key={i}
                item={item}
              />
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className='text-3xl font-semibold mb-8'>Work Experience</h2>

          <div className='space-y-8 border-l border-border pl-6'>
            {experience.map((item, i) => (
              <ExpCard
                key={i}
                item={item}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className='my-16'>
        <motion.h2
          variants={fadeUp}
          className='text-3xl font-semibold mb-8 capitalize'
        >
          My favorite tools
        </motion.h2>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.5)}
          className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5'
        >
          {tools.map((tool, i) => (
            <ToolCard key={i} tool={tool}/>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
