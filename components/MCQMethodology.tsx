import React from "react";
import { Target, BarChart3, Binary, ShieldCheck, ChevronRight } from "lucide-react";

export const MCQMethodology: React.FC = () => {
	const steps = [
		{
			title: "Syllabus Decomposition",
			icon: <Target className="w-6 h-6 text-blue-400" />,
			description:
				"We break the GS syllabus into 380+ Micro-Themed MCQs. Questions are mapped to granular sub-topics to ensure zero-gap coverage of the official UPSC notification.",
		},
		{
			title: "Negative Marking Optimization",
			icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
			description:
				"MCQs are designed to train risk-aware decision-making, improving attempt quality through elimination logic rather than blind guessing under negative marking constraints",
		},
		{
			title: "Cognitive Distractor Design",
			icon: <Binary className="w-6 h-6 text-emerald-400" />,
			description:
				"Incorrect options are not random. They are engineered to reflect common misconceptions, testing your ability to distinguish subtle conceptual nuances.",
		},
		{
			title: "Multi-Layered Validation",
			icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
			description:
				"Every item undergoes fact-verification against primary sources (NCERT, Gazette, PRS) and a logic-gate check to ensure absolute accuracy.",
		},
	];

	return (
		<section className="bg-slate-950 text-slate-200 py-16 px-6 font-sans">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="mb-12 border-l-4 border-blue-600 pl-6">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						The MCQ Engineering Process
					</h2>
					<p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
						Our faculty utilizes a data-driven framework to convert raw
						syllabus topics into high-fidelity practice questions that mirror
						the actual UPSC environment.
					</p>
				</div>

				{/* Steps Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{steps.map((step, index) => (
						<div
							key={index}
							className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-slate-600 transition-colors duration-300 shadow-xl"
						>
							<div className="flex items-center mb-4">
								<div className="p-3 bg-slate-800 rounded-lg mr-4">
									{step.icon}
								</div>
								<h3 className="text-xl font-semibold text-white tracking-tight">
									{step.title}
								</h3>
							</div>
							<p className="text-slate-400 leading-relaxed">
								{step.description}
							</p>
						</div>
					))}
				</div>

				{/* Technical Footer */}
				<div className="mt-16 bg-blue-900/10 border border-blue-900/30 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between">
					<div>
						<h4 className="text-white font-semibold text-lg mb-2">
							Ready to test your clarity?
						</h4>
						<p className="text-slate-400">
							Experience questions designed with the 'Administrative Logic'
							framework.
						</p>
					</div>
					<button className="mt-6 md:mt-0 flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
						Explore Topic-wise MCQs
						<ChevronRight className="ml-2 w-5 h-5" />
					</button>
				</div>
			</div>
		</section>
	);
};

