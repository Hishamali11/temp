import './App.css';
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import DataGridDemo from './components/data'
import LeftButtonGroup from './components/leftButtonGroup'
import Footer from './components/footer'
import Temp from'./components/temp'


function App() {
  return (
    <div style={{ height: '90vh', width: '100%' ,backgroundColor:'#283d4a'}}>
      <TodoList/>
      <LeftButtonGroup/>
      <DataGridDemo/>
      <Footer/>
      
    </div>
  );
}

export default App;
