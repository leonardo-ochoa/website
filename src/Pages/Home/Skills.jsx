import data from "../../data/index.json";

export default function Skills() {
    return (
        <section className="skills-section" id="mySkills">
            <div className="portfolio-container">
                <p className="section-title">My Skills</p>
            </div>
            <div className="skills-section-container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills-section-card">
                        <div className="skills-section-img">
                            <img src={item.src} alt="skills"/>
                        </div>
                        <div className="skills-section-card-content">
                            <h3 className="skills-section-title">{item.title}</h3>
                            <p className="skills-section-description">{item.description}</p>
                        </div>
                    </div>

                ))}
            </div>

        </section>
    );
}