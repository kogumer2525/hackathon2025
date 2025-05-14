import React, { useState } from "react";

export default function Events() {
  const [proposal, setProposal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("提案を送信しました！");
    setProposal("");
  };

  return (
    <main className="w-full min-h-screen bg-gray-50 pt-20 pb-12">
      <section className="pt-8 pb-12 px-6 bg-gradient-to-b from-green-200 to-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Event</h2>
      </section>

      <section className="px-6 flex flex-col lg:flex-row lg:space-x-8 max-w-6xl mx-auto">
        <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-lg p-6 mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold text-center">カレンダー</h3>
          <div className="h-1 w-24 bg-emerald-700 mx-auto my-2 rounded"></div>
          <p className="text-center text-gray-600 mb-4">今後の活動予定です！</p>
          <div className="rounded border border-gray-200 overflow-hidden">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=c_df17a1ee7fdd4e5ac54219dbd95f3da7782863d21f1a7e0fb5413734e1c5eb87%40group.calendar.google.com&ctz=Asia%2FTokyo"
              title="Google Calendar"
              width="100%"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-center">提案箱</h3>
          <div className="h-1 w-24 bg-emerald-700 mx-auto my-2 rounded"></div>
          <p className="text-center text-gray-600 mb-4">
            今後の活動の参考にするために、ぜひ皆さんにやりたい活動の案を提案してほしいです！
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="proposal" className="block text-sm font-semibold mb-1">
                概要と詳細
              </label>
              <textarea
                id="proposal"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-300 h-32"
                placeholder="イベントの概要や特記事項を入力"
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white p-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              送信する
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
