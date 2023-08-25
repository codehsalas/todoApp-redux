import Card from "./components/Card/Card";
import ModalApp from "./components/ModalApp/ModalApp";
import { Container } from "@mui/material";
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';

function App() {
  return (
    <>
      <Container maxWidth="md">
        <div className="header-app">
          <ChecklistRtlIcon sx={{fontSize:30}}/>
          <h2 style={{marginLeft:10}}>Todo App</h2>
        </div>
        <Card />
      </Container>
    </>
  );
}

export default App;
