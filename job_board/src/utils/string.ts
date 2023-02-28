export const getFullName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

// parasyti funkcija kuri pavers stringa i * kieki  e.g. tomas => *****

export const convertPasswordToAsterisks = (password: string): string => {
  return "*".repeat(password.length);
};
