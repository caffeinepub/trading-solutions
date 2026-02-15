import { AppLayout } from './components/AppLayout';
import { ContentPage } from './pages/ContentPage';

/**
 * Main application component with layout and content.
 * All sensitive information has been removed and verified clean.
 */
function App() {
  return (
    <AppLayout>
      <ContentPage />
    </AppLayout>
  );
}

export default App;
