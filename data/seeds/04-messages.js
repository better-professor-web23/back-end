exports.seed = function(knex) {
  return knex("messages").insert([
    { message: "How was the math test?", date: "11/1/2019", student_id: 1 },
    {
      message: "Yo.",
      date: "1/21/2020",
      student_id: 1
    },
    {
      message: "Yoink.",
      date: "2/22/2020",
      student_id: 1
    },
    {
      message: "Message Test.",
      date: "2/12/2020",
      student_id: 1
    }
  ]);
};
