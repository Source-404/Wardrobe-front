import { Route, Routes } from "react-router";

const Welcome = () => {
  return (
    //why on earth is this new-user not working
    <section>
      <h1>Submit Query or Build Wardrobe</h1>
      <Routes>
        <Route path="/new-user" element={<p>Oh so you are a new user</p>} />
      </Routes>
    </section>
  );
};

export default Welcome;
