exports.seed = function(knex) {
  return knex("students").insert([
    { user_id: 1, student_name: "Danny Manzietti", major: "Economics" },
    { user_id: 1, student_name: "Dan Marino", major: "Marine Biology" },
    { user_id: 1, student_name: "Jemain Clement", major: "Music" },
    { user_id: 2, student_name: "Alan Turing", major: "Computer Science" },
    { user_id: 2, student_name: "Buzz Aldrin", major: "Astrophysics" },
    { user_id: 2, student_name: "John Marston", major: "Government" }
  ]);
};
