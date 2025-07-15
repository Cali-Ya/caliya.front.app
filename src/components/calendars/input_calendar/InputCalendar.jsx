//css
import clsx from 'clsx';
import './input_calendar.css';
// react
import { useEffect, useState } from 'react';

const InputCalendar = ({ name, register, setValue, errors, title }) => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [day, setDay] = useState(today.getDate());
  const [daysInMonth, setDaysInMonth] = useState(31);

  useEffect(() => {
    const days = new Date(year, month + 1, 0).getDate();
    setDaysInMonth(days);
    if (day > days) setDay(days);
  }, [year, month]);

  useEffect(() => {
    const selectedDate = new Date(year, month, day);
    const iso = selectedDate.toISOString().split('T')[0];
    setValue(name, iso, { shouldValidate: true });
  }, [year, month, day]);

  return (
    <section
      className={clsx('input_calendar', {
        'input_calendar--error': errors[name],
      })}
    >
      {title && (
        <p
          className={clsx('input_calendar__title', {
            'input_calendar__title--error': errors[name],
          })}
        >
          {title}
        </p>
      )}
      <div className="input_calendar__content_selects">
        <select
          className="input_calendar__select"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          {Array.from({ length: 121 }, (_, i) => {
            const y = today.getFullYear() - 100 + i;
            return (
              <option key={y} value={y}>
                {y}
              </option>
            );
          })}
        </select>

        <select
          className="input_calendar__select"
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
        >
          {[
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
          ].map((m, idx) => (
            <option key={idx} value={idx}>
              {m}
            </option>
          ))}
        </select>

        <select
          className="input_calendar__select"
          value={day}
          onChange={(e) => setDay(Number(e.target.value))}
        >
          {Array.from({ length: daysInMonth }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* input oculto registrado */}
      <input
        type="hidden"
        {...register}
        value={new Date(year, month, day).toISOString().split('T')[0]}
        readOnly
      />

      {errors[name] && (
        <p className="input_component__error">{errors[name]?.message}</p>
      )}
    </section>
  );
};

export default InputCalendar;
