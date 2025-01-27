import React from 'react';
import { NetworkIcon, CodeIcon, RocketIcon, BrainCog, UserCheck, Cpu } from 'lucide-react';

const AgenticAllianceLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-400">Agentic Alliance</div>
        <nav className="space-x-4">
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#talent" className="hover:text-yellow-400">Talent</a>
          <a href="#contact" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">Contact</a>
        </nav>
      </header>

      <main className="container mx-auto px-4 text-center">
        <section className="mt-20">
          <h1 className="text-5xl font-bold mb-6">Collective Intelligence, <span className="text-yellow-400">Amplified</span>.</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connecting elite AI talent to build transformative intelligent systems across industries.
          </p>
          <div className="mt-10 flex justify-center space-x-6">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-400">
              Find Talent
            </button>
            <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black">
              Join Network
            </button>
          </div>
        </section>

        <section className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded border-b-4 border-yellow-500">
            <NetworkIcon className="mx-auto mb-4 text-yellow-400" size={48} />
            <h3 className="text-2xl font-semibold mb-4">AI Agent Specialists</h3>
            <p>Experts in building intelligent, autonomous AI systems across industries.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded border-b-4 border-yellow-500">
            <CodeIcon className="mx-auto mb-4 text-yellow-400" size={48} />
            <h3 className="text-2xl font-semibold mb-4">Advanced Talent Pool</h3>
            <p>Rigorously vetted professionals in machine learning, NLP, and agent design.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded border-b-4 border-yellow-500">
            <RocketIcon className="mx-auto mb-4 text-yellow-400" size={48} />
            <h3 className="text-2xl font-semibold mb-4">Innovation Focused</h3>
            <p>Connecting cutting-edge talent with companies pushing AI boundaries.</p>
          </div>
        </section>

        <section className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded border-b-4 border-yellow-500">
            <UserCheck className="mx-auto mb-4 text-yellow-400" size={48} />
            <h3 className="text-2xl font-semibold mb-4">AI Sales Talent</h3>
            <p>Specialized sales professionals driving growth through the Rule of 40 - balancing revenue growth and profitability for sustainable success.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded border-b-4 border-yellow-500">
            <BrainCog className="mx-auto mb-4 text-yellow-400" size={48} />
            <h3 className="text-2xl font-semibold mb-4">Cognitive Assessment</h3>
            <p>Advanced AI-powered tools to evaluate cognitive abilities and problem-solving capabilities.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded border-b-4 border-yellow-500">
            <Cpu className="mx-auto mb-4 text-yellow-400" size={48} />
            <h3 className="text-2xl font-semibold mb-4">Skills Assessment</h3>
            <p>Comprehensive AI-driven evaluation of technical and soft skills for perfect role alignment.</p>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        © 2024 Agentic Alliance. All rights reserved.
      </footer>
    </div>
  );
};

export default AgenticAllianceLanding;
