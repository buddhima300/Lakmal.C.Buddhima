import React from 'react';
import { GraduationCapIcon, CalendarIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';
export const Education = () => {
  return <section id="education" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-purple-600 blur-[100px] opacity-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        <GlassCard className="max-w-3xl mx-auto p-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center">
              <GraduationCapIcon size={32} className="text-blue-400" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">
                B.Sc. in Computer Science
              </h3>
              <h4 className="text-xl text-white/80 mb-3">
                University of Technology
              </h4>
              <div className="flex items-center justify-center md:justify-start text-white/60 mb-4">
                <CalendarIcon size={16} className="mr-2" />
                <span>2017 - 2021</span>
              </div>
              <p className="text-white/70">
                Graduated with honors, specializing in software engineering and
                artificial intelligence. Completed a capstone project developing
                a machine learning application for predictive analytics.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <h4 className="text-lg font-semibold mb-4">Relevant Coursework</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg text-sm text-white/80 border border-white/10">
                Data Structures & Algorithms
              </div>
              <div className="px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg text-sm text-white/80 border border-white/10">
                Software Engineering
              </div>
              <div className="px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg text-sm text-white/80 border border-white/10">
                Database Systems
              </div>
              <div className="px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg text-sm text-white/80 border border-white/10">
                Web Development
              </div>
              <div className="px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg text-sm text-white/80 border border-white/10">
                Artificial Intelligence
              </div>
              <div className="px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg text-sm text-white/80 border border-white/10">
                Computer Networks
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>;
};