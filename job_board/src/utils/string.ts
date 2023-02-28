export const getFullName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

// parasyti funkcija kuri pavers stringa i * kieki  e.g. tomas => *****

export const convertPassword = (name: string): string => {
  const asterisks = "*".repeat(name.length);
  return asterisks;
};