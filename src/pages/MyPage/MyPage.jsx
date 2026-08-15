import Header from "../../components/layout/Header";
import CoursePlayer from "../../components/course/CoursePlayer";

const MyPage = ({duration}) => {
  return (
    <>
      <Header
        title="Duration"
      />

      <div style={{height:"1500px"}}>MyPage</div>
      <CoursePlayer />
    </>
  );
};

export default MyPage;