import '../styles/palettes.css';
import '../styles/calligraphy.css';

import styles from './styles.module.css';

import { Route, Routes, Link, Outlet } from 'react-router-dom';
import { LandingPage } from './routes/landingPage';
import { ProjectsPage } from './routes/projects/projectsPage';

function Layout() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        {/* Placeholder for logo */}
        <div
          style={{
            height: '100px',
            width: '100px',
            backgroundColor: 'slategray',
          }}
        ></div>

        {/* Aboslute navigation links */}
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <Link to="/">Home</Link>
            <Link to="/Projects">Projects</Link>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        {/* Presence links here */}
        <a href="/" target="_blank" referrerPolicy="no-referrer">
          Github
        </a>
        <a href="/" target="_blank" referrerPolicy="no-referrer">
          LinkedIn
        </a>
      </footer>
    </div>
  );
}

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
