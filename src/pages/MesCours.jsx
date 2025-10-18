import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const MesCours = () => {
  const [user] = useState({
    name: "Nom Prénom",
    profileInitials: "NP"
  });

  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('tous');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'tous', name: 'Tous les cours', count: 12 },
    { id: 'en-cours', name: 'En cours', count: 5 },
    { id: 'termines', name: 'Terminés', count: 3 },
    { id: 'nouveaux', name: 'Nouveaux', count: 4 },
    { id: 'favoris', name: 'Favoris', count: 2 }
  ];

  const allCourses = [
    {
      id: 1,
      title: "Introduction à la Programmation Python",
      description: "Maîtrisez les bases de la programmation avec Python. Variables, boucles, fonctions et premiers projets.",
      category: "en-cours",
      progress: 65,
      duration: "15h",
      lessons: 24,
      level: "Débutant",
      instructor: "Dr. Marie Martin",
      rating: 4.8,
      students: 1247,
      image: "🐍",
      isFavorite: true,
      lastAccessed: "Il y a 2 jours"
    },
    {
      id: 2,
      title: "Mathématiques Avancées pour l'Ingénierie",
      description: "Algèbre linéaire, calcul différentiel et intégral avec applications pratiques en ingénierie.",
      category: "en-cours",
      progress: 40,
      duration: "30h",
      lessons: 42,
      level: "Intermédiaire",
      instructor: "Prof. Alain Dubois",
      rating: 4.6,
      students: 856,
      image: "🧮",
      isFavorite: false,
      lastAccessed: "Il y a 5 jours"
    },
    {
      id: 3,
      title: "Histoire de l'Art Moderne",
      description: "Explorez les mouvements artistiques du 20ème siècle de l'impressionnisme au contemporain.",
      category: "en-cours",
      progress: 20,
      duration: "20h",
      lessons: 18,
      level: "Débutant",
      instructor: "Dr. Sophie Lambert",
      rating: 4.9,
      students: 2103,
      image: "🎨",
      isFavorite: true,
      lastAccessed: "Aujourd'hui"
    },
    {
      id: 4,
      title: "Développement Web Full Stack",
      description: "Apprenez à créer des applications web complètes avec HTML, CSS, JavaScript et Node.js.",
      category: "nouveaux",
      progress: 0,
      duration: "40h",
      lessons: 56,
      level: "Intermédiaire",
      instructor: "M. Thomas Leroy",
      rating: 4.7,
      students: 3120,
      image: "💻",
      isFavorite: false,
      lastAccessed: "Jamais"
    },
    {
      id: 5,
      title: "Data Science Fundamentals",
      description: "Introduction aux données, statistiques et machine learning avec Python et pandas.",
      category: "nouveaux",
      progress: 0,
      duration: "35h",
      lessons: 48,
      level: "Intermédiaire",
      instructor: "Dr. Pierre Moreau",
      rating: 4.8,
      students: 1895,
      image: "📊",
      isFavorite: false,
      lastAccessed: "Jamais"
    },
    {
      id: 6,
      title: "Anglais des Affaires",
      description: "Perfectionnez votre anglais professionnel pour le monde des affaires international.",
      category: "termines",
      progress: 100,
      duration: "25h",
      lessons: 32,
      level: "Intermédiaire",
      instructor: "Mme. Jennifer Smith",
      rating: 4.9,
      students: 4287,
      image: "🇬🇧",
      isFavorite: true,
      lastAccessed: "Il y a 1 mois"
    }
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesFilter = activeFilter === 'tous' || course.category === activeFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleFavorite = (courseId) => {
    // Implémentation de la fonctionnalité favoris
    console.log('Toggle favorite:', courseId);
  };

  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="logo">EDULEARN</div>
        <ul className="nav-menu">
          <li><Link to="/cours" className={location.pathname === '/cours' ? 'nav-active' : ''}>Cours</Link></li>
          <li><Link to="/quiz" className={location.pathname === '/quiz' ? 'nav-active' : ''}>Quiz</Link></li>
          <li><Link to="/progression" className={location.pathname === '/progression' ? 'nav-active' : ''}>Progression</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="user-profile">
          <Link to="/profil" className="profile-link">
            <div className="profile-pic">{user.profileInitials}</div>
            <span>{user.name}</span>
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
          <section className="courses-header">
            <div className="header-content">
              <h1 className="page-title">Mes Cours</h1>
              <p className="page-subtitle">
                Retrouvez tous vos cours, suivez votre progression et découvrez de nouveaux contenus.
              </p>
            </div>
            
            <div className="header-actions">
              <div className="search-bar">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Rechercher un cours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button">🔍</button>
              </div>
              <button className="filter-button">
                <span>🎛️</span>
                Filtres
              </button>
            </div>
          </section>

          {/* Categories Filter */}
          <section className="categories-section">
            <div className="categories-list">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  <span className="category-name">{category.name}</span>
                  <span className="category-count">{category.count}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Courses Grid */}
          <section className="courses-grid-section">
            <div className="courses-header-info">
              <h2 className="section-title">
                {activeFilter === 'tous' ? 'Tous les cours' : 
                 categories.find(c => c.id === activeFilter)?.name}
                <span className="courses-count"> ({filteredCourses.length})</span>
              </h2>
              <div className="sort-options">
                <select className="sort-select">
                  <option>Trier par: Pertinence</option>
                  <option>Progression</option>
                  <option>Date d'accès</option>
                  <option>Popularité</option>
                </select>
              </div>
            </div>

            <div className="courses-grid-large">
              {filteredCourses.map(course => (
                <div key={course.id} className="course-card-large">
                  <div className="course-image">
                    <div className="course-icon-large">{course.image}</div>
                    <button 
                      className={`favorite-btn ${course.isFavorite ? 'active' : ''}`}
                      onClick={() => toggleFavorite(course.id)}
                    >
                      {course.isFavorite ? '❤️' : '🤍'}
                    </button>
                    <div className="course-level">{course.level}</div>
                  </div>

                  <div className="course-content">
                    <div className="course-header-large">
                      <h3 className="course-title-large">{course.title}</h3>
                      <div className="course-rating">
                        <span className="rating-star">⭐</span>
                        <span className="rating-value">{course.rating}</span>
                        <span className="rating-count">({course.students})</span>
                      </div>
                    </div>

                    <p className="course-description-large">{course.description}</p>

                    <div className="course-meta">
                      <div className="meta-item">
                        <span className="meta-icon">👤</span>
                        {course.instructor}
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">⏱️</span>
                        {course.duration}
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">📖</span>
                        {course.lessons} leçons
                      </div>
                    </div>

                    {course.progress > 0 && (
                      <div className="course-progress-large">
                        <div className="progress-header">
                          <span>Progression</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="progress-bar-large">
                          <div 
                            className="progress-fill-large" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="last-accessed">
                          Dernier accès: {course.lastAccessed}
                        </div>
                      </div>
                    )}

                    <div className="course-actions">
                      {course.progress > 0 ? (
                        <>
                          <button className="btn-continue">
                            ➤ Continuer
                          </button>
                          <button className="btn-review">
                            📖 Réviser
                          </button>
                        </>
                      ) : (
                        <button className="btn-start-large">
                          Commencer le cours
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="no-courses">
                <div className="no-courses-icon">📚</div>
                <h3>Aucun cours trouvé</h3>
                <p>Aucun cours ne correspond à vos critères de recherche.</p>
                <button 
                  className="btn-reset"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('tous');
                  }}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </section>
        </main>

        {/* Right Sidebar - Quick Stats */}
        <aside className="right-sidebar">
          <div className="quick-stats">
            <h3 className="stats-title">Vue d'ensemble</h3>
            
            <div className="stat-item-large">
              <div className="stat-icon">📚</div>
              <div className="stat-content">
                <div className="stat-value">{allCourses.length}</div>
                <div className="stat-label">Cours total</div>
              </div>
            </div>

            <div className="stat-item-large">
              <div className="stat-icon">⏱️</div>
              <div className="stat-content">
                <div className="stat-value">
                  {allCourses.filter(c => c.progress > 0).length}
                </div>
                <div className="stat-label">Cours commencés</div>
              </div>
            </div>

            <div className="stat-item-large">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <div className="stat-value">
                  {allCourses.filter(c => c.progress === 100).length}
                </div>
                <div className="stat-label">Cours terminés</div>
              </div>
            </div>

            <div className="progress-overview">
              <h4>Progression moyenne</h4>
              <div className="overview-progress">
                <div className="progress-circle-large">
                  {Math.round(allCourses.reduce((acc, course) => acc + course.progress, 0) / allCourses.length)}%
                </div>
                <div className="overview-details">
                  <div className="detail-item">
                    <span className="detail-label">En cours:</span>
                    <span className="detail-value">
                      {allCourses.filter(c => c.progress > 0 && c.progress < 100).length}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">À commencer:</span>
                    <span className="detail-value">
                      {allCourses.filter(c => c.progress === 0).length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MesCours;