import React from "react";

export default function Contact() {
  // public フォルダ直下にある画像を参照する設定
  const contacts = [
    {
      name: "メール",
      value: "teara.offical@gmail.com",
      url: "mailto:teara.offical@gmail.com",
      iconPath: "/mail.png",
    },
    {
      name: "X",
      value: "@teara_ocha",
      url: "https://twitter.com/teara_ocha?ref_src=twsrc%5Etfw",
      iconPath: "/x.png",
    },
    {
      name: "Instagram",
      value: "@teara_instagram_id",
      url: "https://www.instagram.com/teara_instagram_id",
      iconPath: "/instagram.png",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-50 pt-20 pb-12">
      {/* ヘッダー部分 */}
      <section className="pt-8 pb-12 px-6 bg-gradient-to-b from-green-200 to-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact</h2>
      </section>

      {/* 各SNSのアイコンと情報のカードレイアウト */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex-1 bg-white rounded-2xl shadow-lg p-6 mb-8 lg:mb-0 text-center"
            >
              {/* 画像ファイルは public フォルダ直下に配置 */}
              <img
                src={contact.iconPath}
                alt={`${contact.name} icon`}
                className="w-16 h-16 mx-auto mb-4"
              />

              <h3 className="text-2xl font-bold">{contact.name}</h3>
              <div className="h-1 w-24 bg-emerald-700 mx-auto my-2 rounded"></div>

              <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-lg"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
