export default function Featured() {
  const steps = [
    {
      number: "01",
      title: "Остановись и оцени",
      description: "30 секунд на анализ задачи. Прежде чем действовать — пойми, что именно нужно сделать.",
    },
    {
      number: "02",
      title: "Выдели главное",
      description: "Отдели важное от второстепенного. Не всё срочное — важно.",
    },
    {
      number: "03",
      title: "Правило трёх",
      description: "Не более трёх вариантов для выбора. Больше — парализует. Меньше — упрощает.",
    },
    {
      number: "04",
      title: "Действуй по плану",
      description: "Даже простой план снижает хаос. Запиши три ближайших шага и начни первый.",
    },
    {
      number: "05",
      title: "Проверь за минуту",
      description: "Быстрая сверка ключевых моментов перед финальным решением.",
    },
  ];

  return (
    <div id="steps" className="bg-white px-6 py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-400">Метод</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight max-w-2xl">
          5 шагов к эффективному решению в условиях ограниченного времени
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-8 flex flex-col gap-4">
              <span className="text-4xl font-bold text-neutral-200">{step.number}</span>
              <h4 className="text-lg font-semibold text-neutral-900">{step.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
          <div className="bg-black p-8 flex flex-col justify-between">
            <p className="text-white text-lg leading-snug italic">
              «Лучше сделать хорошо в срок, чем идеально — никогда»
            </p>
            <button className="mt-8 border border-white text-white px-4 py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 w-fit">
              Получить буклет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
