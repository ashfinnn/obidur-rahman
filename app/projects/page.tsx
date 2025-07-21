// app/projects/page.tsx
import Link from 'next/link';
import { allProjectsData } from '../components/lib/data';
import { Project } from '../components/lib/types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectCard = ({ item }: { item: Project }) => (
    <div className="glass-dark p-8 border border-black/10 hover-lift">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-blue-500"></div>
            <span className="font-mono text-xs tracking-wider opacity-60">{item.label}</span>
        </div>
        <h4 className="font-orbitron text-xl font-bold mb-3">{item.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.subtitle}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag: string) => (
                <span key={tag} className="px-2 py-1 bg-black/5 text-gray-700 font-mono text-xs border border-black/10">{tag}</span>
            ))}
        </div>
        {item.stats && (
            <div className="grid grid-cols-2 gap-4 mt-4 font-mono text-xs">
                {item.stats.map((stat: { label: string; value: string }) => (
                    <div key={stat.label} className="flex justify-between">
                        <span className="text-gray-600">{stat.label}</span>
                        <span className="font-bold">{stat.value}</span>
                    </div>
                ))}
            </div>
        )}
        {item.link && (
            <Link href={item.link} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 mt-4 font-mono text-sm hover:text-gray-600 transition-colors">
                <span>VIEW.DETAILS</span>
                <span>→</span>
            </Link>
        )}
    </div>
);


export default function AllProjectsPage() {
    const categories = Object.values(allProjectsData) as { title: string; items: Project[] }[];

    return (
        <>
            <Header />
            <main className="px-8 lg:px-16 py-32 pt-40 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 overflow-hidden">
                        <h1 className="font-orbitron text-5xl lg:text-7xl font-black mb-8 text-shadow-sharp">
                            PROJECT.ARCHIVE
                        </h1>
                        <div className="w-32 h-1 bg-black mb-6"></div>
                        <p className="text-gray-600 max-w-2xl text-lg">
                            A complete archive of my technical projects, certifications, and development work.
                        </p>
                    </div>

                    {categories.map(category => (
                        <section key={category.title} className="mb-20">
                            <h2 className="font-orbitron text-3xl font-bold mb-8">{category.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {category.items.map(item => (
                                    <ProjectCard key={item.title} item={item} />
                                ))}
                            </div>
                        </section>
                    ))}

                    <div className="text-center mt-20 pt-16 border-t border-black/10">
                        <Link href="/"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-mono text-sm tracking-wider hover:bg-gray-800 transition-all">
                            <span>←</span>
                            <span>BACK.TO.HOME</span>
                        </Link>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}