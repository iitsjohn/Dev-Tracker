export default function formatDate(date: string) {
  if (!date) return "";

  const dateObj = new Date(date);
  // const options = { day: "2-digit", month: "2-digit", year: "numeric" };

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(dateObj);
}
