import LinkButton from '@/components/LinkButton';
import DayState from '@/components/DayState';
import { Trash2 } from 'lucide-react';

export default function Home() {
  const habits = {
    'jogar bola': {
      '2024-09-24': true,
      '2024-08-12': false,
      '2024-08-14': true,
    },
    nextjs: {
      '2024-09-14': true,
      '2024-08-22': false,
      '2024-08-28': false,
    },
  };

  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  const sortedWeekDays = weekDays.slice(todayWeekDay + 1).concat(weekDays.slice(0, todayWeekDay + 1));

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null ||
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-center font-sans text-3xl font-light">
            Você não tem hábitos cadastrados
          </h1>
        ))}
      {habits !== null &&
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div className="flex flex-col gap-4" key={habit}>
            <div className="flex w-full items-center justify-between">
              <span className="font-sans text-xl font-light text-white">
                {habit}
              </span>
              <button className="text-red-500">
                <Trash2 />
              </button>
            </div>
            <section className="grid w-full grid-cols-7 rounded-md bg-neutral-800 p-2 text-center">
              {sortedWeekDays.map((day, index) => (
                <div key={index} className="flex flex-col gap-1 last:font-bold">
                  <span>{day}</span>
                  <DayState />
                </div>
              ))}
            </section>
          </div>
        ))}
      <LinkButton content='novo hábito' href='pages/novo-habito' color />
    </main>
  );
}
