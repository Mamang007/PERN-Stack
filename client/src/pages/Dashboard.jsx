import Layouts from "../components/Layouts";
import { useEffect, useState } from "react";
import { fetchProtectedInfo } from "../api/authApi";
import styles from "./index.module.css";

const Dashboard = () => {
  const [protectedData, setProtectedData] = useState([]);
  const [loading, setLoading] = useState(false);

  const protectedFetch = async () => {
    setLoading(true);
    try {
      const { data } = await fetchProtectedInfo();
      setProtectedData(data.users);
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    protectedFetch();
  }, []);

  return (
    <Layouts>
      {loading ? (
        <div>
          <h1>LOADING...</h1>
        </div>
      ) : (
        <div className={styles.dashboard}>
          <h1>Dashboard</h1>
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Email</th>
                <th>Usia</th>
              </tr>
            </thead>
            <tbody>
              {protectedData.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </Layouts>
  );
};

export default Dashboard;
