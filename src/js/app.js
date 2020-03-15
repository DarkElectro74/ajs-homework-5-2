export default function getDesctiption(obj) {
  const result = [];
  for (const elem of obj.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = elem;
    result.push({
      id, name, icon, description,
    });
  }
  return result;
}
