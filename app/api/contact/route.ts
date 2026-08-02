import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Заполните обязательные поля.",
        },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        {
          success: false,
          error: "Telegram не настроен.",
        },
        { status: 500 }
      );
    }

    const text = `
🔔 <b>Новая заявка AquaPrime</b>

👤 <b>Имя:</b>
${name}

📞 <b>Телефон:</b>
${phone}

💬 <b>Комментарий:</b>
${message || "—"}

🕒 ${new Date().toLocaleString("ru-RU")}
`;

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Telegram API Error");
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Ошибка отправки.",
      },
      {
        status: 500,
      }
    );
  }
}
