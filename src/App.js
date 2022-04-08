import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>BEST LAPTOP</h1>
      <Shop></Shop>
      <div class= 'container'>
        <h2>React কিভাবে কাজ করে? </h2> 
          <h4>
            React হলো জাভাস্ক্রিপ্টের একটা লাইব্রেরী। এটি দিয়ে সহজে একটা ওয়েব এপ্লিকেশন বানানো যায়। এটি মূলত একমুখী ডাটা প্রবাহ করে থাকে। এতে করে এপ্লিকেশনে কোন ইরর আসলে সহজে যে সেটা ডিবাগ করা যায়। 
          </h4>

          <h2>useState কিভাবে কাজ করে?</h2>
          <h4>useState  হলো react এর একটা হুক। আমরা যখন কোন ফাংশনাল কম্পনেন্ট বানাই তখন এর মাধ্যমে আমরা ভেরিয়েবল এর মান state এ সেট করে সেটা  ব্যবহার করতে পারি এবং আপডেট ও করতে পারি।  </h4>
      </div>
    </div>

  );
}

export default App;
