export const getWidthClass = (grade: number) => {
  switch (grade) {
    case 1:
      return 'w-1/5';
    case 2:
      return 'w-2/5';
    case 3:
      return 'w-3/5';
    case 4:
      return 'w-4/5';
    case 5:
      return 'w-full';
    default:
      return 'w-0';
  }
};

export const calculateDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end: Date = endDate === 'Present' ? new Date() : new Date(endDate);

  let years: number = end.getFullYear() - start.getFullYear();
  let months: number = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  let durationString: string = '';
  if (years > 0) {
    durationString += `${years} year${years > 1 ? 's' : ''}`;
  }
  if (months > 0) {
    if (durationString) durationString += ' ';
    durationString += `${months} month${months > 1 ? 's' : ''}`;
  }
  // Handle cases with less than a year
  if (years === 0 && months > 0) {
    durationString = `${months} month${months > 1 ? 's' : ''}`;
  } else if (years > 0 && months === 0) {
    durationString = `${years} year${years > 1 ? 's' : ''}`;
  } else if (years === 0 && months === 0) {
    durationString = 'Less than a month';
  }

  return durationString;
};
