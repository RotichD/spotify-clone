export function msToMin(ms: number) {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return seconds == '60'
    ? minutes + 1 + ':00'
    : minutes + ':' + (Number(seconds) < 10 ? '0' : '') + seconds;
}

export function addedAt(dateString: string) {
  const date: Date = new Date(dateString);
  const formattedDate: string = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return formattedDate;
}
