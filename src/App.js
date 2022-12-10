import TabApp from './components/TabApp';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
        <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6">
            Lopputyö
          </Typography>
        </Toolbar>
      </AppBar>

      <TabApp />
    </div>
  );
}

export default App;
