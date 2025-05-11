import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <main className="w-full min-h-screen bg-white">
      <section className="py-16 px-6 bg-gradient-to-b from-green-100 to-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Gallery</h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mb-8">
          これまでに行った活動や成果を紹介します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/gallery/project1">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
              <img src="/images/project1.png" alt="プロジェクト画像" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">プロジェクトタイトル</h3>
                <p className="text-gray-600">簡単な紹介文がここに入ります。</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
