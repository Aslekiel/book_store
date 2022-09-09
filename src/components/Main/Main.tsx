import { useEffect, useState } from 'react';

type UserType = {
  id: string;
  name: string;
  lastname: string;
  email: string;
};

const Main = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const body = JSON.stringify({
          name: 'Alex',
          lastname: 'Brown',
          email: 'alex1@mail.ru',
          password: 'q1w2e3r4t5',
          dob: '12.12.1954',
        });
        const response = await fetch('http://localhost:5000/api/auth/registration', {
          method: 'POST',
          body,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        });
        const data = await response.json();
        setUser(data.newUser);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    })();
  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }
  return (<main>

    <p>User id : {user.id}</p>
    <p>User name: {user.name}</p>
  </main>);
};

export default Main;
