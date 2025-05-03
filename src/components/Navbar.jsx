import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* 背景画像（画面全体）
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="/backpicture.png"
          alt="TEAra header"
          className="w-full h-full object-cover object-top"
        />
      </div> */}

      {/* ロゴ・タイトル（中央） */}
      <div className="w-full h-full flex flex-col items-center justify-center text-white text-center bg-black/30">
        <div className="flex items-center space-x-4 mt-48">
          <img
            src="/teara.png"
            alt="TEAra logo"
            className="w-32 h-32 object-contain"
          />
          <h1 className="text-30xl md:text-30xl font-bold">TEAra</h1>
        </div>
        <p className="text-lg md:text-xl font-bold tracking-wide mt-2">
          お茶大生の開発コミュニティ
        </p>
      </div>

      {/* ナビバー */}
      <nav className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 shadow-md z-10">
      <ul className="w-full flex justify-center gap-6 px-4 py-2 text-xl text-neutral-950 font-['M_PLUS_1p']">
  <li>
    <Link to="/" className="text-black hover:text-gray-500 transition-colors duration-200">Home</Link>
  </li>
  <li>
    <Link to="/about" className="text-black hover:text-gray-500 transition-colors duration-200">About</Link>
  </li>
  <li>
    <Link to="/gallery" className="text-black hover:text-gray-500 transition-colors duration-200">Gallery</Link>
  </li>
  <li>
    <Link to="/events" className="text-black hover:text-gray-500 transition-colors duration-200">Events</Link>
  </li>
  <li>
    <Link to="/menbers" className="text-black hover:text-gray-500 transition-colors duration-200">Members</Link>
  </li>
  <li>
    <Link to="/joinus" className="text-black hover:text-gray-500 transition-colors duration-200">Join Us</Link>
  </li>
  <li>
    <Link to="/contact" className="text-black hover:text-gray-500 transition-colors duration-200">Contact</Link>
  </li>
  <li>
    <Link to="/links" className="text-black hover:text-gray-500 transition-colors duration-200">Links</Link>
  </li>

        </ul>
      </nav>
    </header>
  );
}
