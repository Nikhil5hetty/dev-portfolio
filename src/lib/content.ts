export function sortByDateDesc<T extends { data: { date?: Date } }>(entries: T[]) {
  return [...entries].sort((left, right) => {
    const leftTime = left.data.date?.getTime() ?? 0;
    const rightTime = right.data.date?.getTime() ?? 0;
    return rightTime - leftTime;
  });
}

export function isPublished<T extends { data: { draft?: boolean } }>(entry: T) {
  return !entry.data.draft;
}
