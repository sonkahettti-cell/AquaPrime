import { NextResponse } from "next/server";


export async function POST(req: Request) {

  try {

    const body = await req.json();


    const {
      name,
      phone,
      message,
      startedAt,
    } = body;



    if (!name || !phone) {

      return NextResponse.json(
        {
          error: "Заполните имя и телефон",
        },
        {
          status: 400,
        }
      );

    }



    // Защита от быстрых ботов

    if (
      startedAt &&
      Date.now() - startedAt < 3000
    ) {

      return NextResponse.json(
        {
          error: "Слишком быстро",
        },
        {
          status: 429,
        }
      );

    }



    const token =
      process.env.TELEGRAM_BOT_TOKEN;


    const chatId =
      process.env.TELEGRAM_CHAT_ID;



    if (!token || !chatId) {

      return NextResponse.json(
        {
          error: "Telegram не настроен",
        },
        {
          status: 500,
        }
      );

    }



    const text = `
🔔 Новая заявка AquaPrime

👤 Имя:
${name}

📞 Телефон:
${phone}

💬 Комментарий:
${message || "Нет"}

🌐 Сайт:
aqprime.ru
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
        }),

      }
    );



    if (!response.ok) {

      throw new Error(
        "Telegram error"
      );

    }



    return NextResponse.json(
      {
        success: true,
      }
    );



  } catch (error) {


    console.error(
      "Telegram error:",
      error
    );


    return NextResponse.json(
      {
        error: "Server error",
      },
      {
        status: 500,
      }
    );

  }

}
