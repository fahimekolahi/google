import logo from '../src/unnamed.png';
import google from '../src/googlelogo_color_272x92dp.png'
import './App.css';
import search from './search.svg'
import keyboard from './keyboard.svg'
import mic from './mic.svg'
import camera from './camera.svg'

function App() {
  return (
    <div className="App" dir="rtl">
      <header className="flex justify-between mt-3 ml-4">
        <div></div>
        <div className="flex gap-6 items-center text-[13px]">
          <a>Gmail</a>
          <a>تصاویر</a>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </a>

          <a>
            <img src={logo} className="rounded-[50%]" />
          </a>
        </div>
      </header >
      <main className="flex flex-col gap-6">
        <div className="flex justify-center w-[272px] he-[92px] mx-auto mt-[6.5rem]">
          <img src={google} />
        </div>

        <div className="sm:w-[582px] w-[80%] h-[46px] border border-[#84843] rounded-[1.4rem] mx-auto">
          <div className="flex justify-between items-center mx-4 my-3">
            <div className="flex items-center">
              <img src={search} />
            </div>

            <input className="sm:w-[450px] w-[60%] h-full z-10 ">




</input>


            <div className="flex gap-5 items-center">
             <a href="#"> <img src={keyboard} /></a>
             <a href="#"> <img src={mic} /></a>
             <a href="#"> <img src={camera} /></a>

            </div>
          </div>
         
        </div>


        <div className="flex gap-3 justify-center text-[14px]">
          <button className="bg-[#F8F9FA] w-[116px] h-[36px] rounded-[4px] text-[#252139]"> جستجوی Google</button>
          <button className="bg-[#F8F9FA] w-[116px] h-[36px] rounded-[4px] text-[#252139]">یا بخت یا اقبال</button>
        </div>
        <p className="text-[13px]">Google  به این زبان ارائه می شود : <a href="#" className="text-[#1A2DCC]">English</a></p>


      </main>

      <footer className="bg-[#F2F2F2] w-full h-[42px] text-[13px] text-[#202124] flex items-center fixed bottom-0 px-[2rem] justify-between">
        <div className="flex gap-4">
          <a href="#">درباره</a>
          <a href="#">تبلیغ</a>
          <a href="#">تجارت</a>
          <a href="#">نحوه عملکرد جستجو</a>
        </div>

        <div className="flex gap-4">
          <a href="#">حریم خصوصی</a>
          <a href="#">شرایط</a>
          <a href="#">تنظیمات</a>

        </div>

      </footer>



    </div >
  );
}

export default App;
