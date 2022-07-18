import './App.css';
import Form from "./components/Form";

function App() {
  return (
      <div className='flex justify-center w-screen h-full mt-10'>
          <div className='flex flex-col lg:flex-row w-screen h-full'>
              <Form />
          </div>
      </div>
  );
}

export default App;
