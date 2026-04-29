import type { Dictionary } from "../types";

export const ru: Dictionary = {
  meta: {
    title: "Ремонт техники Apple в Таллине",
    description:
      "Ремонт MacBook, iPhone, iPad и Apple Watch в Таллине. Быстрая диагностика, аккуратная работа и выбор запчастей под ваш бюджет и предпочтения.",
    ogTitle: "AppleFix — ремонт техники Apple в Таллине",
    ogDescription:
      "Оставьте заявку меньше чем за минуту. Быстрая диагностика и понятная коммуникация.",
  },
  nav: {
    cta: "Оставить заявку",
    call: "Позвонить",
  },
  hero: {
    headline: "Ремонт устройств Apple в Таллине",
    subheadline:
      "MacBook, iPhone, iPad и Apple Watch. Быстрая диагностика, аккуратный ремонт и выбор запчастей под ваши предпочтения и бюджет.",
    primaryCta: "Оставить заявку",
    secondaryCta: "Позвонить сейчас",
    trust: ["Быстрая диагностика", "Аккуратный ремонт", "Запчасти: вы выбираете"],
  },
  devices: {
    title: "Устройства",
    items: {
      macbook: {
        title: "MacBook",
        description: "Экран, батарея, клавиатура, трекпад и сложные неисправности.",
      },
      iphone: {
        title: "iPhone",
        description: "Замена экрана и батареи, камеры, зарядка и другое.",
      },
      ipad: {
        title: "iPad",
        description: "Стекло/экран, зарядка, батареи и диагностика.",
      },
      watch: {
        title: "Apple Watch",
        description: "Батарея, дисплей, зарядка и диагностика после влаги.",
      },
    },
  },
  services: {
    title: "Популярные услуги",
    note: "Итоговая стоимость зависит от модели и проблемы. После диагностики согласуем варианты и цену.",
    items: {
      screen: { title: "Замена экрана" },
      battery: { title: "Замена батареи" },
      keyboard: { title: "Ремонт клавиатуры" },
      trackpad: { title: "Ремонт трекпада" },
      camera: { title: "Ремонт камеры" },
      charging_port: { title: "Ремонт разъёма зарядки" },
      diagnostics: { title: "Диагностика" },
      other: { title: "Другой ремонт" },
    },
  },
  benefits: {
    title: "Почему AppleFix",
    items: [
      {
        title: "Специализация на Apple",
        description: "Налаженный процесс, инструменты и опыт именно по Apple устройствам.",
      },
      {
        title: "Быстрая диагностика",
        description: "Оперативно подтверждаем причину и оптимальный вариант ремонта.",
      },
      {
        title: "Аккуратная работа",
        description: "Чистый процесс, ESD-защита и внимание к деталям.",
      },
      {
        title: "Запчасти — на выбор",
        description:
          "Оригинальные детали или качественные альтернативы — под ваши предпочтения и бюджет.",
        highlight: true,
      },
      {
        title: "Гарантия на работы",
        description: "Мы отвечаем за ремонт и объясняем условия гарантии.",
      },
      {
        title: "Понятная коммуникация",
        description: "Прозрачные обновления и согласование перед началом работ.",
      },
    ],
  },
  how: {
    title: "Как это работает",
    steps: [
      { title: "Оставляете заявку", description: "Укажите устройство и проблему." },
      { title: "Мы связываемся", description: "Уточняем детали и дальнейшие шаги." },
      {
        title: "Диагностика",
        description: "Проясняем причину, сроки и варианты по запчастям.",
      },
      { title: "Ремонт", description: "После согласования выполняем ремонт." },
      {
        title: "Получаете устройство",
        description: "Забираете в Таллине — готово к работе.",
      },
    ],
  },
  form: {
    title: "Заявка на ремонт",
    subtitle: "Меньше минуты. Мы ответим в ближайшее время.",
    submit: "Отправить",
    submitting: "Отправляем…",
    successTitle: "Заявка принята",
    successBody: "Спасибо. Мы скоро свяжемся, чтобы уточнить детали.",
    errorTitle: "Не удалось отправить",
    errorBody: "Попробуйте ещё раз чуть позже или позвоните нам.",
    securityError:
      "Проверка безопасности не пройдена. Обновите страницу и попробуйте снова.",
    fields: {
      name: { label: "Имя", placeholder: "Ваше имя" },
      contact: {
        label: "Контакт (телефон или Telegram)",
        placeholder: "+372… или @username",
      },
      email: { label: "Email", placeholder: "name@example.com" },
      deviceType: { label: "Устройство", placeholder: "Выберите" },
      repairType: { label: "Тип ремонта", placeholder: "Выберите" },
      deviceModel: {
        label: "Модель",
        placeholder: "например iPhone 14 Pro, MacBook Air M1",
        optional: "Необязательно",
      },
      deviceColor: {
        label: "Цвет",
        placeholder: "например Midnight, Silver",
        optional: "Необязательно",
      },
      comment: {
        label: "Комментарий",
        placeholder: "Опишите проблему и важные детали",
        optional: "Необязательно",
      },
    },
    options: {
      deviceType: {
        macbook: "MacBook",
        iphone: "iPhone",
        ipad: "iPad",
        watch: "Apple Watch",
      },
      repairType: {
        screen: "Экран",
        battery: "Батарея",
        keyboard: "Клавиатура",
        trackpad: "Трекпад",
        camera: "Камера",
        charging_port: "Разъём зарядки",
        diagnostics: "Диагностика",
        other: "Другое",
      },
    },
    validation: {
      nameRequired: "Пожалуйста, укажите имя.",
      contactRequired: "Пожалуйста, укажите телефон или Telegram.",
      emailInvalid: "Пожалуйста, укажите корректный email.",
      deviceTypeRequired: "Пожалуйста, выберите устройство.",
      repairTypeRequired: "Пожалуйста, выберите тип ремонта.",
      rateLimited: "Слишком много заявок. Попробуйте через минуту.",
    },
  },
  contacts: {
    title: "Контакты",
    directions: "Построить маршрут",
    mapHint: "Таллинн, Punane 16/1 - 101",
  },
  footer: {
    privacy: "Политика конфиденциальности",
  },
  system: { language: "ru" },
};