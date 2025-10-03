

import React, { useEffect, useState } from 'react'
import './App.css';

const App = () => {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data");
        const data = await res.json();
        const sorted = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sorted);
      } catch (err) {
        console.log("Server Error0", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='container'>
      <header className='header'>
        <h1>🏏 IPL 2022 Points Table</h1>
        <p className='subtitle'>Updated standings with Net Run Rate</p>
      </header>

      <div className='card'>
        <table className='table'>
          <thead>
            <tr>
              <th>No</th>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>NRR</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.No}>
                <td>{team.No}</td>
                <td>{team.Team}</td>
                <td>{team.Matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Tied}</td>
                <td>{team.NRR}</td>
                <td>{team.Points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default App
