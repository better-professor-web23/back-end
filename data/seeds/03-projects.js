exports.seed = function(knex) {
  return knex("projects").insert([
    {
      project_name: "Draw a Blank",
      deadline: "11/1/2019",
      deadline_type: "Research paper",
      description: "The sky is clear,the stars are twinkling.",
      student_id: 1
    },
    {
      project_name: "Wild Goose Chase",
      deadline: "12/12/2019",
      deadline_type: "Letter of reccomendation",
      description: "Futilely pursue something that will never be attainable",
      student_id: 1
    },
    {
      project_name: "Raining Cats and Dogs",
      deadline: "2/1/2020",
      description: "Make it rain very heavily",
      student_id: 1
    },
    {
      project_name: "Test Project1",
      deadline: "11/25/2019",
      deadline_type: "Research paper",
      description: "TestDescripton1",
      student_id: 2
    },
    {
      project_name: "Test Project2",
      deadline: "12/11/3500",
      deadline_type: "Feedback",
      description: "TestDescripton2",
      student_id: 2
    },
    {
      project_name: "Test Project3",
      deadline: "12/3/2021",
      description: "TestDescripton3",
      student_id: 3
    },
    {
      project_name: "Test Project4",
      deadline: "1/19/3000",
      deadline_type: "Feedback",
      description: "TestDescripton4",
      student_id: 3
    }
  ]);
};
