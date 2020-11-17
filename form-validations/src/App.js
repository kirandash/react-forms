import './App.css';
import FormikForm from './Formik-Form/FormikForm';
import StandardForm from './Standard-Form/StandardForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 border py-3">
            <StandardForm/>
          </div>
          <div className="col-md-6 border py-3">
            <FormikForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
