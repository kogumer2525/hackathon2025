export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">

      <section className="flex justify-center items-center py-5 px-6">
        <div className="max-w-screen-lg w-full flex justify-between items-center space-x-8">
          {/* 左側の文章 */}
          <div className="w-1/2 text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              参加者募集中！
            </h3>
            <p className="text-lg text-gray-700">
              このハッカソンでは、Reactやその他の開発技術を使って、楽しくプロジェクトを作り上げます。どなたでも参加できますので、興味があればぜひご応募ください！
            </p>
          </div>

          {/* 右側の画像 */}
          <div className="w-1/2 flex justify-center">
            <img
              src="/Hack.png"
              alt="TEAra Hackathon Banner"
              className="w-full max-w-3xl rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

     

      {/* セクション3：CTA */}
      <section className="text-center py-16 bg-green-100">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          2025年春のハッカソン、開催中！
        </h3>
        <p className="text-gray-700 mb-6">Reactでサイトを作ろう</p>
        <a
          href="https://example.com/apply"
          className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-600 transition"
        >
          参加はこちらから
        </a>
      </section>
    </main>
  );
}