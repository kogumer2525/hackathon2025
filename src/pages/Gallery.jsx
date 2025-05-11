import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const galleryItems = [
    {
      date: "2024年8月",
      title: "日本マイクロソフト社様 オフィスツアー",
      image: "/microsoft.png",
      summary: "8月、日本マイクロソフト様 (@mskkpr) のオフィスツアーを開催いたしました。",
      details: "約20名の学生が参加し、多職種のOGや社員の皆様から貴重なお話を伺いました。職場環境を見学し、働くイメージが具体的になり、キャリアを考えるきっかけになりました。"
    },
    // 他の活動もここに追加可能
  ];

  return (
    <main className="w-full min-h-screen bg-white">
      <section className="py-16 px-6 bg-gradient-to-b from-green-100 to-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Gallery</h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mb-8">
          これまでに行った活動や成果を紹介します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.01] transition cursor-pointer border border-gray-200"
              onClick={() => toggleOpen(index)}
            >
              <img src={item.image} className="w-full h-48 object-cover" alt={item.title} />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                <p className="text-gray-600 mt-1">{item.summary}</p>
                {openIndex === index && (
                  <p className="mt-4 text-sm text-gray-700">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
