import { useEffect, useState } from "react";

function Projects() {

    const [projects, setProjects] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        fetch("http://localhost:5000/api/portfolio/projects")

            .then((response) => {

                if (!response.ok) {
                    throw new Error("Failed to load projects");
                }

                return response.json();
            })

            .then((data) => {

                setProjects(data.data || []);
                setLoading(false);
            })

            .catch((error) => {

                console.error(error);
                setError("Unable to load projects.");
                setLoading(false);
            });

    }, []);


    const categories = [
        "All",
        ...new Set(projects.map((project) => project.category))
    ];


    const filteredProjects = projects.filter((project) => {

        const matchesSearch =
            project.title
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            project.description
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            project.technologies.some((technology) =>
                technology
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );


        const matchesCategory =
            category === "All" ||
            project.category === category;


        return matchesSearch && matchesCategory;
    });


    if (loading) {

        return (
            <section className="projects-section" id="projects">

                <div className="section-heading">
                    <span>MY WORK</span>
                    <h2>Featured Projects</h2>
                </div>

                <div className="projects-loading">
                    Loading projects...
                </div>

            </section>
        );
    }


    if (error) {

        return (
            <section className="projects-section" id="projects">

                <div className="section-heading">
                    <span>MY WORK</span>
                    <h2>Featured Projects</h2>
                </div>

                <p className="project-error">
                    {error}
                </p>

            </section>
        );
    }


    return (
        <section className="projects-section" id="projects">

            <div className="section-heading">

                <span>MY WORK</span>

                <h2>Featured Projects</h2>

                <p>
                    A collection of projects built using modern
                    technologies, AI and full-stack development.
                </p>

            </div>


            <div className="project-stats">

                <div>
                    <strong>{projects.length}+</strong>
                    <span>Projects</span>
                </div>

                <div>
                    <strong>
                        {new Set(
                            projects.flatMap(
                                (project) => project.technologies
                            )
                        ).size}+
                    </strong>

                    <span>Technologies</span>
                </div>

                <div>
                    <strong>
                        {projects.filter(
                            (project) => project.featured
                        ).length}
                    </strong>

                    <span>Featured</span>
                </div>

            </div>


            <div className="project-controls">

                <input
                    type="text"
                    placeholder="Search projects..."
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                />


                <div className="category-buttons">

                    {categories.map((item) => (

                        <button
                            key={item}
                            className={
                                category === item
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                setCategory(item)
                            }
                        >
                            {item}
                        </button>

                    ))}

                </div>

            </div>


            <div className="projects-grid">

                {filteredProjects.length > 0 ? (

                    filteredProjects.map((project) => (

                        <article
                            className="project-card"
                            key={project._id}
                        >

                            {project.featured && (
                                <div className="featured-badge">
                                    ★ Featured
                                </div>
                            )}


                            <div className="project-card-top">

                                <span className="project-category">
                                    {project.category}
                                </span>

                            </div>


                            <h3>{project.title}</h3>


                            <p>
                                {project.description}
                            </p>


                            <div className="technology-list">

                                {project.technologies.map(
                                    (technology, index) => (

                                        <span key={index}>
                                            {technology}
                                        </span>

                                    )
                                )}

                            </div>


                            <div className="project-actions">

                                {project.github ? (

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub ↗
                                    </a>

                                ) : (

                                    <span className="not-available">
                                        GitHub
                                    </span>

                                )}


                                {project.liveDemo ? (

                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Live Demo ↗
                                    </a>

                                ) : (

                                    <span className="not-available">
                                        Live Demo
                                    </span>

                                )}

                            </div>

                        </article>

                    ))

                ) : (

                    <div className="no-projects">
                        <h3>No projects found</h3>
                        <p>
                            Try another search or category.
                        </p>
                    </div>

                )}

            </div>

        </section>
    );
}

export default Projects;