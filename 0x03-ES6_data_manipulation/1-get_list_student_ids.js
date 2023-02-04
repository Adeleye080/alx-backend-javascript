export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return ([]);
  } else {
    return array.map(x => x.id);
  }
}