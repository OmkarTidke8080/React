import './App.css';
import Navbar from './Components/Navbar'
import TextForm  from './Components/TextForm';

function App() {
  return (
    <>
   
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  (// this is prop) */}
{/* <Navbar />   */}
<Navbar title="TextUtils" />

 <div className='container' my-3> {/*(//my-3 is used for margin in y axis) */}
<TextForm heading="Enter the text to analyze" />

</div>
    </>
  );
}

export default App;
