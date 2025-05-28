import React from 'react';
import './Training.css';

const Training = () => {
    const offensivePhases = [
        {
            id: 1,
            title: "Phase 1: Offensive Fundamentals – Build the Foundation",
            skills: [
                "Sharpening Your Striking Form",
                "Technical Follow-Alongs",
                "Speed Development Drills",
                "Power Optimization",
                "Precision Targeting",
                "Flow Session: Reactive Offense"
            ],
            description: "Master the core mechanics and principles of effective striking."
        },
        {
            id: 2,
            title: "Phase 2: Advancing the Arsenal – Take Your Basics Further",
            skills: [
                "Two-Strike Combinations",
                "Beyond the Basics",
                "Combo Construction",
                "Technique Expansion",
                "Transition Mastery",
                "Live Combo Follow-Along"
            ],
            description: "Expand your striking arsenal and develop fluid combinations."
        },
        {
            id: 3,
            title: "Phase 3: Landing Clean Shots – Tactics That Work",
            skills: [
                "Setup Strategies",
                "Mastering the Art of the Fake",
                "Creative Striking Tricks",
                "Weaponize Your Best Strike"
            ],
            description: "Learn advanced tactics to consistently land effective strikes."
        },
        {
            id: 4,
            title: "Phase 4: Drills to Own Your Offense",
            skills: [
                "Five-Step Sparring System",
                "Offense with Head Movement",
                "Double Jab Variations",
                "Confidence Through Repetition"
            ],
            description: "Perfect your offensive game through structured drilling and practice."
        }
    ];

    const defensivePhases = [
        {
            id: 1,
            title: "Phase 1: Foundation – Mastering the Essentials",
            skills: [
                "Blocking & Parrying Fundamentals",
                "Kick Defense Techniques",
                "Knee Defense Mechanics",
                "Avoiding Common Mistakes",
                "Interactive Virtual Sessions",
                "Bonus: Intro to Head Movement"
            ],
            description: "Build your defensive foundation with essential techniques and practical applications."
        },
        {
            id: 2,
            title: "Phase 2: Mental Barriers – Building Comfort Under Pressure",
            skills: [
                "Overcoming the Flinch Reflex",
                "Training Against Full-Force Strikes",
                "Simultaneous Head & Body Coverage",
                "Strategic Impact Zones",
                "Solo Anti-Blinking Drills"
            ],
            description: "Develop mental resilience and physical composure under pressure."
        },
        {
            id: 3,
            title: "Phase 3: Defensive Flow – Gaining Confidence",
            skills: [
                "Reacting to Single Shots",
                "Handling Combos with Poise",
                "Integrating Defense into All Drills",
                "Getting Hit & Recovering",
                "Adding Smart Counters",
                "Virtual Combo Disruption Training"
            ],
            description: "Master the flow of defense and build confidence in your abilities."
        },
        {
            id: 4,
            title: "Phase 4: Using Defense to Pressure",
            skills: [
                "How to Enter Safely",
                "Efficient Defense for Energy Control",
                "Identifying Openings Mid-Defense",
                "Forward Pressure with Confidence",
                "Fight Study: Defensive Offense in Action"
            ],
            description: "Learn to turn defense into offensive opportunities."
        },
        {
            id: 5,
            title: "Phase 5: Defense Drills for Mastery",
            skills: [
                "Defensive Shadowboxing",
                "Shoring Up Weak Spots",
                "Partner Combo Drill Sets",
                "3-Step Sparring Progressions",
                "Wall Sparring Scenarios"
            ],
            description: "Perfect your defense through specialized drills and scenarios."
        },
        {
            id: 6,
            title: "Bonus Module: Diverse Guard Systems",
            skills: [
                "Dutch-Style Shell",
                "Extended Long Guard",
                "Russian Frame Defense",
                "Philly Shell Breakdown",
                "MMA-Specific Defense"
            ],
            description: "Explore and master various defensive guard systems."
        }
    ];

    const TrainingPath = ({ title, description, phases }) => (
        <div className="training-path">
            <div className="path-header">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="roadmap-grid">
                {phases.map((phase) => (
                    <div key={phase.id} className="level-card">
                        <div className="level-header">
                            <span className="level-number">Phase {phase.id}</span>
                            <h3>{phase.title.split('–')[0]}</h3>
                            <span className="phase-subtitle">{phase.title.split('–')[1]}</span>
                        </div>
                        <p className="phase-description">{phase.description}</p>
                        <div className="level-content">
                            <ul>
                                {phase.skills.map((skill, index) => (
                                    <li key={index}>
                                        <span className="skill-bullet">→</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="training-page">
            <div className="training-header">
                <div className="header-content">
                    <h1>Complete Combat Training</h1>
                    <p>Master both offensive and defensive aspects of combat sports with our comprehensive training system.</p>
                </div>
            </div>

            <div className="training-paths-container">
                <TrainingPath
                    title="Offensive Mastery Program"
                    description="Develop devastating striking abilities with our systematic approach to offensive training."
                    phases={offensivePhases}
                />
                <TrainingPath
                    title="Defensive Mastery Program"
                    description="Master the art of combat sports defense with our comprehensive, phase-based training system."
                    phases={defensivePhases}
                />
            </div>
        </div>
    );
};

export default Training; 