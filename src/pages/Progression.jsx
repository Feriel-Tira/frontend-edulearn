import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Progression = () => {
  const location = useLocation();

  const statsData = {
    overallProgress: 75,
    coursesCompleted: 8,
    coursesInProgress: 4,
    totalStudyTime: "156h",
    averageScore: 87,
    streak: 12
  };

  const coursesProgress = [
    { name: "Programmation Python", progress: 85, score: 92 },
    { name: "Mathématiques Avancées", progress: 65, score: 78 },
    { name: "Histoire de l'Art", progress: 45, score: 85 },
    { name: "Développement Web", progress: 30, score: 0 },
    { name: "Data Science", progress: 15, score: 0 },
    { name: "Anglais des Affaires", progress: 100, score: 95 }
  ];

  const achievements = [
    { name: "Étudiant Assidu", icon: "🔥", description: "12 jours consécutifs", earned: true },
    { name: "Rapid Learner", icon: "⚡", description: "Terminer 3 cours en 1 mois", earned: true },
    { name: "Quiz Master", icon: "🏆", description: "Score >90% sur 5 quiz", earned: false },
    { name: "Night Owl", icon: "🌙", description: "Étudier après 22h", earned: true },
    { name: "Early Bird", icon: "🌅", description: "Étudier avant 8h", earned: false },
    { name: "Perfectionniste", icon: "⭐", description: "100% dans un cours", earned: true }
  ];

  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="logo">EDULEARN</div>
        <ul className="nav-menu">
          <li><Link to="/cours">Cours</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/progression" className={location.pathname === '/progression' ? 'nav-active' : ''}>Progression</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="user-profile">
          <Link to="/profil" className="profile-link">
            <div className="profile-pic">NP</div>
            <span>Nom Prénom</span>
          </Link>
        </div>
      </nav>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav>
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <Link 
                  to="/dashboard" 
                  className={`sidebar-link ${location.pathname === '/dashboard' || location.pathname === '/' ? 'active' : ''}`}
                >
                  <span className="sidebar-icon">📊</span>
                  Tableau de bord
                </Link>
              </li>
              <li className="sidebar-item">
                <Link 
                  to="/cours" 
                  className={`sidebar-link ${location.pathname === '/cours' ? 'active' : ''}`}
                >
                  <span className="sidebar-icon">📚</span>
                  Mes cours
                </Link>
              </li>
              <li className="sidebar-item">
                <Link 
                  to="/quiz" 
                  className={`sidebar-link ${location.pathname === '/quiz' ? 'active' : ''}`}
                >
                  <span className="sidebar-icon">✏️</span>
                  Quiz & Évaluations
                </Link>
              </li>
              <li className="sidebar-item">
                <Link 
                  to="/progression" 
                  className={`sidebar-link ${location.pathname === '/progression' ? 'active' : ''}`}
                >
                  <span className="sidebar-icon">📈</span>
                  Progression
                </Link>
              </li>
              <li className="sidebar-item">
                <Link 
                  to="/profil" 
                  className={`sidebar-link ${location.pathname === '/profil' ? 'active' : ''}`}
                >
                  <span className="sidebar-icon">👤</span>
                  Mon profil
                </Link>
              </li>
              <li className="sidebar-item">
                <a href="#deconnexion" className="sidebar-link">
                  <span className="sidebar-icon">🚪</span>
                  Déconnexion
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Header Section */}
          <section className="progression-header">
            <div className="header-content">
              <h1 className="page-title">Ma Progression</h1>
              <p className="page-subtitle">
                Suivez votre évolution, vos performances et vos réalisations
              </p>
            </div>
          </section>

          {/* Overview Stats */}
          <section className="stats-overview">
            <div className="stats-grid">
              <div className="stat-card-progression">
                <div className="stat-icon-progression">📊</div>
                <div className="stat-content-progression">
                  <div className="stat-value-progression">{statsData.overallProgress}%</div>
                  <div className="stat-label-progression">Progression globale</div>
                </div>
              </div>
              
              <div className="stat-card-progression">
                <div className="stat-icon-progression">✅</div>
                <div className="stat-content-progression">
                  <div className="stat-value-progression">{statsData.coursesCompleted}</div>
                  <div className="stat-label-progression">Cours terminés</div>
                </div>
              </div>
              
              <div className="stat-card-progression">
                <div className="stat-icon-progression">⏱️</div>
                <div className="stat-content-progression">
                  <div className="stat-value-progression">{statsData.totalStudyTime}</div>
                  <div className="stat-label-progression">Temps d'étude</div>
                </div>
              </div>
              
              <div className="stat-card-progression">
                <div className="stat-icon-progression">🔥</div>
                <div className="stat-content-progression">
                  <div className="stat-value-progression">{statsData.streak} jours</div>
                  <div className="stat-label-progression">Série actuelle</div>
                </div>
              </div>
            </div>
          </section>

          {/* Courses Progress */}
          <section className="courses-progress-section">
            <h2 className="section-title">Progression par cours</h2>
            <div className="progress-list">
              {coursesProgress.map((course, index) => (
                <div key={index} className="progress-item">
                  <div className="progress-course-info">
                    <h4 className="course-name">{course.name}</h4>
                    <div className="course-stats">
                      <span className="progress-percent">{course.progress}%</span>
                      {course.score > 0 && (
                        <span className="course-score">Score: {course.score}%</span>
                      )}
                    </div>
                  </div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="achievements-section">
            <h2 className="section-title">Réalisations et Badges</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`achievement-card ${achievement.earned ? 'earned' : 'locked'}`}
                >
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <div className="achievement-content">
                    <h4 className="achievement-name">{achievement.name}</h4>
                    <p className="achievement-desc">{achievement.description}</p>
                  </div>
                  <div className="achievement-status">
                    {achievement.earned ? '✅' : '🔒'}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Right Sidebar - Study Analytics */}
        <aside className="right-sidebar">
          <div className="analytics-sidebar">
            <h3 className="stats-title">Analyses d'étude</h3>
            
            <div className="analytics-card">
              <h4>📈 Performance moyenne</h4>
              <div className="analytics-value">{statsData.averageScore}%</div>
              <p>Score moyen sur tous les quiz</p>
            </div>

            <div className="analytics-card">
              <h4>🎯 Objectifs du mois</h4>
              <div className="goal-progress">
                <div className="goal-item">
                  <span>Terminer 2 cours</span>
                  <span className="goal-status">1/2</span>
                </div>
                <div className="goal-item">
                  <span>Score superieur à 85%</span>
                  <span className="goal-status achieved">✅</span>
                </div>
                <div className="goal-item">
                  <span>20h d'étude</span>
                  <span className="goal-status">15/20h</span>
                </div>
              </div>
            </div>

            <div className="analytics-card">
              <h4>📅 Calendrier d'étude</h4>
              <div className="study-calendar">
                <div className="calendar-day active">L</div>
                <div className="calendar-day active">M</div>
                <div className="calendar-day">M</div>
                <div className="calendar-day active">J</div>
                <div className="calendar-day">V</div>
                <div className="calendar-day active">S</div>
                <div className="calendar-day">D</div>
              </div>
              <p className="calendar-note">Jours d'étude cette semaine</p>
            </div>

            <div className="analytics-card">
              <h4>🚀 Prochain objectif</h4>
              <div className="next-goal">
                <div className="goal-progress-bar">
                  <div className="goal-progress-fill" style={{ width: '60%' }}></div>
                </div>
                <p>Terminer "Programmation Python"</p>
                <span className="goal-remaining">40% restant</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Progression;