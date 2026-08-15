import Header from "../../components/layout/Header";

const Course = ({duration}) => {
  return (
    <>
      <Header
        title={duration}
      />

      <div>Course</div>

    </>
  );
};

export default Course;