export const getWidthClass = (grade: number) => {
  switch (grade) {
    case 1: return 'w-1/5';
    case 2: return 'w-2/5';
    case 3: return 'w-3/5';
    case 4: return 'w-4/5';
    case 5: return 'w-full';
    default: return 'w-0';
  }
};