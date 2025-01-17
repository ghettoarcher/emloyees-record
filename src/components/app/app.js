import AppInfo from '../app-info/app-info';
import './app.css';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


function App(){
      return (
            <div className="app">
                  <AppInfo/>
                  <div className="search-panel">
                        <SearchPanel/>
                        <AppFilter/>
                  </div>
                  <EmployeesList/>
                  <EmployeesAddForm/>
            </div>
      );
}

export default App;