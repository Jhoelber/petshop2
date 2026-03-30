export function isStoreOpenNow(date = new Date()) {
  const day = date.getDay(); // 0 = domingo, 1 = segunda ... 6 = sábado
  const minutes = date.getHours() * 60 + date.getMinutes();

  const isWithinRange = (startHour: number, endHour: number) => {
    return minutes >= startHour * 60 && minutes < endHour * 60;
  };

  // Segunda a sexta: 08:00 às 17:00
  if (day >= 1 && day <= 5) {
    return isWithinRange(8, 17);
  }

  // Sábado: 08:00 às 12:00
  if (day === 6) {
    return isWithinRange(8, 12);
  }

  // Domingo: fechado
  return false;
}