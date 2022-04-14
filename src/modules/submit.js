const url =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WAUrjt2TEjdFGQcuCks4/scores/";

const submitData = async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const score = document.getElementById("score").value;
  const formS = async () => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: name,
        score: score,
      }),
    });
    const json = await res.json();
    return json;
  };

  formS();
};

export default submitData;
