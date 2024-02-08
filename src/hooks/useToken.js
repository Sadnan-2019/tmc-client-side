const { useEffect } = require("react");
const { useState } = require("react");

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // console.log("the new user",user)
    const email = user?.user?.email;
    const name = user?.user?.name;
    const password = user?.user?.password;
    const currentUser = { email: email, name: name, password: password };

    if ({email,name,password}) {
      fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside", data);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
