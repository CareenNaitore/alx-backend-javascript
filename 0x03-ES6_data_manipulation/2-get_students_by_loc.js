/**
 * Retrieves city by which a student is from.

 */
export default function getListStudentIds(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
